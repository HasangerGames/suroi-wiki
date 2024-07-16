import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory
} from "@/components/layouts/GenericMDXPageFactory";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";

export const generateMetadata = GenericGenerateMetadataFactory(Guns);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Guns);

export default GenericMDXPageFactory({
  path: "weapons/guns"
});
