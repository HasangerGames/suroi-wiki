import { buildingLink, getSuroiImageLink, imageLink } from "@/lib/util/suroi";
import { SVGObject } from "@/lib/util/types";
import { ObjectCategory, ZIndexes } from "@/vendor/suroi/common/src/constants";
import { BuildingDefinition } from "@/vendor/suroi/common/src/definitions/buildings";
import { ObstacleDefinition, Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import { Orientation } from "@/vendor/suroi/common/src/typings";
import { RectangleHitbox } from "@/vendor/suroi/common/src/utils/hitbox";
import { Angle } from "@/vendor/suroi/common/src/utils/math";
import { random } from "@/vendor/suroi/common/src/utils/random";
import { Vec } from "@/vendor/suroi/common/src/utils/vector";
import { getRandomIDString } from "@/vendor/suroi/server/src/utils/misc";
import SVGObjectRenderer from "../SVGObjectRenderer";

const PIXI_SCALE = 20;
const WALL_STROKE_WIDTH = 8;

function getBuildingFloorOrCeilingImages(images: BuildingDefinition["floorImages"], zIndex: ZIndexes): SVGObject[] {
  return images.map(
    ({ key, position, rotation, scale, tint }) => ({
      type: "image",
      url: imageLink(key, ObjectCategory.Building),
      x: position.x * PIXI_SCALE,
      y: position.y * PIXI_SCALE,
      rotation,
      scaleX: scale?.x ?? 1,
      scaleY: scale?.y ?? 1,
      zIndex
    })
  );
}

export default function RenderedBuilding({ building, hideCeiling = false }: { building: BuildingDefinition, hideCeiling?: boolean }) {
  const { min, max } = building.spawnHitbox.toRectangle().transform(Vec.create(0, 0), PIXI_SCALE);
  const [width, height] = [max.x - min.x, max.y - min.y];

  const objects: SVGObject[] = [
    ...getBuildingFloorOrCeilingImages(building.floorImages, building.floorZIndex),
    ...(hideCeiling ? [] : getBuildingFloorOrCeilingImages(building.ceilingImages, building.ceilingZIndex)),
    ...building.obstacles.filter(({ idString }) => !Obstacles.fromString(typeof idString === "object" ? Object.keys(idString)[0] : idString).invisible).map(
      ({ idString, position, rotation, variation, scale }) => {
        const id = getRandomIDString(idString);
        const obstacle = Obstacles.fromString(id);
        const scaledPosition = Vec.scale(position, PIXI_SCALE);
        const adjustedPosition = id === "door" ? Vec.addAdjust(scaledPosition, Vec.create(-9, 0), rotation as Orientation) : scaledPosition;
        return {
          type: "image",
          url: obstacle.wall
            ? renderWall(obstacle as WallObstacle)
            : getSuroiImageLink(obstacle, (variation !== undefined ? variation + 1 : obstacle.variations !== undefined ? random(1, obstacle.variations) : undefined)),
          x: adjustedPosition.x,
          y: adjustedPosition.y,
          rotation: Angle.radiansToDegrees(Angle.orientationToRotation(rotation ?? 0)),
          scaleX: scale ?? 1,
          scaleY: scale ?? 1,
          zIndex: obstacle.zIndex ?? ZIndexes.ObstaclesLayer1
        };
      }
    )
  ];

  return (
    <svg viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}>
      <SVGObjectRenderer objects={objects}></SVGObjectRenderer>
    </svg>
  );
}

type WallObstacle = { hitbox: RectangleHitbox, wall: Exclude<ObstacleDefinition["wall"], undefined> };

function renderWall({ hitbox, wall }: WallObstacle) {
  const { color, borderColor, rounded } = wall;
  const { min, max } = hitbox;
  const width = (max.x - min.x) * PIXI_SCALE;
  const height = (max.y - min.y) * PIXI_SCALE;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="#${borderColor.toString(16)}" /><rect x="${WALL_STROKE_WIDTH}" y="${WALL_STROKE_WIDTH}" width="${width - WALL_STROKE_WIDTH * 2}" height="${height - WALL_STROKE_WIDTH * 2}" fill="#${color.toString(16)}" ${rounded ? `rx="${WALL_STROKE_WIDTH}"` : ""} /></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
