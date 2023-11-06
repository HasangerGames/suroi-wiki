import GunSidebar from "@/components/sidebars/GunSidebar";
import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { notFound } from "next/navigation";

export default function GunLayout({
  children,
  params,
}: {
  params: {
    gun: string;
  };
} & React.PropsWithChildren) {
  const gun = Guns.find((gun) => gun.idString === params.gun);
  if (!gun) notFound();

  const explosion = Explosions.definitions.find(
    (explosion) => explosion.idString === gun.ballistics.onHitExplosion
  );

  return (
    <>
      <div className="col-span-4 lg:col-span-6 prose prose-invert">
        <h1 className="hidden sm:block">{gun.name}</h1>
        {children}
      </div>
      <GunSidebar gun={gun} explosion={explosion} />
      {/* here because reverse flex-col */}
      <div className="prose prose-invert sm:hidden">
        <h1>{gun.name}</h1>
      </div>
    </>
  );
}
