import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";

export const generateMetadata = GenericGenerateMetadataFactory(HealingItems);
export const generateStaticParams = GenericGenerateStaticParamsFactory(HealingItems);

export default GenericMDXPageFactory({
  path: "healing"
});
