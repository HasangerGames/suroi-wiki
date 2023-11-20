import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

export const generateMetadata = GenericGenerateMetadataFactory(Backpacks.definitions);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Backpacks.definitions);

export default GenericMDXPageFactory({
  path: "equipment/backpacks",
});
