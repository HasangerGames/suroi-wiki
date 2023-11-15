import {
  LootTiers,
  LootTables,
} from "@/vendor/suroi/server/src/data/lootTables";
import { Loots } from "@/vendor/suroi/common/src/definitions/loots";
import LootCalc from "@/components/interactive/LootCalc";

export default function LootPage() {
  return (
    <div className="text-white col-span-8">
      <div className="prose prose-invert">
        <h1>Loot Tables</h1>
        <p>
          Loot Tables are lists of items that determine the possible drops from
          features around the map. Loot tables also define the chances of
          various items to drop.
        </p>
        <h2>Loot Tiers</h2>
        <p>
          Loot tables are divided into certain common loot tiers. These loot
          tiers are reused throughout many different tables.
        </p>
      </div>
      <div>
        {Object.entries(LootTiers).map(([name, tiers]) => (
          <div key={name} className="mt-4">
            <div className="prose prose-invert">
              <h3 id={name}>
                Tier <span className="font-mono">{name}</span>
              </h3>
            </div>
            <div className="flex justify-center p-8">
              <table className="table-fixed border-collapse flex-1 border border-border">
                <thead className="border-b border-border">
                  <tr className="bg-primary">
                    <th className="p-4 border-r border-border">Item</th>
                    <th className="p-4 border-r border-border">Weight</th>
                    <th className="p-4">
                      <abbr title="Relative to other items in this loot tier (approx)">
                        % Chance
                      </abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map(
                    (tier) =>
                      "item" in tier && (
                        <tr
                          key={tier.item}
                          className="border-b border-border even:bg-blue-400/20"
                        >
                          <td className="p-4 border-r border-border w-24">
                            {Loots.definitions.find(
                              (item) => item.idString === tier.item
                            )?.name ?? tier.item}
                          </td>
                          <td className="p-4 border-r border-border w-24">
                            {tier.weight}
                          </td>
                          <td className="p-4 w-24">
                            {(
                              (tier.weight /
                                tiers.reduce(
                                  (acc, tier) => acc + tier.weight,
                                  0
                                )) *
                              100
                            ).toFixed(2)}
                            %
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
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
      {Object.entries(LootTables).map(([name, tables]) => (
        <div key={name} className="mt-4">
          <div className="prose prose-invert">
            <h3 id={name}>
              Table <span className="font-mono">{name}</span>
            </h3>
          </div>
          <div className="flex justify-center p-8">
            <table className="table-fixed border-collapse flex-1 border border-border">
              <thead className="border-b border-border">
                <tr className="bg-primary">
                  <th className="p-4 border-r border-border">Tier / Item</th>
                  <th className="p-4 border-r border-border">Weight</th>
                  <th className="p-4">
                    <abbr title="Relative to other tiers in this loot table (approx)">
                      % Chance
                    </abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tables.loot.flat().map((tier) =>
                  "tier" in tier ? (
                    <tr
                      key={tier.tier}
                      className="border-b border-border even:bg-blue-400/20"
                    >
                      <td className="p-4 border-r border-border w-24">
                        Tier {tier.tier}
                      </td>
                      <td className="p-4 border-r border-border w-24">
                        {tier.weight}
                      </td>
                      <td className="p-4 w-24">
                        {(
                          (tier.weight /
                            tables.loot
                              .flat()
                              .reduce((acc, tier) => acc + tier.weight, 0)) *
                          100
                        ).toFixed(2)}
                        %
                      </td>
                    </tr>
                  ) : (
                    "item" in tier && (
                      <tr
                        key={tier.item}
                        className="border-b border-border even:bg-blue-400/20"
                      >
                        <td className="p-4 border-r border-border w-24">
                          Item{" "}
                          {Loots.definitions.find(
                            (item) => item.idString === tier.item
                          )?.name ?? tier.item}
                        </td>
                        <td className="p-4 border-r border-border w-24">
                          {tier.weight}
                        </td>
                        <td className="p-4 w-24">
                          {(
                            (tier.weight /
                              tables.loot
                                .flat()
                                .reduce((acc, tier) => acc + tier.weight, 0)) *
                            100
                          ).toFixed(2)}
                          %
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
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
    </div>
  );
}
