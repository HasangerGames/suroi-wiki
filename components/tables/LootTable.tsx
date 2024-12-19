/* eslint-disable @stylistic/operator-linebreak */
/* eslint-disable @stylistic/multiline-ternary */
import TableWithHeader from "./TableWithHeader";
import { SimpleLootTable, FullLootTable, WeightedItem } from "../../vendor/suroi/server/src/data/lootTables";
import { Loots } from "../../vendor/suroi/common/src/definitions/loots";

export default function LootTable({
  title,
  notice,
  content

}: LootTable) {
  return (
    <div className="p-4">
      <div className="flex flex-col p-4 pt-0 bg-muted rounded-md not-prose overflow-y-auto">
        <div className="flex flex-col gap-2 bg-muted sticky pt-4 top-0">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div>{notice && <p className="text-l pt-2">{notice}</p>}</div>
        <div>
          {Array.isArray(content) ? (
            // differentiate between simple and full loot tables
            Array.isArray(content[0]) ? (
              content.map(tables => (
                <TableWithHeader
                  header={["Item", "Count", "Weight", "% Chance"]}
                  content={tables.map((table: WeightedItem) => [
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
                      (table.weight /
                        ("loot" in tables ? tables.loot : tables).reduce(
                          (acc: number, table: WeightedItem) =>
                            acc + table.weight,
                          0
                        )) *
                        100
                    ).toFixed(2)}%`
                  ])}
                />
              ))
            ) : (
              <TableWithHeader
                header={["Item", "Count", "Weight", "% Chance"]}
                content={content.map((item: WeightedItem) => [
                  "item" in item
                    ? `Item ${
                      Loots.definitions.find(
                        loot => loot.idString === item.item
                      )?.name
                    }`
                    : `Table ${item.table}`,
                  item.count ? item.count.toString() : "1",
                  item.weight,
                  `${(
                    (item.weight /
                      content.reduce(
                        (acc: number, table: WeightedItem) =>
                          acc + table.weight,
                        0
                      )) *
                      100
                  ).toFixed(2)}%`
                ])}
              />
            )
          ) : (
            <TableWithHeader
              header={["Item", "Count", "Weight", "% Chance"]}
              content={content.loot.map((item: WeightedItem) => [
              //               ^^^^ this will never cause any issues because the tenary only returns this section if "content" isn't an array, which means it is a Full Loot Table and must have a "loot" property
                "item" in item
                  ? `Item ${
                    Loots.definitions.find(
                      loot => loot.idString === item.item
                    )?.name
                  }`
                  : `Table ${item.table}`,
                item.count ? item.count.toString() : "1",
                item.weight,
                `${(
                  (item.weight /
                    content.loot.reduce(
                      //    ^^^^ same goes for here
                      (acc: number, table: WeightedItem) => acc + table.weight,
                      0
                    )) *
                    100
                ).toFixed(2)}%`
              ])}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export interface LootTable extends React.PropsWithChildren {
  title: string
  notice?: string
  content: SimpleLootTable | FullLootTable
}
