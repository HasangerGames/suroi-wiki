// A component testing page

import Gallery from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";

export default async function Kitchen() {
  return (
    <div className="block w-full">
      <DevWeapon />
      <Empty />
      <Event />
      <Removed />
      <Stub />
      <Gallery />
    </div>
  )
}