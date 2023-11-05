import MeleeSidebar from "@/components/sidebars/MeleeSidebar";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { melee: string } }) {
  const melee = Melees.find((melee) => melee.idString === params.melee);
  if (!melee) notFound();

  return {
    title: melee.name,
  };
}

export default function MeleePage({ params }: { params: { melee: string } }) {
  const melee = Melees.find((melee) => melee.idString === params.melee);
  if (!melee) notFound();

  return (
    <>
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1>{melee.name}</h1>
      </div>
      <MeleeSidebar melee={melee} />
    </>
  );
}
