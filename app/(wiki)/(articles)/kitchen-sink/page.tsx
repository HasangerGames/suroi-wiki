// A component testing page

import Gallery, { GalleryImageType } from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";

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
          {
            url: "https://images.unsplash.com/photo-1702928153872-5754d411b0f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "test",
            author: "John Doe"
          },
          {
            url: "https://images.unsplash.com/photo-1682687218982-6c508299e107?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "Jane Doe"
          }
        ]}
      />
    </div>
  );
}
