import { getSuroiImageLink, getSuroiItem, getSuroiObstacle } from "@/lib/util/suroi";
import Image from "next/image";

export default function SuroiItemImage({
  itemID,
  width,
  height,
  rotation,
  variation,
  append,
  dual,
}: SuroiItemImageProps) {
  const item = getSuroiItem(itemID)
  if(!item) throw new Error(`SuroiItemImage > Item ${itemID} not found`)
  const link =  getSuroiImageLink(
    item,
    variation ?? undefined,
    append ?? "",
    dual ?? false,
  )
  return (
    <Image
      width={width ?? 100}
      height={height ?? 100}
      style={{
        rotate: `${rotation ?? 0}deg`,
      }}
      src={link}
      alt={item.name}
    />
  );
}

export interface SuroiItemImageProps extends React.PropsWithChildren {
  itemID: string;
  width?: number;
  height?: number;
  rotation?: number;
  variation?: number;
  append?: string;
  dual?: boolean;
}
