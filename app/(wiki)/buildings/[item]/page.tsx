import GenericArticlePage from "@/components/generics/GenericArticlePage";
import BuildingSidebar from "@/components/sidebars/BuildingSidebar";
import { range } from "@/lib/util/arrays";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

const toExport = GenericArticlePage({
  items: Buildings.definitions,
  path: "buildings",
  Sidebar: BuildingSidebar,
  combinedArticles: [
    {
      title: "Oil Tanker",
      items: ["oil_tanker_ship"],
      fileName: "oil_tanker",
    },
    {
      title: "Containers",
      items: range(11, 1).map((n) => `container_${n}`), // This is so dumb lmao
      fileName: "containers",
    },
    {
      title: "Port",
      items: [
        "port_warehouse_red",
        "port_warehouse_blue",
        "crane",
        "port",
        "port_complex",
      ],
      fileName: "port_meta", // For some reason using `port` crashes my browser
      // 109 says: LLLLLLLLLLLLLLLL
    },
    {
      title: "Armory",
      items: [
        "armory_barracks",
        "armory_center",
        "armory_vault",
        "armory_inner_vault",
        "armory",
      ],
      fileName: "armory_meta", // Same as port
    },
    {
      title: "Tugboats",
      items: ["tugboat_white", "tugboat_red"],
      fileName: "tugboats",
    },
  ],
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
