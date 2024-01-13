import { BuildingDefinition } from "@/vendor/suroi/common/src/definitions/buildings";
import GenericSidebar from "./utils/GenericSidebar";
import {
  buildingParents,
  buildingVariations,
  getSuroiBuilding,
  getSuroiImageLink,
  getSuroiObstacle,
} from "@/lib/util/suroi";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";
import Link from "../links/Link";

export default function BuildingSidebar({
  item,
}: {
  item: BuildingDefinition;
}) {
  const parents = buildingParents(item);

  return (
    <GenericSidebar
      title={item.name}
      image={getSuroiImageLink(item)}
      imageVariations={buildingVariations(item).map((variation) => ({
        type: "image",
        url: variation,
      }))}
    >
      <InfoboxHeader>Contains</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Obstacles">
          <div className="flex flex-col gap-2">
            {(item.obstacles?.length ?? 0) > 0 && (
              <div>
                <span>({item.obstacles?.length} Obstacles)</span>
              </div>
            )}
            <div className="flex flex-wrap justify-around gap-2">
              {item.obstacles && item.obstacles.length > 0
                ? item.obstacles
                    .map((obstacle) => {
                      if (typeof obstacle.idString !== "string")
                        return Object.keys(obstacle.idString).map((key) => ({
                          ...obstacle,
                          idString: key,
                        }));
                      return obstacle;
                    })
                    .flat()
                    // https://stackoverflow.com/a/36744732
                    // filter out duplicate objects but with different positions
                    .filter(
                      (obstacle, index, self) =>
                        index ===
                        self.findIndex(
                          (t) =>
                            t.idString.toString() ===
                            obstacle.idString.toString(),
                        ),
                    )
                    .map((obstacle) => (
                      <Link
                        href={`/obstacles/${obstacle.idString}`}
                        key={obstacle.idString.toString()}
                      >
                        {getSuroiObstacle(obstacle.idString.toString())?.name ??
                          obstacle.idString.toString()}
                      </Link>
                    ))
                : "None"}
            </div>
          </div>
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Sub-buildings">
          <div className="flex flex-col gap-2">
            {(item.subBuildings?.length ?? 0) > 0 && (
              <div>
                <span>({item.subBuildings?.length} Sub-buildings)</span>
              </div>
            )}
            <div className="flex flex-wrap justify-around gap-2">
              {item.subBuildings && item.subBuildings.length > 0
                ? item.subBuildings
                    .map((subBuildings) => {
                      if (typeof subBuildings.idString !== "string")
                        return Object.keys(subBuildings.idString).map(
                          (key) => ({
                            ...subBuildings,
                            idString: key,
                          }),
                        );
                      return subBuildings;
                    })
                    .flat()
                    // https://stackoverflow.com/a/36744732
                    // filter out duplicate objects but with different positions
                    .filter(
                      (subBuildings, index, self) =>
                        index ===
                        self.findIndex(
                          (t) =>
                            t.idString.toString() ===
                            subBuildings.idString.toString(),
                        ),
                    )
                    .map((subBuildings) => (
                      <Link
                        href={`/buildings/${subBuildings.idString}`}
                        key={subBuildings.idString.toString()}
                      >
                        {getSuroiBuilding(subBuildings.idString.toString())
                          ?.name ?? subBuildings.idString.toString()}
                      </Link>
                    ))
                : "None"}
            </div>
          </div>
        </InfoboxColumn>
      </InfoboxRow>

      {parents.length !== 0 && (
        <>
          <InfoboxHeader>Location</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Parent Buildings">
              <div className="flex flex-col gap-2">
                {(parents.length ?? 0) > 0 && (
                  <div>
                    <span>({parents.length} Buildings)</span>
                  </div>
                )}
                <div className="flex flex-wrap justify-around gap-2">
                  {parents.length > 0
                    ? parents.map((parent) => (
                        <Link
                          href={`/buildings/${parent.idString}`}
                          key={parent.idString.toString()}
                        >
                          {parent.name ?? parent.idString.toString()}
                        </Link>
                      ))
                    : "None"}
                </div>
              </div>
            </InfoboxColumn>
          </InfoboxRow>
        </>
      )}

      <InfoboxHeader>Properties</InfoboxHeader>
      <InfoboxRow>
        {item.hideOnMap && <InfoboxColumn title="Hidden on Map" />}
        <InfoboxColumn
          title="Walls To Destroy"
          abbr="How many walls need to be destroyed for the ceiling to collapse"
        >
          {item.wallsToDestroy ?? "∞ (Indestructible)"}
        </InfoboxColumn>
      </InfoboxRow>

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
