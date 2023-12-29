import {
  GunDefinition,
  Guns,
} from "@/vendor/suroi/common/src/definitions/guns";
import SVGGroupRenderer from "../SVGGroupRenderer";
import SVGObjectRenderer from "../SVGObjectRenderer";
import {
  SkinDefinition,
  Skins,
} from "@/vendor/suroi/common/src/definitions/skins";
import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import { SVGObject } from "@/lib/util/types";

export default function PlayerHoldingGun({ gun, skin }: PlayerHoldingGunProps) {
  const image: SVGObject[] = [
    {
      type: "image",
      x: 0,
      y: 0,
      url: getSuroiImageLink(skin, undefined, "base"),
      zIndex: 3,
    },
  ];

  if (gun.isDual) {
    const singleVariant = Guns.find((g) => {
      return g.idString === gun.singleVariant;
    });
    if (!singleVariant?.isDual) {
      // Left
      image.push({
        type: "image",
        url: getSuroiImageLink(gun, undefined, "world"),
        x: singleVariant?.image.position.x,
        y: gun.leftRightOffset * -20,
        zIndex: 2,
      });
      image.push({
        type: "image",
        url: getSuroiImageLink(skin, undefined, "fist"),
        x: singleVariant?.fists.left.x,
        y: gun.leftRightOffset * -20,
        zIndex: singleVariant?.fists.leftZIndex ?? 1,
      });
      // Right
      image.push({
        type: "image",
        url: getSuroiImageLink(gun, undefined, "world"),
        x: singleVariant?.image.position.x,
        y: gun.leftRightOffset * 20,
        zIndex: 2,
      });
      image.push({
        type: "image",
        url: getSuroiImageLink(skin, undefined, "fist"),
        x: singleVariant?.fists.right.x,
        y: gun.leftRightOffset * 20,
        zIndex: singleVariant?.fists.rightZIndex ?? 1,
      });
    }
  } else {
    image.push(
      {
        type: "image",
        url: getSuroiImageLink(gun, undefined, "world"),
        x: gun.image.position.x,
        y: gun.image.position.y,
        zIndex: 2,
      },
      {
        type: "image",
        url: getSuroiImageLink(skin, undefined, "fist"),
        x: gun.fists.right.x,
        y: gun.fists.right.y,
        zIndex: gun.fists.rightZIndex ?? 1,
      },
      {
        type: "image",
        url: getSuroiImageLink(skin, undefined, "fist"),
        x: gun.fists.left.x,
        y: gun.fists.left.y,
        zIndex: gun.fists.leftZIndex ?? 1,
      }
    );
  }
  return (
    <svg viewBox="-45 -45 250 90" className="p-4">
      <SVGObjectRenderer objects={image} />
    </svg>
  );
}

export interface PlayerHoldingGunProps extends React.PropsWithChildren {
  gun: GunDefinition;
  skin: SkinDefinition;
}
