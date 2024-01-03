import ThrowableSidebar from "@/components/sidebars/ThrowableSidebar";
import { Throwables } from "@/vendor/suroi/common/src/definitions/throwables";
import { notFound } from "next/navigation";

export default function ThrowableLayout({
  children,
  params,
}: {
  params: {
    item: string;
  };
} & React.PropsWithChildren) {
  const throwable = Throwables.find((item) => {
    return item.idString === params.item;
  });
  if (!throwable) notFound();
  return (
    <>
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1 className="hidden sm:block">{throwable.name}</h1>
        {children}
      </div>
      {/* here because reverse flex-col */}
      <ThrowableSidebar item={throwable} />
      <div className="prose prose-invert sm:hidden">
        <h1>{throwable.name}</h1>
      </div>
    </>
  );
}
