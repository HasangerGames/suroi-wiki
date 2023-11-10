import Image from "next/image";

export default function Emote({
  emote,
  w = 64,
  h = 64,
}: {
  emote: string;
  w?: number;
  h?: number;
}) {
  return (
    <Image
      height={w}
      width={h}
      src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/emotes/${emote}.svg`}
      alt={`Emote: ${emote}`}      
    />
  );
}
