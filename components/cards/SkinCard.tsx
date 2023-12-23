import { getSuroiImageLink } from "@/lib/util/suroi";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";

export default function SkinCard({ skin }: SkinCardProps) {
  const size = 130;
  const center = size / 2;
  const fistDistance = 52;
  const fistOffset = 22;

  return (
    <div className="flex-1 p-4 gap-4 not-prose rounded-md ring ring-border hover:ring-primary">
      <svg width={size} height={size} className={`m-auto min-w-[${size}px]`}>
        <image
          x={center - 45}
          y={center - 45}
          width={90}
          height={90}
          href={getSuroiImageLink(skin, undefined, "base")}
          style={{ transformBox: "fill-box" }}
          className="origin-center rotate-90"
        />
        <image
          x={center - fistDistance}
          y={center + fistOffset}
          width={34}
          height={34}
          href={getSuroiImageLink(skin, undefined, "fist")}
          style={{ transformBox: "fill-box" }}
          className="origin-center rotate-90"
        />
        <image
          x={center + fistDistance - 34}
          y={center + fistOffset}
          width={34}
          height={34}
          href={getSuroiImageLink(skin, undefined, "fist")}
          style={{ transformBox: "fill-box" }}
          className="origin-center rotate-90"
        />
      </svg>
      <div className="flex-1">
        <h3 className="text-lg font-bold break-normal leading-loose underline transition-colors">
          {skin.name}
        </h3>
        <ul>
          <li className="font-mono">{skin.idString}</li>
          {skin.roleRequired && <li><code>{skin.roleRequired}</code> role required</li>}
          {skin.notInLoadout && <li>Not in loadout</li>}
          {skin.grassTint && <li>Grass tinted</li>}
          {skin.hideEquipment && <li>Hidden equipment</li>}
        </ul>
      </div>
    </div>
  );
}

export interface SkinCardProps extends React.PropsWithChildren {
  skin: SkinDefinition;
}
