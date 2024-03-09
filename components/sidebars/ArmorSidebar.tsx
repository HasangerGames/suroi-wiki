import { getSuroiImageLink, lootDroppedBy } from "@/lib/util/suroi";
import { ArmorDefinition } from "@/vendor/suroi/common/src/definitions/armors";
import Link from "../links/Link";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";

export default function ArmorSidebar({ item }: { item: ArmorDefinition }) {
  const obstacles = lootDroppedBy(item);

  return (
    <GenericSidebar title={item.name} image={getSuroiImageLink(item)}>
      <InfoboxRow>
        <InfoboxColumn title="Level">{item.level}</InfoboxColumn>
        <InfoboxColumn title="Damage Reduction">
          {item.damageReduction * 100}%
        </InfoboxColumn>
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

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
