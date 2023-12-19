import GenericMDXPageFactory, { GenericGenerateMetadataFactory, GenericGenerateStaticParamsFactory } from "@/components/layouts/GenericMDXPageFactory";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

export const generateMetadata = GenericGenerateMetadataFactory(Buildings.definitions);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Buildings.definitions)

export default GenericMDXPageFactory({
  path: "buildings"
})