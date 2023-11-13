import GenericLayoutFactory from "@/components/layouts/GenericLayoutFactory";
import ArmorSidebar from "@/components/sidebars/ArmorSidebar";
import { Armors } from "@/vendor/suroi/common/src/definitions/armors";

export default GenericLayoutFactory({
  items: Armors,
  Sidebar: ArmorSidebar,
});
