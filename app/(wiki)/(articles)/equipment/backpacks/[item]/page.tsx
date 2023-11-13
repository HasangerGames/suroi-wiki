import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

export const generateMetadata = GenericGenerateMetadataFactory(Backpacks);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Backpacks);

export default GenericMDXPageFactory({
  path: "equipment/backpacks",
});
