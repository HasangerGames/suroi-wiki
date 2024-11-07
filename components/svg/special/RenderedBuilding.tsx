import { getSuroiImageLink, imageLink } from "@/lib/util/suroi";
import { SVGObject } from "@/lib/util/types";
import { Layer, ObjectCategory, ZIndexes } from "@/vendor/suroi/common/src/constants";
import { BuildingDefinition, Buildings } from "@/vendor/suroi/common/src/definitions/buildings";
import { ObstacleDefinition, Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import { Orientation } from "@/vendor/suroi/common/src/typings";
import { RectangleHitbox } from "@/vendor/suroi/common/src/utils/hitbox";
import { getEffectiveZIndex } from "@/vendor/suroi/common/src/utils/layer";
import { Angle, Numeric } from "@/vendor/suroi/common/src/utils/math";
import { ObjectDefinition, ReferenceOrRandom, ReferenceTo } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { random } from "@/vendor/suroi/common/src/utils/random";
import { Vec, Vector } from "@/vendor/suroi/common/src/utils/vector";
import SVGObjectRenderer from "../SVGObjectRenderer";

const PIXI_SCALE = 20;
const WALL_STROKE_WIDTH = 8;

export const RENDERED_BUILDING_VIEWS = ["bunker", "first_floor", "second_floor", "ceiling"] as const;

const IMAGES_IN_MM = ["headquarters_ceiling_1", "headquarters_ceiling_2", "headquarters_torture_window"];

function getBuildingFloorOrCeilingImages(
  images: BuildingDefinition["floorImages"],
  zIndex: ZIndexes,
  offset?: Vector,
  orientation?: number
): SVGObject[] {
  return images.map(
    ({ key, position, rotation, scale, tint }) => {
      rotation = Numeric.addOrientations((rotation ?? 0) as Orientation, (orientation ?? 0) as Orientation);
      const { x, y } = Vec.scale(offset ? Vec.addAdjust(position, offset, rotation as Orientation) : position, PIXI_SCALE);
      const mmScale = IMAGES_IN_MM.includes(key) ? 0.9365 : 1;
      return {
        type: "image",
        url: imageLink(key, ObjectCategory.Building),
        x, y,
        rotation: Angle.radiansToDegrees(orientation === undefined ? rotation ?? 0 : Angle.orientationToRotation(rotation ?? 0)),
        scaleX: (scale?.x ?? 1) * mmScale,
        scaleY: (scale?.y ?? 1) * mmScale,
        tint,
        zIndex
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
  orientation?: number
): SVGObject[] {
  return [
    ...getBuildingFloorOrCeilingImages(
      building.floorImages,
      getEffectiveZIndex(building.floorZIndex, layer),
      offset,
      orientation
    ),

    ...(
      view === "ceiling"
        ? getBuildingFloorOrCeilingImages(
          building.ceilingImages,
          getEffectiveZIndex(building.ceilingZIndex, layer),
          offset,
          orientation
        )
        : []
    ),

    ...building.obstacles
      .filter(({ idString }) => !Obstacles.fromString(getIDString(idString)).invisible)
      .map(({ idString, position, rotation, variation, scale }) => {
        rotation = Numeric.addOrientations((rotation ?? 0) as Orientation, (orientation ?? 0) as Orientation);
        const id = getIDString(idString);
        const obstacle = Obstacles.fromString(id);
        const scaledPosition = Vec.scale(offset ? Vec.add(position, offset) : position, PIXI_SCALE);
        const { x, y } = obstacle.isDoor ? Vec.addAdjust(scaledPosition, Vec.create(-9, 0), rotation as Orientation) : scaledPosition;
        return {
          type: obstacle.wall ? "react" : "image",
          url: obstacle.wall
            ? renderWall(obstacle as WallObstacle)
            : getSuroiImageLink(obstacle, (variation !== undefined ? variation + 1 : obstacle.variations !== undefined ? random(1, obstacle.variations) : undefined)),
          x, y,
          rotation: Angle.radiansToDegrees(Angle.orientationToRotation(rotation ?? 0)),
          scaleX: scale ?? 1,
          scaleY: scale ?? 1,
          zIndex: getEffectiveZIndex(obstacle.zIndex ?? ZIndexes.ObstaclesLayer1, layer)
        };
      }),

    ...building.subBuildings
      .filter(b =>
        (view === "second_floor" || b.layer !== Layer.Floor1)
        && (view === "bunker" || b.layer !== Layer.Basement1)
      )
      .flatMap(b =>
        getBuildingObjects(
          Buildings.fromString(getIDString(b.idString)),
          view,
          b.layer,
          offset ? Vec.add(b.position, offset) : b.position,
          Numeric.addOrientations((orientation ?? 0) as Orientation, b.orientation ?? 0)
        )
      )
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
