import {
  HealType,
  HealingItemDefinition,
} from "@/vendor/suroi/common/src/definitions/healingItems";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoxboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";
import InfoboxAudioGroup from "./utils/InfoboxAudioGroup";
import InfoboxAudio from "./utils/InfoboxAudio";

export default function HealingSidebar({
  item,
}: {
  item: HealingItemDefinition;
}) {
  return (
    <GenericSidebar
      title={item.name}
      image={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${item.idString}.svg`}
    >
      <InfoboxRow grid="grid-cols-2">
        <InfoboxColumn title="Restores">
          {item.restoreAmount}
          {item.healType === HealType.Adrenaline && "%"}{" "}
          {HealType[item.healType]}
        </InfoboxColumn>
        <InfoboxColumn title="Verb">
          {item.useText} {item.name}
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow grid="grid-cols-2">
        <InfoboxColumn title="Use Time" abbr="Time it takes to use this item">
          {item.useTime}s
        </InfoboxColumn>
        <InfoboxColumn
          title="Healing Per Second"
          abbr="Amount of healing done per second. This is a useless stat."
        >
          {(item.restoreAmount / item.useTime).toFixed(2)}
          {item.healType === HealType.Adrenaline && "%"}
        </InfoboxColumn>
      </InfoboxRow>

      <InfoxboxHeader>Sounds</InfoxboxHeader>
      <InfoboxAudioGroup>
        <InfoboxAudio name="Use" src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/healing/${item.idString}.mp3`}/>
      </InfoboxAudioGroup>

      <InfoxboxHeader>Advanced Stats</InfoxboxHeader>
      <InfoboxRow grid="grid-cols-1">
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
