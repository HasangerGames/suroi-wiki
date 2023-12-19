import GenericListingPageFactory from "@/components/layouts/GenericListingPageFactory";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

export default GenericListingPageFactory(
  Buildings.definitions,
  "Buildings",
  "/buildings"
);
