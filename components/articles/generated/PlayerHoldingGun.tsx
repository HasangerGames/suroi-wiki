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
      <img ref={gunImage} src={getSuroiImageLink(gun, undefined, "world")} />
      <svg>
        <image
          href={getSuroiImageLink(gun, undefined, "world")}
          width={gunLength}
          height={gunWidth}
          x={2}
          y={45 - (gunWidth / 2)}
        />
        <image
          width={90}
          height={90}
          href={getSuroiImageLink(skin, undefined, "base")}
        />
      </svg>
    </>
  );
}

export interface PlayerHoldingGunProps extends React.PropsWithChildren {
  gun: GunDefinition;
  skin: SkinDefinition;
}
