import Emote from "@/components/icons/Emote";

export default function EventItem() {
  return (
    <div className="p-2 pl-4 bg-muted flex gap-4 items-center">
      <div className="flex items-center">
        <Emote emote="happy_face" />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="font-bold">
          This article is about gameplay or items only available during certain
          Events.
        </span>
      </div>
    </div>
  );
}
