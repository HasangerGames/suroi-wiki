import ArmorSidebar from "@/components/sidebars/ArmorSidebar";
import { Armors } from "@/vendor/suroi/common/src/definitions/armors";
import { notFound } from "next/navigation";

export default function ArmorLayout({
  children,
  params,
}: {
  params: {
    item: string;
  };
} & React.PropsWithChildren) {
  const item = Armors.find((item) => item.idString === params.item);
  if (!item) notFound();

  return (
    <>
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1 className="hidden sm:block">{item.name}</h1>
        {children}
      </div>
      <ArmorSidebar item={item} />
      {/* here because reverse flex-col */}
      <div className="prose prose-invert sm:hidden">
        <h1>{item.name}</h1>
      </div>
    </>
  );
}
