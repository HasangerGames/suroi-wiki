import GenericLayoutFactory from "@/components/layouts/GenericLayoutFactory";
import BackpackSidebar from "@/components/sidebars/BackpackSidebar";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

export default GenericLayoutFactory({
  items: Backpacks,
  Sidebar: BackpackSidebar,
});
