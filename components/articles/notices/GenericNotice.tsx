import Emote from "@/components/icons/Emote";

export default function GenericNotice({ emote, children }: GenericNoticeProps) {
  return (
    <div className="p-2 pl-4 bg-muted flex gap-4 items-center">
      <div className="flex items-center">
        <Emote emote={emote} />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="font-bold">{children}</span>
      </div>
    </div>
  );
}

export interface GenericNoticeProps extends React.PropsWithChildren {
  emote: string;
}
