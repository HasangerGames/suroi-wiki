import ArmorCalc from "@/components/interactive/ArmorCalc";
import FileLink from "@/components/links/FileLink";
import Image from "next/image";
import Link from "@/components/links/Link";
import {
  ArmorType,
  Armors,
} from "@/vendor/suroi/common/src/definitions/armors";
import { ArmorDefinition } from "@/vendor/suroi/common/src/definitions/armors";
import { getSuroiImageLink } from "@/lib/util/suroi";

const Helmets = Armors.definitions.filter(
  (armor) => armor.armorType === ArmorType.Helmet
);
const Vests = Armors.definitions.filter(
  (armor) => armor.armorType === ArmorType.Vest
);

const vest2 = Vests[2];
const helmet1 = Helmets[1];

export default function ArmorPage() {
  return (
    <main className="col-span-8 text-white">
      <div className="prose prose-invert">
        <h1>Armor</h1>
        <p>
          There are currently {Vests.length + Helmets.length} unique pieces of
          armor in the game. These include {Helmets.length} helmets along with{" "}
          {Vests.length} vests.
        </p>
        <p>
          Wearing armor helps reduce damage to you from most sources. Damage
          reduction is additive (see{" "}
          <FileLink file="server/src/objects/player.ts" lines={747}>
            player.ts
          </FileLink>
          ). For example if you were wearing a{" "}
          <Link href={`/equipment/armor/${vest2.idString}`}>{vest2.name}</Link>{" "}
          ({vest2.damageReduction * 100}% damage reduction) and a{" "}
          <Link href={`/equipment/armor/${helmet1.idString}`}>
            {helmet1.name}
          </Link>
          ({helmet1.damageReduction * 100}% damage reduction) you would have a
          total of {(vest2.damageReduction + helmet1.damageReduction) * 100}%
          damage reduction overall.
        </p>
      </div>

      <div className="prose prose-invert mt-8">
        <table className="table-fixed">
          <caption>
            <h3>Armor Statistics</h3>
          </caption>
          <thead>
            <tr>
              <th>Armor</th>
              <th>Level</th>
              <th>Damage Reduction</th>
            </tr>
          </thead>
          <tbody>
            {Vests.concat(...Helmets).map((armor) => (
              <tr key={armor.idString} className="">
                <td>
                  <Image
                    src={getSuroiImageLink(armor)}
                    width={32}
                    height={32}
                    alt={`${armor.name} image`}
                    className="h-min inline-block m-0 mr-2"
                  />
                  <Link href={`/equipment/armor/${armor.idString}`}>
                    {armor.name}
                  </Link>
                </td>
                <td>{armor.level}</td>
                <td>{armor.damageReduction * 100}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-invert mt-8">
        <table className="table-fixed">
          <caption>
            <h3>Effective Health</h3>
          </caption>
          <tbody>
            <tr>
              <td></td>
              {[
                {
                  idString: "",
                  name: "(None)",
                  damageReduction: 0,
                } as ArmorDefinition,
                ...Vests,
              ].map((vest) => (
                <td key={vest.idString}>
                  {vest.idString ? (
                    <>
                      <Image
                        src={getSuroiImageLink(vest)}
                        width={32}
                        height={32}
                        alt={`${vest.name} image`}
                        className="h-min inline-block m-0 mr-2"
                      />
                      <Link href={`/equipment/armor/${vest.idString}`}>
                        {vest.name}
                      </Link>
                    </>
                  ) : (
                    <p>{vest.name}</p>
                  )}
                </td>
              ))}
            </tr>
            {[
              {
                idString: "",
                name: "(None)",
                damageReduction: 0,
              } as ArmorDefinition,
              ...Helmets,
            ].map((helmet, i) => (
              <tr key={i}>
                <td>
                  {helmet.idString ? (
                    <>
                      <Image
                        src={getSuroiImageLink(helmet)}
                        width={32}
                        height={32}
                        alt={`${helmet.name} image`}
                        className="h-min inline-block m-0 mr-2"
                      />
                      <Link href={`/equipment/armor/${helmet.idString}`}>
                        {helmet.name}
                      </Link>
                    </>
                  ) : (
                    <p>{helmet.name}</p>
                  )}
                </td>
                {[
                  {
                    idString: "none",
                    name: "(None)",
                    damageReduction: 0,
                  } as ArmorDefinition,
                  ...Vests,
                ].map((vest, j) => (
                  <td key={`${i}${j}`}>
                    {(
                      100 /
                      (1 - helmet.damageReduction - vest.damageReduction)
                    ).toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
