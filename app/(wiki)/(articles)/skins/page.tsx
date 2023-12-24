import SkinCard from "@/components/cards/SkinCard";
import GridTable from "@/components/tables/GridTable";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";

export default function SkinsPage() {
  return (
    <main className="col-span-8 text-white">
      <article className="prose prose-invert">
        <h1>Skins</h1>
        There are {Skins.definitions.length} skins. {" "}
        {
          Skins.definitions.filter((value) => {
            return !value.notInLoadout;
          }).length
        }{" "}
        skins are available in the loadout.
      </article>
      <GridTable>
        {Skins.definitions.map((skin) => (
          <SkinCard skin={skin} key={skin.idString} />
        ))}
      </GridTable>
    </main>
  );
}
