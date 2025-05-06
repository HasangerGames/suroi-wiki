import { getSuroiImageLink, imageLink } from "@/lib/util/suroi";
import { SVGObject } from "@/lib/util/types";
import { Layer, ObjectCategory, RotationMode, ZIndexes } from "@/vendor/suroi/common/src/constants";
import { BuildingDefinition, Buildings } from "@/vendor/suroi/common/src/definitions/buildings";
import { ObstacleDefinition, Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import { Orientation } from "@/vendor/suroi/common/src/typings";
import { Hitbox, HitboxType, RectangleHitbox } from "@/vendor/suroi/common/src/utils/hitbox";
import { Angle, Numeric } from "@/vendor/suroi/common/src/utils/math";
import { ObjectDefinition, ReferenceOrRandom, ReferenceTo } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { random } from "@/vendor/suroi/common/src/utils/random";
import { Vec, Vector } from "@/vendor/suroi/common/src/utils/vector";
import { getRandomIDString } from "@/vendor/suroi/server/src/utils/misc";
import SVGObjectRenderer from "../SVGObjectRenderer";

const PIXI_SCALE = 20;
const WALL_STROKE_WIDTH = 8;

export const RENDERED_BUILDING_VIEWS = ["bunker", "first_floor", "second_floor", "ceiling"] as const;

const IMAGES_IN_MM = ["headquarters_ceiling_1", "headquarters_ceiling_2", "headquarters_torture_window", "port_warehouse_ceiling"];

const layerCount = Object.keys(ZIndexes).length / 2; // account for double-indexing

export function getEffectiveZIndex(orig: ZIndexes, layer = Layer.Ground): number {
  return orig + layer * layerCount;
}

function rotationToOrientation(rotation: number): number {
  return 3 - Numeric.absMod((rotation / Math.PI * 2) - 1, 4);
}

function transformPosition(position: Vector, offset?: Vector, orientation = 0) {
  const adjustedOffset = offset && Vec.addAdjust(Vec.create(0, 0), offset, orientation as Orientation);
  const adjustedPosition = Vec.addAdjust(Vec.create(0, 0), position, orientation as Orientation);
  return Vec.scale(adjustedOffset ? Vec.add(adjustedPosition, adjustedOffset) : adjustedPosition, PIXI_SCALE);
}

function getBuildingFloorOrCeilingImages(
  images: BuildingDefinition["floorImages"],
  zIndex: ZIndexes,
  offset?: Vector,
  orientation = 0
): SVGObject[] {
  return (images ?? []).map(
    ({ key, position, rotation = 0, scale, tint, zIndex: imageZIndex }) => {
      if (rotation) {
        rotation = rotationToOrientation(rotation);
      }
      const { x, y } = transformPosition(position, offset, orientation);
      const mmScale = IMAGES_IN_MM.includes(key) ? 0.9365 : 1;
      return {
        type: "image",
        url: imageLink(key, ObjectCategory.Building),
        x, y,
        rotation: Angle.radiansToDegrees(
          Angle.orientationToRotation(
            Numeric.addOrientations(rotation as Orientation, orientation as Orientation)
          )
        ),
        scaleX: (scale?.x ?? 1) * mmScale,
        scaleY: (scale?.y ?? 1) * mmScale,
        tint,
        zIndex: zIndex ?? imageZIndex
      };
    }
  );
}

export default function RenderedBuilding({ building, view, className }: { building: BuildingDefinition, view: typeof RENDERED_BUILDING_VIEWS[number], className?: string }) {
  const hitbox = building.spawnHitbox.toRectangle().transform(Vec.create(0, 0), PIXI_SCALE);
  const { x, y } = hitbox.getCenter();
  const { min, max } = hitbox;
  const [width, height] = [max.x - min.x, max.y - min.y];

  return (
    <svg viewBox={`${(-width + x) / 2} ${(-height + y) / 2} ${width + x} ${height + y}`} className={className}>
      <SVGObjectRenderer objects={getBuildingObjects(building, view)}></SVGObjectRenderer>
    </svg>
  );
}

function getBuildingObjects(
  building: BuildingDefinition,
  view: typeof RENDERED_BUILDING_VIEWS[number],
  layer: Layer = Layer.Ground,
  offset?: Vector,
  orientation = 0
): SVGObject[] {
  return [
    ...getBuildingFloorOrCeilingImages(
      building.floorImages,
      getEffectiveZIndex(building.floorZIndex ?? ZIndexes.BuildingsFloor, layer),
      offset,
      orientation
    ),

    ...(
      view === "ceiling"
        ? getBuildingFloorOrCeilingImages(
          building.ceilingImages,
          getEffectiveZIndex(building.ceilingZIndex ?? ZIndexes.BuildingsCeiling, layer),
          offset,
          orientation
        )
        : []
    ),

    ...(building.obstacles ?? [])
      .filter(({ idString }) => !Obstacles.fromString(getIDString(idString)).invisible)
      .map(({ idString, position, rotation = 0, variation, scale }) => {
        rotation = Numeric.addOrientations(rotation as Orientation, orientation as Orientation);

        const id = getRandomIDString(idString);
        const obstacle = Obstacles.fromString(id);

        const scaledPosition = transformPosition(position, offset, orientation);
        const { x, y } = obstacle.isDoor ? Vec.addAdjust(scaledPosition, Vec.create(-9, 0), rotation as Orientation) : scaledPosition;

        return {
          type: obstacle.wall ? "react" : "image",
          url: obstacle.wall
            ? renderWall(obstacle as WallObstacle)
            : getSuroiImageLink(obstacle, (variation !== undefined ? variation + 1 : obstacle.variations !== undefined ? random(1, obstacle.variations) : undefined)),
          x, y,
          rotation: obstacle.rotationMode === RotationMode.None ? 0 : Angle.radiansToDegrees(Angle.orientationToRotation(rotation)),
          scaleX: scale ?? 1,
          scaleY: scale ?? 1,
          zIndex: getEffectiveZIndex(obstacle.zIndex ?? ZIndexes.ObstaclesLayer1, layer)
        };
      }),

    ...(building.subBuildings ?? [])
      .filter(b =>
        (view === "second_floor" || b.layer !== Layer.Upstairs)
        && (view === "bunker" || b.layer !== Layer.Basement)
      )
      .flatMap(b =>
        getBuildingObjects(
          Buildings.fromString(getRandomIDString(b.idString)),
          view,
          b.layer,
          offset ? Vec.add(b.position, offset) : b.position,
          Numeric.addOrientations(orientation as Orientation, b.orientation ?? 0)
        )
      ),

    ...Array.from(building.groundGraphics ?? []).reverse().flatMap((graphics, i) => renderGroundGraphics(graphics, -i, offset, orientation)),
    ...Array.from(building.graphics ?? []).reverse().flatMap((graphics, i) => renderGroundGraphics(graphics, getEffectiveZIndex((building.graphicsZIndex ?? ZIndexes.BuildingsFloor) - (i / (building.graphics.length + 1)), layer), offset, orientation))
  ] as SVGObject[];
}

function getIDString<T extends ObjectDefinition>(idString: ReferenceOrRandom<T>): ReferenceTo<T> {
  return typeof idString === "object" ? Object.keys(idString)[0] : idString;
}

type WallObstacle = { hitbox: RectangleHitbox, wall: Exclude<ObstacleDefinition["wall"], undefined> };

function renderWall({ hitbox, wall }: WallObstacle) {
  const { color, borderColor, rounded } = wall;
  const { min, max } = hitbox;
  const width = (max.x - min.x) * PIXI_SCALE;
  const height = (max.y - min.y) * PIXI_SCALE;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <rect width={width} height={height} fill={`#${borderColor.toString(16)}`} />
      <rect
        x={WALL_STROKE_WIDTH}
        y={WALL_STROKE_WIDTH}
        width={width - WALL_STROKE_WIDTH * 2}
        height={height - WALL_STROKE_WIDTH * 2}
        fill={`#${color.toString(16)}`}
        rx={rounded ? WALL_STROKE_WIDTH : 0}
      />
    </svg>
  );
}

