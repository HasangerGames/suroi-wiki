import LootCalc from "@/components/interactive/LootCalc";
import TableWithHeader from "@/components/tables/TableWithHeader";
import { Loots } from "@/vendor/suroi/common/src/definitions/loots";
import { LootTables } from "@/vendor/suroi/server/src/data/lootTables";

export default function LootPage() {
  return (
    <div className="w-full">
      <div className="prose prose-invert">
        <h1>Loot Tables</h1>
        <p>
          Loot Tables are lists of items that determine the possible drops from
          features around the map. Loot tables also define the chances of
          various items to drop.
        </p>
      </div>
      <div className="mt-8">
        <div className="prose prose-invert" id="calc">
          <h2>Calculator</h2>
          <p>
            Use this interactive calculator to determine the chance of an item
            dropping from an obstacle.
          </p>
        </div>
        <LootCalc />
      </div>
      <div>
        {Object.entries(LootTables.normal).map(([name, tables]) => (
          <div key={name} id={name}>
            <TableWithHeader
              key={name}
              title={`Table ${name}`}
              header={["Item", "Count", "Weight", "% Chance"]}
              content={("loot" in tables ? (tables).loot : tables).map(table => [
                "item" in table
                  ? `Item ${
                    Loots.definitions.find(
                      loot => loot.idString === table.item
                    )?.name
                  }`
                  : `Table ${table.table}`,
                table.count ? table.count.toString() : "1",
                table.weight,
                `${(
                  (table.weight
                    / ("loot" in tables ? (tables).loot : tables).reduce((acc, table) => acc + table.weight, 0))
                    * 100
                ).toFixed(2)}%`
              ])}
            />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="prose prose-invert">
          <h2>Loot Tables</h2>
          <p>
            These tables determine which loot tiers to use for a given obstacle.
          </p>
        </div>
      </div>
    </div>
  );
}
