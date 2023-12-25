import GenericArticlePage from "@/components/generics/GenericArticlePage";
import BuildingSidebar from "@/components/sidebars/BuildingSidebar";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

const toExport = GenericArticlePage({
  items: Buildings.definitions,
  path: "buildings",
  Sidebar: BuildingSidebar,
})

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;