"use client";

import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import SVGObjectRenderer from "../SVGObjectRenderer";
import { Position, SVGObject } from "@/lib/util/types";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { useEffect, useState } from "react";
import { easeLinear } from "@/lib/util/animation";

export default function PlayerHoldingMelee({
  melee,
  skin,
  use,
}: PlayerHoldingMeleeProps) {
  const fps = 60;
  const modes: ("Hold" | "Used" | "Animate" | "Pause")[] = [
    "Hold",
    "Used",
    "Animate",
    "Pause",
  ];
  const [currentMode, setCurrentMode] = useState<
    "Hold" | "Used" | "Animate" | "Pause"
  >("Hold");
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  /**
   * true = left
   * false = right
   */
  const [fist, setFist] = useState(true);
  const randomFist = melee.fists.randomFist ? 0 : 1;
  const duration = melee.fists.animationDuration;
  const weapon: SVGObject = {
    type: "image",
    url: getSuroiImageLink(melee),
    x: easeLinear(
      melee.image?.position.x ?? 0,
      melee.image?.usePosition.x ?? 0,
      progress,
    ),
    y: easeLinear(
      melee.image?.position.y ?? 0,
      melee.image?.usePosition.y ?? 0,
      progress,
    ),
    rotation: easeLinear(
      melee.image?.angle ?? 0,
      melee.image?.useAngle ?? 0,
      progress,
    ),
    zIndex: 1,
  };

  const leftFist: SVGObject = {
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: easeLinear(
      melee.fists.left.x,
      melee.fists.useLeft.x,
      progress * (!fist ? 1 : randomFist),
    ),
    y: easeLinear(
      melee.fists.left.y,
      melee.fists.useLeft.y,
      progress * (!fist ? 1 : randomFist),
    ),
    zIndex: 4,
  };

  const rightFist: SVGObject = {
    type: "image",
    url: getSuroiImageLink(skin, undefined, "fist"),
    x: easeLinear(
      melee.fists.right.x,
      melee.fists.useRight.x,
      progress * (fist ? 1 : randomFist),
    ),
    y: easeLinear(
      melee.fists.right.y,
      melee.fists.useRight.y,
      progress * (fist ? 1 : randomFist),
    ),
    zIndex: 4,
  };

  useEffect(() => {
    const animation = setInterval(() => {
      switch (currentMode) {
        case "Hold":
          setProgress(0);
          break;
        case "Used":
          setProgress(1);
          break;
        case "Animate":
          if (progress >= 1) {
            setDirection(-1);
          } else if (progress <= 0) {
            setDirection(1);
            setFist(!fist);
          }
          setProgress(progress + (1 / fps) * (1000 / duration) * direction);
      }
    }, 1000 / fps);
    return () => clearInterval(animation);
  }, [progress, direction, duration, currentMode, fist]);

  return (
    <div className="">
      <svg viewBox="-100 -150 300 300">
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
        {modes.map((mode, i) => (
          <button
            key={i}
            onClick={() => setCurrentMode(mode)}
            className={`p-2 ${
              currentMode === mode ? "border-primary" : "border-border"
            } border rounded-md`}
          >
            {mode}
          </button>
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
