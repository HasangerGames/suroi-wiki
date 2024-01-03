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
  const weapon: SVGObject = {
    type: "image",
    url: getSuroiImageLink(melee),
    x: easeLinear(
      melee.image?.position.x ?? 0,
      melee.image?.usePosition.x ?? 0,
      progress
    ),
    y: easeLinear(
      melee.image?.position.y ?? 0,
      melee.image?.usePosition.y ?? 0,
      progress
    ),
    rotation: easeLinear(
      melee.image?.angle ?? 0,
      melee.image?.useAngle ?? 0,
      progress
    ),
    zIndex: 1,
  };

  const leftFist: SVGObject = {
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: easeLinear(melee.fists.left.x, melee.fists.useLeft.x, progress),
    y: easeLinear(melee.fists.left.y, melee.fists.useLeft.y, progress),
    zIndex: 4,
  };

  const rightFist: SVGObject = {
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: easeLinear(melee.fists.right.x, melee.fists.useRight.x, progress),
    y: easeLinear(melee.fists.right.y, melee.fists.useRight.y, progress),
    zIndex: 4,
  };

  useEffect(() => {
    setInterval(() => {
      setProgress(progress + 0.01);
      console.log(progress);
    }, 1000 / 60);
  }, [progress]);

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
