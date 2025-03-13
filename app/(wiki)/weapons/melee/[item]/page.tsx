import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory
} from "@/components/layouts/GenericMDXPageFactory";
import { Melees } from "@/vendor/suroi/common/src/definitions/items/melees";

export const generateMetadata = GenericGenerateMetadataFactory(Melees);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Melees);

export default GenericMDXPageFactory({
  path: "weapons/melee"
});
