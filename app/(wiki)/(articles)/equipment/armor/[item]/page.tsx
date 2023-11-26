import { Armors } from "@/vendor/suroi/common/src/definitions/armors";
import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";

export const generateMetadata = GenericGenerateMetadataFactory(Armors.definitions);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Armors.definitions);

export default GenericMDXPageFactory({
  path: "equipment/armor",
});
