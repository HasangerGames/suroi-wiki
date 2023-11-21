import GenericLayoutFactory from "@/components/layouts/GenericLayoutFactory";
import ObstacleSidebar from "@/components/sidebars/ObstacleSidebar";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

export default GenericLayoutFactory({
  items: Obstacles.definitions,
  Sidebar: ObstacleSidebar,
});
