import EditButton from "@/components/interactive/EditButton";
import GunGraphButton from "@/components/interactive/GunGraphButton";
import GunSidebar from "@/components/sidebars/GunSidebar";
import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";
import { Guns } from "@/vendor/suroi/common/src/definitions/items/guns";
import { notFound } from "next/navigation";

export default function GunLayout({
  children,
  params
}: {
  params: {
    item: string
  }
} & React.PropsWithChildren) {
  const gun = Guns.definitions.find(gun => gun.idString === params.item);
  if (!gun) notFound();

  const explosion = Explosions.definitions.find(
    explosion => explosion.idString === gun.ballistics.onHitExplosion
  );

  return (
    <>
      <div className="grow prose prose-invert">
        <h1 className="hidden sm:block">
          {gun.name} <EditButton path="weapons/guns" id={gun.idString} />
        </h1>
        {children}
        <GunGraphButton gun={gun} />
      </div>
      <GunSidebar gun={gun} explosion={explosion} />
      {/* here because reverse flex-col */}
      <div className="prose prose-invert sm:hidden">
        <h1>{gun.name}</h1>
      </div>
    </>
  );
}
