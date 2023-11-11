import ArmorCalc from "@/components/interactive/ArmorCalc";
import FileLink from "@/components/links/FileLink";
import FlexTable from "@/components/tables/FlexTable";
import { Armors } from "@/vendor/suroi/common/src/definitions/armors";
import { Helmets } from "@/vendor/suroi/common/src/definitions/helmets";
import { Vests } from "@/vendor/suroi/common/src/definitions/vests";
import Image from "next/image";
import Link from "next/link";

export default function ArmorPage() {
  const vest2 = Vests[2];
  const helmet1 = Helmets[1];
  return (
    <main className="text-white col-span-8">
      <div className="prose prose-invert">
        <h1>Armor</h1>
        <p>
          There are currently {Armors.length} unique pieces of armor in the
          game. These include {Helmets.length} helmets along with {Vests.length}{" "}
          vests.
        </p>
        <p>
          Wearing armor helps reduce damage to you from most sources. Damage
          reduction is additive (see{" "}
          <FileLink file="server/src/objects/player.ts" lines={[592, 595]}>
            player.ts
          </FileLink>
          ). For example if you were wearing a{" "}
          <Link
            href={`/equipment/armor/${vest2.idString}`}
            className="underline"
          >
            {vest2.name}
          </Link>{" "}
          ({vest2.damageReduction * 100}% damage reduction) and a{" "}
          <Link
            href={`/equipment/armor/${helmet1.idString}`}
            className="underline"
          >
            {helmet1.name}
          </Link>{" "}
          ({helmet1.damageReduction * 100}% damage reduction) you would have a
          total of {vest2.damageReduction * 100 + helmet1.damageReduction * 100}
          % damage reduction overall.
        </p>
      </div>

      <FlexTable>
        {Vests.map((vest) => (
          <div
            key={vest.idString}
            className="flex divide-x divide-muted-foreground"
          >
            <div className="flex p-2 items-center justify-center">
              <Image
                src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${vest.idString}.svg`}
                width={128}
                height={128}
                alt={`Image of ${vest.name}`}
              />
            </div>
            <div className="flex-1 flex items-center p-2">
              <Link href={`/equipment/armor/${vest.idString}`}>
                <h2 className="text-lg font-bold underline">{vest.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </FlexTable>
      <FlexTable>
        {Helmets.map((helmet) => (
          <div
            key={helmet.idString}
            className="flex divide-x divide-muted-foreground"
          >
            <div className="flex p-2 items-center justify-center">
              <Image
                src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${helmet.idString}.svg`}
                width={128}
                height={128}
                alt={`Image of ${helmet.name}`}
              />
            </div>
            <div className="flex-1 flex items-center p-2">
              <Link href={`/weapons/melee/${helmet.idString}`}>
                <h2 className="text-lg font-bold underline">{helmet.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </FlexTable>
      <div className="mt-8">
        <div className="prose prose-invert" id="calc">
          <h2>Calculator</h2>
          <p>
            Use this interactive calculator to determine how many shots it would
            take to kill a player wearing a certain armor combo.
          </p>
          <ArmorCalc />
        </div>
      </div>
    </main>
  );
}
