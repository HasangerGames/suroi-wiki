import ImageTabs from "@/components/interactive/ImageTabs";
import { ImageTab } from "@/lib/util/types";

export default function GenericSidebar({
  children,
  title,
  image,
  imageVariations,
}: GenericSidebarProps) {
  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 border-b bg-primary border-primary">
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
