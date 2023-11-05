import Image from "next/image";

export default function AmmoIcon({ ammo, scale = 1 }: AmmoIconProps) {
  return (
    <Image
      src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${ammo}.svg`}
      width={72 * scale}
      height={50 * scale}
      alt={`Amomo icon for ${ammo}`}
    />
  );
}

export interface AmmoIconProps {
  ammo: string;
  scale?: number;
}
