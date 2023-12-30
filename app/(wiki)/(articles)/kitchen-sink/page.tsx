// A component testing page

import Gallery from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";
import PlayerWearingEquipment from "@/components/svg/special/PlayerWearingEquipment";
import TableWithHeader from "@/components/tables/TableWithHeader";
import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";

export default async function Kitchen() {
  return (
    <div className="block col-span-full">
      <TableWithHeader
        header={["silly", "cat", "bleh"]}
        content={[
          ["milly", "cat", "uwu"],
          ["bleh", ":3", "silly"],
        ]}
      />
      <PlayerWearingEquipment />
      <DevWeapon />
      <Empty />
      <Event />
      <Removed />
      <Stub />
      <Gallery
        images={[
          ...Guns.map((gun) => ({
            url: getSuroiImageLink(gun),
            caption: gun.name,
            author: gun.idString,
          })),
        ]}
      />
    </div>
  );
}
