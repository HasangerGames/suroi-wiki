import GenericArticlePage from "@/components/generics/GenericArticlePage";
import BuildingSidebar from "@/components/sidebars/BuildingSidebar";
import { range } from "@/lib/util/arrays";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

export const BuildingMetaArticles = [
  {
    title: "Red House",
    items: ["red_house", "red_house_v2"],
    fileName: "red_houses"
  },
  {
    title: "Containers",
    items: range(11, 1).map(n => `container_${n}`), // This is so dumb lmao
    fileName: "containers"
  },
  {
    title: "Armory",
    items: [
      "armory_barracks",
      "armory_center",
      "armory_vault",
      "armory_inner_vault",
      "armory",
      "bombed_armory"
    ],
    fileName: "armory_meta" // Same as port
  },
  {
    title: "Tugboats",
    items: ["tugboat_white", "tugboat_red"],
    fileName: "tugboats"
  },
  {
    title: "Tents",
    items: [
      ...range(5, 1).map(n => `tent_${n}`),
      ...range(4, 1).map(n => `tent_big_${n}`)
    ],
    fileName: "tents"
  },
  {
    title: "Hay Sheds",
    items: range(4, 1).map(n => `hay_shed_${n}`),
    fileName: "hay_sheds"
  },
  {
    title: "Plumpkin Bunker",
    items: [
      "plumpkin_bunker",
      "hay_shed_4",
      "plumpkin_bunker_main",
      "plumpkin_bunker_vault",
      "plumpkin_bunker_second_puzzle",
      "plumpkin_bunker_third_puzzle"
    ],
    fileName: "plumpkin_bunker_meta" // Same as port
  }
];

const toExport = GenericArticlePage({
  items: Buildings.definitions,
  path: "buildings",
  Sidebar: BuildingSidebar,
  combinedArticles: BuildingMetaArticles
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
