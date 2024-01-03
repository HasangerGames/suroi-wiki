"use client";

import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import SVGObjectRenderer from "../SVGObjectRenderer";
import { Position, SVGObject } from "@/lib/util/types";
import { getSuroiImageLink } from "@/lib/util/suroi";
import anime from "animejs";
import { useEffect, useState } from "react";
import { easeLinear } from "@/lib/util/animation";

export default function PlayerHoldingMelee({
  melee,
  skin,
  use,
}: PlayerHoldingMeleeProps) {
  const modes = ["normal", "used", "animated"];
  const [progress, setProgress] = useState(0);
  const [weapon, setWeapon] = useState<SVGObject>({
    type: "image",
    url: getSuroiImageLink(melee),
    x: 0,
    y: 0,
    rotation: 0,
    zIndex: 1,
  });

  const [leftFist, setLeftFist] = useState<SVGObject>({
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: 0,
    y: 0,
    zIndex: 4,
  });

  const [rightFist, setRightFist] = useState<SVGObject>({
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: use ? melee.fists.useRight.x : melee.fists.right.x,
    y: use ? melee.fists.useRight.y : melee.fists.right.y,
    zIndex: 4,
  });

  useEffect(() => {
    setInterval(() => {
      setProgress(progress + 0.01);
      const left = leftFist;
      left.x = easeLinear(melee.fists.left.x, melee.fists.useLeft.x, progress);
      left.y = easeLinear(melee.fists.left.y, melee.fists.useLeft.y, progress);
      setLeftFist(left);
      const right = rightFist;
      right.x = easeLinear(
        melee.fists.right.x,
        melee.fists.useRight.x,
        progress
      );
      right.y = easeLinear(
        melee.fists.right.y,
        melee.fists.useRight.y,
        progress
      );
      const w = weapon;
      weapon.x = easeLinear(
        melee.image?.position.x ?? 0,
        melee.image?.usePosition.x ?? 0,
        progress
      );
      weapon.y = easeLinear(
        melee.image?.position.y ?? 0,
        melee.image?.usePosition.y ?? 0,
        progress
      );
      weapon.rotation = easeLinear(
        melee.image?.angle ?? 0,
        melee.image?.useAngle ?? 0,
        progress
      );
    }, 1000 / 30);
  }, [
    leftFist,
    melee.fists.left.x,
    melee.fists.left.y,
    melee.fists.right.x,
    melee.fists.right.y,
    melee.fists.useLeft.x,
    melee.fists.useLeft.y,
    melee.fists.useRight.x,
    melee.fists.useRight.y,
    melee.cooldown,
    progress,
    rightFist,
    melee.image?.position.x,
    melee.image?.position.y,
    melee.image?.usePosition.x,
    melee.image?.usePosition.y,
    weapon,
    melee.image?.angle,
    melee.image?.useAngle,
  ]);

  return (
    <div className="cursor-not-allowed">
      <b>NOTE: Unfinished</b>
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
