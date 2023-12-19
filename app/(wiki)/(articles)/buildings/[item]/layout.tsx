import GenericLayoutFactory from "@/components/layouts/GenericLayoutFactory";
import BuildingSidebar from "@/components/sidebars/BuildingSidebar";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

export default GenericLayoutFactory({
  items: Buildings.definitions,
  Sidebar: BuildingSidebar,
});
