import PageCard from "@/components/cards/PageCard";
import GridTable from "@/components/tables/GridTable";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/items/healingItems";

export default function HealingPage() {
  return (
    <main className="w-full">
      <div className="prose prose-invert">
        <h1>Healing Items</h1>
        <p>
          There are currently {HealingItems.definitions.length} healing items in
          the game.
        </p>
      </div>
      <GridTable>
        {HealingItems.definitions.map(item => (
          <PageCard
            title={item.name}
            image={getSuroiImageLink(item)}
            url={`/healing/${item.idString}`}
            description={item.idString}
            key={item.idString}
          />
        ))}
      </GridTable>
    </main>
  );
}
