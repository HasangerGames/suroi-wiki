import FlexTable from "@/components/tables/FlexTable";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";
import Image from "next/image";
import Link from "@/components/links/Link";

export default function HealingPage() {
  return (
    <main className="col-span-8 text-white">
      <div className="prose prose-invert">
        <h1>Healing Items</h1>
        <p>
          There are currently {HealingItems.definitions.length} healing items in the game. 
        </p>
      </div>
      <FlexTable>
        {HealingItems.definitions.map((item) => (
          <div key={item.idString} className="flex divide-x divide-border">
            <div className="flex justify-center items-center p-4">
              <Image
                src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${item.idString}.svg`}
                width={64}
                height={64}
                alt={`Image of ${item.name}`}
              />
            </div>
            <div className="flex flex-1 items-center p-2">
              <Link href={`/healing/${item.idString}`}>
                <h2 className="text-lg font-bold">{item.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </FlexTable>
    </main>
  );
}
