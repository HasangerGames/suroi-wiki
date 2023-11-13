import { Armors } from "@/vendor/suroi/common/src/definitions/armors";
import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";

export const generateMetadata = GenericGenerateMetadataFactory(Armors);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Armors);

export default GenericMDXPageFactory({
  path: "equipment/armor",
});
