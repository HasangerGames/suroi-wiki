"use client";

import ImageTabs from "@/components/interactive/ImageTabs";
import { ImageTab } from "@/lib/util/types";
import Image from "next/image";
import { useState } from "react";

export default function GenericSidebar({
  children,
  title,
  image,
  imageVariations,
}: GenericSidebarProps) {
  const [imageNum, setImageNum] = useState(0);

  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 border-b bg-primary border-primary">
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
        {(imageVariations && <ImageTabs images={imageVariations} />) ||
          (image && (
            <Image
              width={128}
              height={128}
              className="w-32 h-32"
              src={image}
              alt={`${title} image`}
            />
          ))}
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
