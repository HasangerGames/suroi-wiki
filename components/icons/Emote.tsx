import { IMAGE_BASE_URL } from "@/lib/util/suroi";
import Image from "next/image";

/**
 * @deprecated Use getSuroiEmote()
 */
export default function Emote({
  emote,
  w = 64,
  h = 64
}: {
  emote: string
  w?: number
  h?: number
}) {
  return (
    <Image
      height={w}
      width={h}
      src={`${IMAGE_BASE_URL}/game/shared/emotes/${emote}.svg`}
      alt={`Emote: ${emote}`}
    />
  );
}
