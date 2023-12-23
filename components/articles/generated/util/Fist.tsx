import { getSuroiImageLink } from "@/lib/util/suroi";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";

export default function Fist({ skin, x, y }: FistProps) {
  const fistOrigin = 34 / 2;
  return (
    <image
      x={-fistOrigin + x}
      y={-fistOrigin + y}
      href={getSuroiImageLink(skin, undefined, "fist")}
    />
  );
}

export interface FistProps extends React.PropsWithChildren {
  skin: SkinDefinition;
  x: number;
  y: number;
}
