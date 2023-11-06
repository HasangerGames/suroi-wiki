import HealingSidebar from "@/components/sidebars/HealingSidebar";
import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";
import { notFound } from "next/navigation";

export default function HealingLayout({
  children,
  params,
}: {
  params: {
    item: string;
  };
} & React.PropsWithChildren) {
  const item = HealingItems.find((item) => item.idString === params.item);
  if (!item) notFound();

  return (
    <>
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1 className="hidden sm:block">{item.name}</h1>
        {children}
      </div>
      <HealingSidebar item={item} />
      {/* here because reverse flex-col */}
      <div className="prose prose-invert sm:hidden">
        <h1>{item.name}</h1>
      </div>
    </>
  );
}
