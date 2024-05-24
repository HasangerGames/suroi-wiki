import { getSuroiImageLink, lootDroppedBy } from "@/lib/util/suroi";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";
import {
  HealType,
  HealingItemDefinition,
} from "@/vendor/suroi/common/src/definitions/healingItems";
import Link from "../links/Link";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxAudio from "./utils/InfoboxAudio";
import InfoboxAudioGroup from "./utils/InfoboxAudioGroup";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";

export default function HealingSidebar({
  item,
}: {
  item: HealingItemDefinition;
}) {
  const obstacles = lootDroppedBy(item);

  return (
    <GenericSidebar title={item.name} image={getSuroiImageLink(item)}>
      <InfoboxRow>
        <InfoboxColumn title="Restores">
          {item.restoreAmount}
          {item.healType === HealType.Adrenaline && "%"}{" "}
          {HealType[item.healType]}
        </InfoboxColumn>
        <InfoboxColumn title="Use Time" abbr="Time it takes to use this item">
          {item.useTime}s
        </InfoboxColumn>
        <InfoboxColumn
          title="Healing Per Second"
          abbr="Amount of healing done per second"
        >
          {(item.restoreAmount / item.useTime).toFixed(2)}
          {item.healType === HealType.Adrenaline && "%"}
        </InfoboxColumn>
      </InfoboxRow>

      <InfoboxHeader>Capacity</InfoboxHeader>
      <InfoboxRow>
        {Backpacks.definitions.map((backpack) => (
          <InfoboxColumn title={backpack.name} key={backpack.idString}>
            {backpack.maxCapacity[item.idString]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>

      {obstacles[0] && (
        <>
          <InfoboxHeader>Found In</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Obstacles">
              <div className="flex flex-col gap-2">
                {(obstacles.length ?? 0) > 0 && (
                  <div>
                    <span>({obstacles.length} Obstacles)</span>
                  </div>
                )}
                <div className="flex flex-wrap justify-around gap-2">
                  {obstacles.map((obstacle) => (
                    <Link
                      key={obstacle.idString}
                      href={`/obstacles/${obstacle.idString}`}
                    >
                      {obstacle.name}
                    </Link>
                  ))}
                </div>
              </div>
            </InfoboxColumn>
          </InfoboxRow>
        </>
      )}

      <InfoboxAudioGroup>
        <InfoboxAudio
          name="Use"
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/healing/${item.idString}.mp3`}
        />
      </InfoboxAudioGroup>

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
