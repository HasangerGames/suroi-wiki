// A component testing page

import Gallery from "@/components/articles/gallery/Gallery";
import PlayerHoldingGun from "@/components/articles/generated/PlayerHoldingGun";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";

export default async function Kitchen() {
  return (
    <div className="block col-span-full">
      <DevWeapon />
      <Empty />
      <Event />
      <Removed />
      <Stub />
      <PlayerHoldingGun gun={Guns.find((gun) => {return gun.idString === "stoner_63"})} skin={Skins.definitions[9]} />
      <PlayerHoldingGun gun={Guns.find((gun) => {return gun.idString === "m1895"})} skin={Skins.definitions[9]} />
      <PlayerHoldingGun gun={Guns.find((gun) => {return gun.idString === "barrett"})} skin={Skins.definitions[9]} />
      <PlayerHoldingGun gun={Guns.find((gun) => {return gun.idString === "deathray"})} skin={Skins.definitions[9]} />
      <Gallery
        images={[
          ...Guns.map((gun) => ({
            url: getSuroiImageLink(gun),
            caption: gun.name,
            author: gun.idString
          })),
        ]}
      />
    </div>
  );
}
