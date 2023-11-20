import GenericLayoutFactory from "@/components/layouts/GenericLayoutFactory";
import HealingSidebar from "@/components/sidebars/HealingSidebar";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";

export default GenericLayoutFactory({
  items: HealingItems.definitions,
  Sidebar: HealingSidebar,
});
