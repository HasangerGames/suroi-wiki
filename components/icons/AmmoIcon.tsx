import { IMAGE_BASE_URL } from "@/lib/util/suroi";
import Image from "next/image";

/**
 * @deprecated
 */
export default function AmmoIcon({ ammo, scale = 1 }: AmmoIconProps) {
  return (
    <Image
      src={`${IMAGE_BASE_URL}/game/shared/loot/${ammo}.svg`}
      width={72 * scale}
      height={50 * scale}
      alt={`Ammo icon for ${ammo}`}
    />
  );
}

export interface AmmoIconProps {
  ammo: string
  scale?: number
}
