"use client";

import { getSuroiImageLink } from "@/lib/util/suroi";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import { useRef } from "react";
import Fist from "./util/Fist";
import { getImageSize } from "@/lib/util/image";

export default function PlayerHoldingGun({ gun, skin }: PlayerHoldingGunProps) {
  const gunDimensions = getImageSize(getSuroiImageLink(gun, undefined, "world"));
  return (
    <>
      <svg>
        {(gun.fists.leftZIndex ?? 0) < 1 && (
          <Fist
            skin={skin}
            x={gun.isDual ? 0 : gun.fists.left.x + 34 + 17}
            y={gun.isDual ? 0 : gun.fists.left.y + 45}
          />
        )}
        {(gun.fists.rightZIndex ?? 0) < 1 && (
          <Fist
            skin={skin}
            x={gun.isDual ? 0 : gun.fists.right.x + 34 + 17}
            y={gun.isDual ? 0 : gun.fists.right.y + 45}
          />
        )}
        <image
          href={getSuroiImageLink(gun, undefined, "world")}
          width={gunDimensions.length}
          height={gunWidth}
          x={gun.isDual ? 0 : gun.image.position.x}
          y={45 - gunWidth / 2 + (gun.isDual ? 0 : gun.image.position.y)}
        />
        <image
          width={90}
          height={90}
          href={getSuroiImageLink(skin, undefined, "base")}
        />
        {(gun.fists.leftZIndex ?? 0) > 1 && (
          <Fist
            skin={skin}
            x={gun.isDual ? 0 : gun.fists.left.x + 34 + 17}
            y={gun.isDual ? 0 : gun.fists.left.y + 45}
          />
        )}
        {(gun.fists.rightZIndex ?? 0) > 1 && (
          <Fist
            skin={skin}
            x={gun.isDual ? 0 : gun.fists.right.x + 34 + 17}
            y={gun.isDual ? 0 : gun.fists.right.y + 45}
          />
        )}
      </svg>
    </>
  );
}

export interface PlayerHoldingGunProps extends React.PropsWithChildren {
  gun: GunDefinition;
  skin: SkinDefinition;
}
