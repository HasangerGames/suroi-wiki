import { IMAGE_BASE_URL } from "@/lib/util/suroi";
import Image from "next/image";

// TODO: I have no idea what this was for?

/**
 * @deprecated
 */
export default function HealingIcon({
  item: ammo,
  scale = 1
}: HealingIconProps) {
  return (
    <Image
      src={`${IMAGE_BASE_URL}/game/shared/loot/${ammo}.svg`}
      width={50 * scale}
      height={50 * scale}
      alt={`Healing icon for ${ammo}`}
    />
  );
}

export interface HealingIconProps {
  item: string
  scale?: number
}
