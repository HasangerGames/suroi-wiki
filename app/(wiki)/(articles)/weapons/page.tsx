import FlexTable from "@/components/tables/FlexTable";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import Image from "next/image";
import Link from "next/link";

export default function WeaponsPage() {
  return (
    <main className="text-white col-span-8">
      <div className="prose prose-invert">
        <h1>Weapons</h1>
        <p>
          There are currently {Guns.length} guns in the game, and{" "}
          {Melees.length} melee weapons in the game.
        </p>
      </div>
      <FlexTable>
        {Guns.map((gun) => (
          <div key={gun.idString} className="flex divide-x divide-border">
            <div className="flex p-2 items-center justify-center">
              <Image
                src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/${gun.idString}.svg`}
                width={128}
                height={128}
                alt={`Image of ${gun.name}`}
              />
            </div>
            <div className="flex-1 flex items-center p-2">
              <Link href={`/weapons/guns/${gun.idString}`}>
                <h2 className="text-lg font-bold underline">{gun.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </FlexTable>
      <FlexTable>
        {Melees.map((melee) => (
          <div key={melee.idString} className="flex divide-x divide-border">
            <div className="flex p-2 items-center justify-center">
              <Image
                src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/${melee.idString}.svg`}
                width={128}
                height={128}
                alt={`Image of ${melee.name}`}
              />
            </div>
            <div className="flex-1 flex items-center p-2">
              <Link href={`/weapons/melee/${melee.idString}`}>
                <h2 className="text-lg font-bold underline">{melee.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </FlexTable>
    </main>
  );
}
