import { BackpackDefinition } from "@/vendor/suroi/common/src/definitions/backpacks";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxRow from "./utils/InfoboxRow";
import InfoxboxHeader from "./utils/InfoboxHeader";
import InfoboxColumn from "./utils/InfoboxColumn";
import AmmoIcon from "../icons/AmmoIcon";
import HealingIcon from "../icons/HealingIcon";

export default function BackpackSidebar({
  item,
}: {
  item: BackpackDefinition;
}) {
  return (
    <GenericSidebar
      title={item.name}
      image={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${item.idString}.svg`}
    >
      <InfoxboxHeader>Healing Capacity</InfoxboxHeader>
      <InfoboxRow>
        {["gauze", "medikit"].map((healing) => (
          <InfoboxColumn
            key={healing}
            title={
              <div className="flex justify-center">
                <HealingIcon item={healing} />
              </div>
            }
          >
            {item.maxCapacity[healing]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxRow>
        {["cola", "tablets"].map((healing) => (
          <InfoboxColumn
            key={healing}
            title={
              <div className="flex justify-center">
                <HealingIcon item={healing} scale={0.5} />
              </div>
            }
          >
            {item.maxCapacity[healing]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>

      <InfoxboxHeader>Ammo Capacity</InfoxboxHeader>
      <InfoboxRow>
        {["12g", "556mm", "762mm", "9mm"].map((ammo) => (
          <InfoboxColumn
            key={ammo}
            title={
              <div className="flex justify-center">
                <AmmoIcon ammo={ammo} scale={0.55} />
              </div>
            }
          >
            {item.maxCapacity[ammo]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
    </GenericSidebar>
  );
}
