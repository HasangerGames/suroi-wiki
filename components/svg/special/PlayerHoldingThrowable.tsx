import { IMAGE_BASE_URL, getSuroiImageLink } from "@/lib/util/suroi";
import { SVGObject } from "@/lib/util/types";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/items/skins";
import { ThrowableDefinition } from "@/vendor/suroi/common/src/definitions/items/throwables";
import SVGObjectRenderer from "../SVGObjectRenderer";

type Position = {
  x: number
  y: number
};

export default function PlayerHoldingThrowable({
  item,
  skin,
  state
}: PlayerHoldingThrowableProps) {
  const base = getSuroiImageLink(skin, undefined, "base");
  const fist = getSuroiImageLink(skin, undefined, "fist");

  const leftFist: Position = {
    x:
      state === "cook"
        ? item.animation.cook.leftFist.x * 20
        : state === "throw"
          ? item.animation.throw.leftFist.x * 20
          : 38,
    y:
      state === "cook"
        ? item.animation.cook.leftFist.y * 20
        : state === "throw"
          ? item.animation.throw.leftFist.y * 20
          : -35
  };
  const rightFist: Position = {
    x:
      state === "cook"
        ? item.animation.cook.rightFist.x * 20
        : state === "throw"
          ? item.animation.throw.rightFist.x * 20
          : 38,
    y:
      state === "cook"
        ? item.animation.cook.rightFist.y * 20
        : state === "throw"
          ? item.animation.throw.rightFist.y * 20
          : 35
  };

  const image: SVGObject[] = [
    {
      type: "image",
      url: base,
      zIndex: 2
    },
    {
      type: "image",
      url: fist,
      x: leftFist.x,
      y: leftFist.y,
      zIndex: 4
    },
    {
      type: "image",
      url: fist,
      x: rightFist.x,
      y: rightFist.y,
      zIndex: 4
    }
  ];

  if (state === "cook" || state === "throw") {
    image.push({
      type: "image",
      url: `${IMAGE_BASE_URL}game/projectiles/throwables/${item.animation.liveImage}.svg`,
      x: rightFist.x,
      y: rightFist.y,
      rotation: item.image.angle ?? 0,
      zIndex: 5
    });
  }
  if (state === "cook") {
    image.push({
      type: "image",
      url: `${IMAGE_BASE_URL}game/projectiles/throwables/${item.animation.pinImage}.svg`,
      x: leftFist.x + 15,
      y: leftFist.y,
      zIndex: 3
    });
  }
  if (state === "hold") {
    image.push({
      type: "image",
      url: getSuroiImageLink(item),
      x: item.image.position.x,
      y: item.image.position.y,
      rotation: item.image.angle ?? 0,
      zIndex: 5
    });
  }
  return (
    <svg viewBox="-100 -100 220 200">
      <SVGObjectRenderer objects={image} />
    </svg>
  );
}

export interface PlayerHoldingThrowableProps extends React.PropsWithChildren {
  item: ThrowableDefinition
  skin: SkinDefinition
  state: "hold" | "cook" | "throw"
}
