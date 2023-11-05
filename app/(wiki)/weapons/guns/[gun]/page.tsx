import GunSidebar from "@/components/sidebars/GunSidebar";
import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { gun: string } }) {
  const gun = Guns.find((gun) => gun.idString === params.gun);
  if (!gun) notFound();

  return {
    title: gun.name,
  };
}

export default function GunPage({ params }: { params: { gun: string } }) {
  const gun = Guns.find((gun) => gun.idString === params.gun);
  if (!gun) notFound();

  const explosion = Explosions.definitions.find(
    (explosion) => explosion.idString === gun.ballistics.onHitExplosion
  );

  return (
    <main className="grid grid-cols-6 lg:grid-cols-8 gap-4">
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1>{gun.name}</h1>
      </div>
      <GunSidebar gun={gun} explosion={explosion} />
    </main>
  );
}
