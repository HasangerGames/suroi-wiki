import GenericArticlePage from "@/components/generics/GenericArticlePage";
import PerkSidebar from "@/components/sidebars/PerkSidebar";
import { Perks } from "@/vendor/suroi/common/src/definitions/items/perks";

const toExport = GenericArticlePage({
  items: Perks.definitions,
  path: "perks",
  Sidebar: PerkSidebar,
  combinedArticles: []
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
