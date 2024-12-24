import Image from "next/image";
import { getSuroiSprite } from "@/lib/util/suroi";
import { EmoteDefinition } from "@/vendor/suroi/common/src/definitions/emotes";

export default function EmoteCard({ emote }: EmoteCardProps) {
  return (
    <div className="flex p-4 gap-5 not-prose rounded-md ring ring-border hover:ring-primary">
      <Image src={getSuroiSprite(emote.idString)} width="100" height="100" alt={emote.name} className="max-w-[10rem]" />
      <div className="flex-1">
        <h3 className="text-lg font-bold break-normal leading-loose underline transition-colors">
          {emote.name}
        </h3>
        <span className="font-mono">{emote.idString}</span>
      </div>
    </div>
  );
}

export interface EmoteCardProps extends React.PropsWithChildren {
  emote: EmoteDefinition
}
