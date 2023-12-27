// A component testing page

import Gallery from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";
import GunGraph from "@/components/interactive/GunGraph";
import SVGRenderer from "@/components/interactive/SVGRenderer";
import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";

export default async function Kitchen() {
  return (
    <div className="block col-span-full">
      <SVGRenderer
        viewbox="-60 -60 120 120"
        className="w-96"
        objects={[
          {
            type: "image",
            url: getSuroiImageLink(getSuroiItem("leia"), undefined, "base"),
            x: 0,
            y: 0,
            rotation: 90,
            zIndex: 3,
          },
          {
            type: "image",
            url: getSuroiImageLink(getSuroiItem("leia"), undefined, "fist"),
            x: 35,
            y: 35,
            rotation: 90,
            zIndex: 4,
          },
          {
            type: "image",
            url: getSuroiImageLink(getSuroiItem("leia"), undefined, "fist"),
            x: -35,
            y: 35,
            rotation: 90,
            zIndex: 4,
          },
        ]}
      />
      <SVGRenderer
        objects={[
          {
            type: "image",
            url: getSuroiImageLink(getSuroiItem("aug"), undefined, "world"),
            x: 100,
            y: 100,
            zIndex: 0,
          },
          {
            type: "image",
            url: getSuroiImageLink(getSuroiItem("aug")),
            x: 0,
            y: 0,
            scaleX: 2.5,
            zIndex: 1,
          },
          {
            type: "image",
            url: getSuroiImageLink(getSuroiItem("medikit")),
            x: 30,
            y: 0,
            zIndex: -1,
          },
        ]}
        viewbox="0 0 800 400"
      />
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
