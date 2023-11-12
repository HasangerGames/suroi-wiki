import FlexTable from "@/components/tables/FlexTable";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";
import Image from "next/image";
import Link from "next/link";

export default function HealingPage() {
  return (
    <main className="text-white col-span-8">
      <div className="prose prose-invert">
        <h1>Healing Items</h1>
        <p>
          There are currently {HealingItems.length} healing items in the game. 
        </p>
      </div>
      <FlexTable>
        {HealingItems.map((item) => (
          <div key={item.idString} className="flex divide-x divide-border">
            <div className="flex p-4 items-center justify-center">
              <Image
                src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${item.idString}.svg`}
                width={64}
                height={64}
                alt={`Image of ${item.name}`}
              />
            </div>
            <div className="flex-1 flex items-center p-2">
              <Link href={`/healing/${item.idString}`}>
                <h2 className="text-lg font-bold underline">{item.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </FlexTable>
    </main>
  );
}
