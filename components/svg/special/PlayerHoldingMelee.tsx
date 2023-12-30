"use client";

import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import SVGObjectRenderer from "../SVGObjectRenderer";
import { SVGObject } from "@/lib/util/types";
import { getSuroiImageLink } from "@/lib/util/suroi";
import anime from "animejs";
import { useEffect, useState } from "react";

export default function PlayerHoldingMelee({
  melee,
  skin,
  use,
}: PlayerHoldingMeleeProps) {
  const modes = ["normal", "used", "animated"];
  const [weapon, setWeapon] = useState<SVGObject>({
    type: "image",
    url: getSuroiImageLink(melee),
    x: 0,
    y: 0,
    rotation: 0,
    zIndex: 1,
  });

  const weaponAnimation = anime({
    targets: weapon,
    x: [
      melee.image?.position.x ?? 0 + melee.offset.x,
      melee.image?.usePosition.x ?? 0 + melee.offset.x,
    ],
    y: [
      melee.image?.position.y ?? 0 + melee.offset.y,
      melee.image?.usePosition.y ?? 0 + melee.offset.y,
    ],
    rotation: [melee.image?.angle, melee.image?.useAngle],
    duration: melee.cooldown,
    easing: "linear",
    direction: "alternate",
    update: () => {
      setWeapon(weapon);
    },
    loop: true,
  });

  const [leftFist, setLeftFist] = useState<SVGObject>({
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: 0,
    y: 0,
    zIndex: 4,
  });

  const leftFistAnimation = anime({
    targets: leftFist,
    x: [melee.fists.left.x, melee.fists.useLeft.x],
    y: [melee.fists.left.y, melee.fists.useLeft.y],
    duration: melee.cooldown,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });

  const [rightFist, setRightFist] = useState<SVGObject>({
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: use ? melee.fists.useRight.x : melee.fists.right.x,
    y: use ? melee.fists.useRight.y : melee.fists.right.y,
    zIndex: 4,
  });

  const rightFistAnimation = anime({
    targets: rightFist,
    x: [melee.fists.right.x, melee.fists.useRight.x],
    y: [melee.fists.right.y, melee.fists.useRight.y],
    duration: melee.cooldown,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });

  useEffect(() => {
    weaponAnimation.play();
    leftFistAnimation.seek(0);
    rightFistAnimation.seek(0);
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
