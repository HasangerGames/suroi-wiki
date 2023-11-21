"use client";

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
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          {imageVariations?.length && (
            <div className="flex w-full justify-around gap-4 border-b border-primary pb-1z">
              <span>Variation: </span>
              {imageVariations.map((image, i) => (
                <span
                  key={image}
                  className={`cursor-pointer text-muted-foreground hover:text-white ${imageNum === i ? "!text-white underline": ""}`}
                  onClick={() => setImageNum(i)}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          )}
          <Image
            src={imageVariations ? imageVariations[imageNum] : image}
            width={128}
            height={128}
            alt={`Image of ${title}`}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export interface GenericSidebarProps extends React.PropsWithChildren {
  title: string;
  image: string;
  imageVariations?: string[];
}
