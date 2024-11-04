import ImageTabs from "@/components/interactive/ImageTabs";
import { ImageTab } from "@/lib/util/types";
import { ReactNode } from "react";

export default function GenericSidebar({
  children,
  title,
  image,
  imageVariations
}: GenericSidebarProps) {
  return (
    <div className="md:min-w-[20rem] md:max-w-[20rem]">
      <div className="flex flex-col gap-2 p-2 bg-muted rounded-md">
        <div className="p-2 bg-white/20 rounded-md">
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
        {(imageVariations && (
          <ImageTabs images={imageVariations ?? [{ url: image }]} />
        ))
        || (typeof image === "string" ? <ImageTabs images={[{ type: "image", url: image }]} /> : image)}
        {children}
      </div>
    </div>
  );
}

export interface GenericSidebarProps extends React.PropsWithChildren {
  title: string
  image?: string | ReactNode
  imageVariations?: ImageTab[]
}
