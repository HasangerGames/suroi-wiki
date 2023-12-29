"use client";

import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import SVGObjectRenderer from "../SVGObjectRenderer";
import { SVGObject } from "@/lib/util/types";
import { getSuroiImageLink } from "@/lib/util/suroi";
import anime from "animejs";

export default function PlayerHoldingMelee({
  melee,
  skin,
  use,
}: PlayerHoldingMeleeProps) {
  const modes = ["normal", "used", "animated"];
  const weapon: SVGObject = {
    type: "image",
    url: getSuroiImageLink(melee),
    x:
      (use ? melee.image?.usePosition.x : melee.image?.position.x) ??
      0 + melee.offset.x,
    y:
      (use ? melee.image?.usePosition.y : melee.image?.position.y) ??
      0 + melee.offset.y,
    rotation: use ? melee.image?.useAngle : melee.image?.angle,
    zIndex: 1,
  };

  const leftFist: SVGObject = {
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: use ? melee.fists.useLeft.x : melee.fists.left.x,
    y: use ? melee.fists.useLeft.y : melee.fists.left.y,
    zIndex: 4,
  };

  const rightFist: SVGObject = {
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: use ? melee.fists.useRight.x : melee.fists.right.x,
    y: use ? melee.fists.useRight.y : melee.fists.right.y,
    zIndex: 4,
  };

  const weaponAnimation = anime({
    targets: weapon,
  });

  return (
    <div>
      <svg viewBox="-100 -100 300 200">
        <SVGObjectRenderer
          objects={[
            {
              type: "image",
              url: getSuroiImageLink(skin, undefined, "base"),
              zIndex: 2,
            },
            leftFist,
            rightFist,
            weapon,
          ]}
        />
      </svg>
      <div className="w-full flex flex-row flex-wrap gap-2">
        {modes.map((mode) => (
          <button key={mode}>{mode}</button>
        ))}
      </div>
    </div>
  );
}

export interface PlayerHoldingMeleeProps extends React.PropsWithChildren {
  melee: MeleeDefinition;
  skin: SkinDefinition;
  use: boolean;
}
