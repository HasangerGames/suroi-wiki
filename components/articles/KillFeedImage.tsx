import { getSuroiItem, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import Image from "next/image";

export default function KillFeedImage({
  weaponID,
  width,
  height,
  rotation,
}: KillFeedImageProps) {
  return (
    <Image
      width={width ?? 100}
      height={height ?? 100}
      style={{
        rotate: `${rotation ?? 0}deg`,
      }}
      src={getSuroiKillfeedImageLink(getSuroiItem(weaponID))}
      alt={getSuroiItem(weaponID)?.name}
    />
  );
}

export interface KillFeedImageProps extends React.PropsWithChildren {
  weaponID: string;
  width?: number;
  height?: number;
  rotation?: number;
}
