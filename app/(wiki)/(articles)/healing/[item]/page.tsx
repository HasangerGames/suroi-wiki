import GenericArticlePage from "@/components/generics/GenericArticlePage";
import HealingSidebar from "@/components/sidebars/HealingSidebar";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";

const toExport = GenericArticlePage({
  items: HealingItems.definitions,
  path: "healing",
  Sidebar: HealingSidebar
})

exports = toExport;
export default toExport.default;