import GenericArticlePage from "@/components/generics/GenericArticlePage";
import HealingSidebar from "@/components/sidebars/HealingSidebar";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/items/healingItems";

const toExport = GenericArticlePage({
  items: HealingItems.definitions,
  path: "healing",
  Sidebar: HealingSidebar
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
