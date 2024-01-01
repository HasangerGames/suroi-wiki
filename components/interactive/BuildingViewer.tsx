"use client";

import { BuildingDefinition } from "@/vendor/suroi/common/src/definitions/buildings";
import SVGGroupRenderer from "../svg/SVGGroupRenderer";
import { useState } from "react";
import { SVGObject } from "@/lib/util/types";
import {
  IMAGE_BASE_URL,
  getSuroiImageLink,
  getSuroiObstacle,
} from "@/lib/util/suroi";
import { clamp } from "@/lib/ts/utility";
import { HitboxType } from "@/vendor/suroi/common/src/utils/hitbox";

export default function BuildingViewer({ building }: BuildingViewerProps) {
  const dragSpeed = 0.0005;
  const scrollSpeed = 0.001;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [scale, setScale] = useState(5000);

  const obstacles: SVGObject[] = building.obstacles
    ? building.obstacles.map((obstacle) => ({
        type: "image",
        url: getSuroiImageLink(obstacle),
        x: obstacle.position.x * 20,
        y: obstacle.position.y * 20,
        rotation: (obstacle.rotation ?? 0) * -90,
        zIndex: 0,
      }))
    : [{ type: "image", url: "", zIndex: 0 }];

  const floors: SVGObject[] = building.floorImages
    ? building.floorImages.map((floor) => ({
        type: "image",
        url: `${IMAGE_BASE_URL}game/buildings/${floor.key}.svg`,
        x: floor.position.x * 20,
        y: floor.position.y * 20,
        zIndex: 0,
      }))
    : [
        {
          type: "image",
          url: "",
          zIndex: 0,
        },
      ];
  return (
    <div
      onMouseDown={(e) => {
        if (e.button === 0) setMouseDown(true);
      }}
      onMouseUp={(e) => {
        if (e.button === 0) setMouseDown(false);
      }}
      onMouseMove={(e) => {
        if (mouseDown) {
          setX(x - e.movementX * scale * dragSpeed);
          setY(y - e.movementY * scale * dragSpeed);
        }
      }}
      onWheel={(e) => {
        setScale(clamp(scale - e.deltaY * scale * scrollSpeed, 1000, 20000));
      }}
      className="w-screen h-screen fixed inset-0 bg-background z-50"
    >
      <SVGGroupRenderer
        viewBox={`${x - scale / 2} ${y - scale / 2} ${scale} ${scale}`}
        groups={[
          {
            zIndex: 0,
            objects: [...floors],
          },
          {
            zIndex: 1,
            objects: [...obstacles],
          },
        ]}
      />
    </div>
  );
}

export interface BuildingViewerProps extends React.PropsWithChildren {
  building: BuildingDefinition;
}
