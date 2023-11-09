import { ArmorDefinition } from "@/vendor/suroi/common/src/definitions/armors";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxRow from "./utils/InfoboxRow";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoxboxHeader from "./utils/InfoboxHeader";

export default function ArmorSidebar({ item }: { item: ArmorDefinition }) {
  return (
    <GenericSidebar
      title={item.name}
      image={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${item.idString}.svg`}
    >
      <InfoboxRow grid="grid-cols-2">
        <InfoboxColumn title="Level">{item.level}</InfoboxColumn>
        <InfoboxColumn title="Damage Reduction">
          {item.damageReduction * 100}%
        </InfoboxColumn>
      </InfoboxRow>

      <InfoxboxHeader>Advanced Stats</InfoxboxHeader>
      <InfoboxRow grid="grid-cols-1">
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
