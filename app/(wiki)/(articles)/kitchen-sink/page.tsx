// A component testing page

import Gallery, { GalleryImageType } from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";

export default async function Kitchen() {
  return (
    <div className="block col-span-full">
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
            author: gun.idString
          })),
          {
            url: "https://images.unsplash.com/photo-1702928153872-5754d411b0f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "test",
            author: "John Doe"
          },
          {
            url: "https://images.unsplash.com/photo-1682687218982-6c508299e107?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Jane Doe",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor. Ligula ullamcorper malesuada proin libero nunc consequat. Pharetra convallis posuere morbi leo urna. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tortor aliquam nulla facilisi cras fermentum odio. Sed turpis tincidunt id aliquet risus feugiat. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Cursus metus aliquam eleifend mi in nulla posuere. Aliquam vestibulum morbi blandit cursus risus at ultrices. Amet risus nullam eget felis eget. Ac tincidunt vitae semper quis lectus nulla. Bibendum at varius vel pharetra vel turpis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Netus et malesuada fames ac turpis. Etiam non quam lacus suspendisse faucibus interdum posuere. Proin sed libero enim sed faucibus turpis in eu mi. Nam libero justo laoreet sit amet cursus sit amet dictum. Convallis posuere morbi leo urna molestie at elementum."
          }
        ]}
      />
    </div>
  );
}
