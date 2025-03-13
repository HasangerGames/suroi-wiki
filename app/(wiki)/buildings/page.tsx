import BuildingCard from "@/components/cards/BuildingCard";
import GridTable from "@/components/tables/GridTable";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";
import { BuildingMetaArticles } from "./[item]/page";

const BuildingArticles: string[] = [
  "red_houses", "green_house", "blue_house",
  "warehouse", "containers",
  "porta_potty", "mobile_home", "shed", "tugboats", "sea_traffic_control",
  "small_bridge", "large_bridge", "construction_site",
  "refinery", "armory", "headquarters", "port_meta", "cargo_ship", "oil_tanker_ship",
  "small_bunker",
  "lodge", "bombed_armory", "barn", "plumpkin_bunker",
  "outhouse", "tents", "hay_sheds",
  "firework_warehouse"
];

export default function BuildingsPage() {
  return (
    <main className="w-full">
      <article className="prose prose-invert">
        <h1>Buildings</h1>
        There are {BuildingArticles.length} buildings in the game.{" "}
      </article>
      <GridTable>
        {
          BuildingArticles.map(id => {
            const metaArticle = BuildingMetaArticles.find(article => article.fileName === id);
            return metaArticle
              ? <BuildingCard building={Buildings.fromString(metaArticle.items[0])} title={metaArticle.title} id={metaArticle.items} />
              : <BuildingCard building={Buildings.fromString(id)}></BuildingCard>;
          })
        }
      </GridTable>
    </main>
  );
}
