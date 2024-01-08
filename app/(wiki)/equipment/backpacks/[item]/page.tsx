import GenericArticlePage from "@/components/generics/GenericArticlePage";
import BackpackSidebar from "@/components/sidebars/BackpackSidebar";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

const toExport = GenericArticlePage({
  items: Backpacks.definitions,
  path: "equipment/backpacks",
  Sidebar: BackpackSidebar,
})

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
