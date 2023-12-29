import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import SVGObjectRenderer from "../SVGObjectRenderer";
import { SVGObject } from "@/lib/util/types";
import { MISSING_TEXTURE, getSuroiImageLink } from "@/lib/util/suroi";
import { existsSync } from "fs";

export default function PlayerHoldingMelee({
  melee,
  skin,
  use,
}: PlayerHoldingMeleeProps) {
  const image: SVGObject[] = [
    {
      type: "image",
      url: getSuroiImageLink(skin, undefined, "base"),
      zIndex: 2,
    },
  ];

  image.push(
    {
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
    },
    {
      type: "image",
      url: getSuroiImageLink(skin, undefined, "fist"),
      x: use ? melee.fists.useLeft.x : melee.fists.left.x,
      y: use ? melee.fists.useLeft.y : melee.fists.left.y,
      zIndex: 4,
    },
    {
      type: "image",
      url: getSuroiImageLink(skin, undefined, "fist"),
      x: use ? melee.fists.useRight.x : melee.fists.right.x,
      y: use ? melee.fists.useRight.y : melee.fists.right.y,
      zIndex: 4,
    }
  );
  return (
    <svg viewBox="-100 -100 300 200">
      <SVGObjectRenderer objects={image} />
    </svg>
  );
}

export interface PlayerHoldingMeleeProps extends React.PropsWithChildren {
  melee: MeleeDefinition;
  skin: SkinDefinition;
  use: boolean;
}
