import MeleeSidebar from "@/components/sidebars/MeleeSidebar";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { notFound } from "next/navigation";

export default function MeleeLayout({
  params,
  children,
}: { params: { melee: string } } & React.PropsWithChildren) {
  const melee = Melees.find((melee) => melee.idString === params.melee);
  if (!melee) notFound();

  return (
    <>
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1 className="hidden sm:block">{melee.name}</h1>
        {children}
      </div>
      <MeleeSidebar melee={melee} />
      <div className="prose prose-invert sm:hidden">
        <h1>{melee.name}</h1>
      </div>
    </>
  );
}
