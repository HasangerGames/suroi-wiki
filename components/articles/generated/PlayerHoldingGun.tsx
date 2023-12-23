"use client";

import { getSuroiImageLink } from "@/lib/util/suroi";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import { useRef } from "react";

export default function PlayerHoldingGun({ gun, skin }: PlayerHoldingGunProps) {
  const gunImage = useRef(null);
  const fistOrigin = 34 / 2;

  const gunImageDimensions: DOMRect = gunImage.current?.getBoundingClientRect();
  const gunLength = gunImageDimensions?.width;
  const gunWidth = gunImageDimensions?.height;
  return (
    <>
      <img ref={gunImage} src={getSuroiImageLink(gun, undefined, "world")} className="invisible" />
      <svg>
        {(gun.fists.leftZIndex ?? 0) < 1 && (
          <image
            href={getSuroiImageLink(skin, undefined, "fist")}
            width={34}
            height={34}
            x={gun.isDual ? 0 : gun.fists.left.x + 34}
            y={gun.isDual ? 0 : gun.fists.left.y + 45 - fistOrigin}
          />
        )}
        {(gun.fists.rightZIndex ?? 0) < 1 && (
          <image
            href={getSuroiImageLink(skin, undefined, "fist")}
            width={34}
            height={34}
            x={gun.isDual ? 0 : gun.fists.right.x + 34}
            y={gun.isDual ? 0 : gun.fists.right.y + 45 - fistOrigin}
          />
        )}
        <image
          href={getSuroiImageLink(gun, undefined, "world")}
          width={gunLength}
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
          <image
            href={getSuroiImageLink(skin, undefined, "fist")}
            width={34}
            height={34}
            x={gun.isDual ? 0 : gun.fists.left.x + 34}
            y={gun.isDual ? 0 : gun.fists.left.y + 45 - fistOrigin}
          />
        )}
        {(gun.fists.rightZIndex ?? 0) > 1 && (
          <image
            href={getSuroiImageLink(skin, undefined, "fist")}
            width={34}
            height={34}
            x={gun.isDual ? 0 : gun.fists.right.x + 34}
            y={gun.isDual ? 0 : gun.fists.right.y + 45 - fistOrigin}
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
