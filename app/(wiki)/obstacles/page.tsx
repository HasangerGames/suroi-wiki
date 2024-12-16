import GenericListingPageFactory from "@/components/layouts/GenericListingPageFactory";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

export default GenericListingPageFactory(
  Obstacles.definitions.filter(
    obstacle => !(obstacle.idString.includes("wall") || obstacle.idString.includes("_winter"))
  ),
  "Obstacles",
  "/obstacles"
);
