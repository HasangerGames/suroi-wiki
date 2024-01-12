import ImageTabs from "@/components/interactive/ImageTabs";
import { ImageTab } from "@/lib/util/types";

export default function GenericSidebar({
  children,
  title,
  image,
  imageVariations,
}: GenericSidebarProps) {
  return (
    <div className="min-w-[16rem]">
      <div className="flex flex-col gap-2 p-2 bg-muted rounded-md">
        <div className="p-2 bg-white/20 rounded-md">
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
        {(imageVariations && (
          <ImageTabs images={imageVariations ?? [{ url: image }]} />
        )) ||
          (image && <ImageTabs images={[{ url: image }]} />)}
        {children}
      </div>
    </div>
  );
}

export interface GenericSidebarProps extends React.PropsWithChildren {
  title: string;
  image?: string;
  imageVariations?: ImageTab[];
}
