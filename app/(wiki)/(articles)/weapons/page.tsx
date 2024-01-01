import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { IMAGE_BASE_URL, getSuroiImageLink } from "@/lib/util/suroi";
import PageCard from "@/components/cards/PageCard";
import GridTable from "@/components/tables/GridTable";
import { Throwables } from "@/vendor/suroi/common/src/definitions/throwables";

export default function WeaponsPage() {
  return (
    <main className="col-span-8 text-white">
      <div className="prose prose-invert">
        <h1>Weapons</h1>
        <p>
          There are currently {Guns.length} guns in the game, {Melees.length}{" "}
          melee weapons, and {Throwables.length} throwables in the game.
        </p>

        <h2>Guns</h2>
      </div>
      <GridTable>
        {Guns.filter((gun) => {
          return !gun.idString.includes("dual_");
        }).map((gun) => (
          <PageCard
            title={gun.name}
            image={getSuroiImageLink(gun)}
            url={"/weapons/guns/" + gun.idString}
            description={gun.idString}
            key={gun.idString}
          />
        ))}
      </GridTable>
      <div className="prose prose-invert">
        <h2>Melees</h2>
      </div>
      <GridTable>
        {Melees.map((melee) => (
          <PageCard
            title={melee.name}
            image={getSuroiImageLink(melee)}
            url={"/weapons/melee/" + melee.idString}
            description={melee.idString}
            key={melee.idString}
          />
        ))}
      </GridTable>
      <div className="prose prose-invert">
        <h2>Throwables</h2>
      </div>
      <GridTable>
        {Throwables.map((throwable) => (
          <PageCard
            key={throwable.idString}
            title={throwable.name}
            url={"/weapons/throwables/" + throwable.idString}
            image={
              //IMAGE_BASE_URL + "game/weapons/" + throwable.idString + ".svg"
              getSuroiImageLink(throwable)
            }
            description={throwable.idString}
          />
        ))}
      </GridTable>
    </main>
  );
}