function renderGroundGraphics(
  { color, hitbox }: BuildingDefinition["groundGraphics"][number],
  zIndex: ZIndexes,
  offset?: Vector,
  orientation = 0
): SVGObject | SVGObject[] {
  if (typeof color === "number") {
    color = `#${color.toString(16).padStart(6, "0")}`;
  }
  const renderHitbox = (hitbox: Hitbox): SVGObject | SVGObject[] => {
    switch (hitbox.type) {
      case HitboxType.Rect: {
        const { min, max } = hitbox;
        const width = (max.x - min.x) * PIXI_SCALE;
        const height = (max.y - min.y) * PIXI_SCALE;
        const { x, y } = transformPosition(hitbox.getCenter(), offset, orientation);
        return {
          type: "react",
          x, y,
          url: (
            <rect width={width} height={height} fill={color as string} />
          ),
          zIndex
        };
      }
      case HitboxType.Group: {
        return hitbox.hitboxes.flatMap(hitbox => renderHitbox(hitbox));
      }
      // case HitboxType.Polygon: {
      //   return {
      //     type: "react",
      //     url: (
      //       <polygon
      //         points={
      //           hitbox.points
      //             .map(point => {
      //               const { x, y } = transformPosition(point, offset, orientation);
      //               return `${x},${y}`;
      //             })
      //             .join(" ")
      //         }
      //         fill={color as string}
      //       />
      //     ),
      //     zIndex
      //   };
      // }
    }
    return [];
  };
  return renderHitbox(hitbox);
}
