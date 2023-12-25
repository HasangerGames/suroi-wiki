import { Armors } from "@/vendor/suroi/common/src/definitions/armors";
import GenericArticlePage from "@/components/generics/GenericArticlePage";
import ArmorSidebar from "@/components/sidebars/ArmorSidebar";

const toExport = GenericArticlePage({
  items: Armors.definitions,
  path: "equipment/armor",
  Sidebar: ArmorSidebar,
})

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;