import FlexTable from "@/components/tables/FlexTable";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";
import Image from "next/image";
import Link from "@/components/links/Link";
import { getSuroiImageLink } from "@/lib/util/suroi";
import GridTable from "@/components/tables/GridTable";
import PageCard from "@/components/cards/PageCard";

export default function HealingPage() {
  return (
    <main className="col-span-8 text-white">
      <div className="prose prose-invert">
        <h1>Healing Items</h1>
        <p>
          There are currently {HealingItems.definitions.length} healing items in
          the game.
        </p>
      </div>
      <GridTable>
        {HealingItems.definitions.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <PageCard
            title={item.name}
            image={getSuroiImageLink(item)}
            url={`/healing/${item.idString}`}
          />
        ))}
      </GridTable>
    </main>
  );
}
