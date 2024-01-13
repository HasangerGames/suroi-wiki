import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxRow from "./utils/InfoboxRow";
import Image from "next/image";
import InfoboxHeader from "./utils/InfoboxHeader";
import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import ImageTabs from "../interactive/ImageTabs";
import PlayerHoldingMelee from "../svg/special/PlayerHoldingMelee";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import GenericSidebar from "./utils/GenericSidebar";

export default function MeleeSidebar({ item }: MeleeSidebarProps) {
  const skin =
    Skins.definitions.find((skin) => {
      return skin.idString === "hazel_jumpsuit";
    }) ?? Skins.definitions[0];
  return (
    <GenericSidebar
      title={item.name}
      imageVariations={[
        item.idString === "fists"
          ? {
              type: "svg",
              title: "Fists Image",
              objects: [
                {
                  type: "image",
                  url: getSuroiImageLink(skin, undefined, "fist"),
                  scaleX: 32 / 34,
                  scaleY: 32 / 34,
                  x: 42.5 - 32 / 2,
                  zIndex: 0,
                },
                {
                  type: "image",
                  url: getSuroiImageLink(skin, undefined, "fist"),
                  scaleX: 32 / 34,
                  scaleY: 32 / 34,
                  x: -42.5 + 32 / 2,
                  zIndex: 0,
                },
              ],
              viewBox: "-42.5 -42.5 85 85",
            }
          : {
              type: "image",
              url: getSuroiImageLink(item),
              title: "Loot",
            },
        {
          type: "image",
          url: getSuroiKillfeedImageLink(item),
          title: "Killfeed",
        },
      ]}
    >
      <InfoboxRow>
        <InfoboxColumn title="Player Preview">
          <PlayerHoldingMelee melee={item} skin={skin} use={false} />
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Damage">{item.damage}</InfoboxColumn>
        <InfoboxColumn title="Cooldown" abbr="Cooldown between hits">
          {item.cooldown}ms
        </InfoboxColumn>
        <InfoboxColumn title="Obstacle Damage">
          x{item.obstacleMultiplier} ({item.obstacleMultiplier * item.damage})
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn
          title="Max. DPS"
          abbr="Hypothetical maximum damage per second"
        >
          {(item.damage * (1000 / item.cooldown)).toFixed(2)}
        </InfoboxColumn>
        <InfoboxColumn
          title="Max. Obstacle DPS"
          abbr="Hypothetical maximum damage per second for obstacles"
        >
          {(
            item.damage *
            item.obstacleMultiplier *
            (1000 / item.cooldown)
          ).toFixed(2)}
        </InfoboxColumn>
        {(item?.piercingMultiplier ?? 0) > 0 && (
          <InfoboxColumn
            title="Piercing Damage"
            abbr="Damage that is applied to impenetrable (but not indestructible) obstacles such as Flint Stones"
          >
            x{item.piercingMultiplier} (
            {(item.piercingMultiplier ?? 0) * item.damage})
          </InfoboxColumn>
        )}
      </InfoboxRow>

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
        <InfoboxColumn title="Obtainable?">
          {item.noDrop ? "Unobtainable" : "Obtainable"}
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}

export interface MeleeSidebarProps {
  item: MeleeDefinition;
}
