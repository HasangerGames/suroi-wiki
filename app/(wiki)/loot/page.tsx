import LootCalc from "@/components/interactive/LootCalc";
import { LootTables } from "@/vendor/suroi/server/src/data/lootTables";
import LootTable from "@/components/tables/LootTable";

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
      <div className="mt-8">
        <div className="prose prose-invert">
          <h2>Loot Tables</h2>
          <p>
            These tables determine which loot tiers to use for a given obstacle.
          </p>
        </div>
      </div>
      {...Object.entries(LootTables).map(([mode]) => (
        <div>
          <div className="mt-8">
            <div className="prose prose-invert p-3">
              <h2>{`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode`}</h2>
            </div>
          </div>
          {Object.entries(LootTables[mode]).map(([name, tables]) => (
            <div key={name} id={name}>
              <LootTable
                title={name}
                notice={Array.isArray(tables) ? "" : `This table drops ${tables.min}-${tables.max} items.`}
                content={tables}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
