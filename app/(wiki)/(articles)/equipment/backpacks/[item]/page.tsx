import GenericMDXPageFactory, {
  GenericGenerateMetadataFactory,
  GenericGenerateStaticParamsFactory,
} from "@/components/layouts/GenericMDXPageFactory";
import Pack2Article from "../articles/pack_2.mdx";
import Pack3Article from "../articles/pack_3.mdx";
import Pack0Article from "../articles/pack_0.mdx";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

export const generateMetadata = GenericGenerateMetadataFactory(Backpacks);
export const generateStaticParams = GenericGenerateStaticParamsFactory(Backpacks);

export default GenericMDXPageFactory({
  articles: {
    pack_0: Pack0Article,
    pack_2: Pack2Article,
    pack_3: Pack3Article,
  },
});
