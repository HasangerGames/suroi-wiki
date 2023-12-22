"use client";

import Image from "next/image";
import { useState } from "react";

export default function GenericSidebar({
  children,
  title,
  image,
  imageVariations,
  noImage,
}: GenericSidebarProps) {
  const [imageNum, setImageNum] = useState(0);

  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 border-b bg-primary border-primary">
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-2 p-2">
          {imageVariations?.length !== undefined &&
            imageVariations.length !== 0 && (
              <div className="flex flex-row flex-wrap w-full justify-around gap-2 items-center p-1">
                {imageVariations.map((image, i) => (
                  <button
                    key={image}
                    className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white ${
                      imageNum === i ? "!text-white bg-muted ring-primary ring" : ""
                    } p-2`}
                    onClick={() => setImageNum(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          {noImage || !image.length ? (
            <div className="m-4 flex justify-center">
              <span>(No image available)</span>
            </div>
          ) : (
            <Image
              priority
              src={
                imageVariations && imageVariations.length !== 0
                  ? imageVariations[imageNum]
                  : image
              }
              width={128}
              height={128}
              className="w-32 h-32"
              alt={`Image of ${title}`}
            />
          )}
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
  noImage?: boolean;
}
