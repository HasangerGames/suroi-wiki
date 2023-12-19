import { BuildingDefinition } from "@/vendor/suroi/common/src/definitions/buildings";
import GenericSidebar from "./utils/GenericSidebar";
import { buildingVariations, getSuroiImageLink } from "@/lib/util/suroi";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";

export default function BuildingSidebar({
  item,
}: {
  item: BuildingDefinition;
}) {
  return (
    <GenericSidebar
      title={item.name}
      image={getSuroiImageLink(item)}
      imageVariations={buildingVariations(item)}
    >
      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
