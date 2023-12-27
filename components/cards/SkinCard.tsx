import { getSuroiImageLink } from "@/lib/util/suroi";
import { SkinDefinition } from "@/vendor/suroi/common/src/definitions/skins";
import SVGRenderer from "../interactive/SVGRenderer";

export default function SkinCard({ skin }: SkinCardProps) {
  return (
    <div className="flex-1 p-4 gap-4 not-prose rounded-md ring ring-border hover:ring-primary">
      <SVGRenderer
        viewbox="-60 -60 120 120"
        className="m-auto max-w-[10rem]"
        objects={[
          {
            type: "image",
            url: getSuroiImageLink(skin, undefined, "base"),
            x: 0,
            y: 0,
            rotation: 90,
            zIndex: 3,
          },
          {
            type: "image",
            url: getSuroiImageLink(skin, undefined, "fist"),
            x: -35,
            y: 35,
            rotation: 90,
            zIndex: 4,
          },
          {
            type: "image",
            url: getSuroiImageLink(skin, undefined, "fist"),
            x: 35,
            y: 35,
            rotation: 90,
            zIndex: 4,
          },
        ]}
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold break-normal leading-loose underline transition-colors">
          {skin.name}
        </h3>
        <ul>
          <li className="font-mono">{skin.idString}</li>
          {skin.roleRequired && (
            <li>
              <code>{skin.roleRequired}</code> role required
            </li>
          )}
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
