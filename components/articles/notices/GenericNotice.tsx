import Emote from "@/components/icons/Emote";

export default function GenericNotice({ emote, children }: GenericNoticeProps) {
  return (
    <div className="flex gap-4 items-center p-2 pl-4 my-4 bg-muted">
      <div className="flex items-center">
        <Emote emote={emote} />
      </div>
      <div className="flex flex-1 justify-center">
        <span className="font-bold">{children}</span>
      </div>
    </div>
  );
}

export interface GenericNoticeProps extends React.PropsWithChildren {
  emote: string;
}
