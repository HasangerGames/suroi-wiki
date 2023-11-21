import GenericMDXPageFactory, { GenericGenerateMetadataFactory, GenericGenerateStaticParamsFactory } from "@/components/layouts/GenericMDXPageFactory";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

export const generateMetadata = GenericGenerateMetadataFactory(Obstacles.definitions);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Obstacles.definitions)

export default GenericMDXPageFactory({
  path: "obstacles"
})