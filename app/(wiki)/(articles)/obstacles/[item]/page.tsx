import GenericArticlePage from "@/components/generics/GenericArticlePage";
import ObstacleSidebar from "@/components/sidebars/ObstacleSidebar";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

const toExport = GenericArticlePage({
  items: Obstacles.definitions,
  path: "obstacles",
  Sidebar: ObstacleSidebar,
  combinedArticles: [
    {
      title: "Crates",
      items: ["aegis_crate", "flint_crate", "regular_crate", "melee_crate"],
      fileName: "crates",
    },
    {
      title: "Trees",
      items: ["oak_tree", "birch_tree", "pine_tree"],
      fileName: "trees",
    },
    {
      title: "Airdrops",
      items: ["airdrop_crate_locked", "airdrop_crate", "gold_airdrop_crate"],
      fileName: "airdrops"
    }
  ],
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
