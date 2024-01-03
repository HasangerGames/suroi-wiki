import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";
import { Throwables } from "@/vendor/suroi/common/src/definitions/throwables";

export const generateMetadata = GenericGenerateMetadataFactory(Throwables);
export const generateStaticParams =
  GenericGenerateStaticParamsFactory(Throwables);

export default GenericMDXPageFactory({ path: "weapons/throwables" });
