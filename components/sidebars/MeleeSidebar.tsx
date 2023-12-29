import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxRow from "./utils/InfoboxRow";
import Image from "next/image";
import InfoboxHeader from "./utils/InfoboxHeader";
import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import ImageTabs from "../interactive/ImageTabs";
import PlayerHoldingMelee from "../svg/special/PlayerHoldingMelee";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";

export default function MeleeSidebar({ item }: MeleeSidebarProps) {
  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 border-b bg-primary border-primary">
          <h2 className="text-xl font-bold text-center">{item.name}</h2>
        </div>
        <ImageTabs
          images={[
            {
              url: getSuroiImageLink(item),
              title: "Loot",
            },
            {
              url: getSuroiKillfeedImageLink(item),
              title: "Killfeed",
            },
          ]}
        />
        <InfoboxRow>
          <InfoboxColumn title="Player Preview">
            <PlayerHoldingMelee
              melee={item}
              skin={
                Skins.definitions.find((skin) => {
                  return skin.idString === "hazel_jumpsuit";
                }) ?? Skins.definitions[0]
              }
              use={false}
            />
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
      </div>
    </div>
  );
}

export interface MeleeSidebarProps {
  item: MeleeDefinition;
}
