import { getSuroiItem, getSuroiKillfeedImageLink, isWeapon } from "@/lib/util/suroi";
import Image from "next/image";

export default function KillFeedImage({
  weaponID,
  width,
  height,
  rotation,
}: KillFeedImageProps) {
  const item = getSuroiItem(weaponID);
  if(!item) throw new Error(`KillFeedImage > Item ${weaponID} not found`);
  if(!isWeapon(item)) throw new Error(`KillFeedImage > Item ${weaponID} is not a weapon`);
  return (
    <Image
      width={width ?? 100}
      height={height ?? 100}
      style={{
        rotate: `${rotation ?? 0}deg`,
      }}
      src={getSuroiKillfeedImageLink(item)}
      alt={getSuroiItem(weaponID)?.name ?? "Weapon killfeed image"}
    />
  );
}

export interface KillFeedImageProps extends React.PropsWithChildren {
  weaponID: string;
  width?: number;
  height?: number;
  rotation?: number;
}
