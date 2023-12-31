"use client";

import { ImageTab } from "@/lib/util/types";
import { cp } from "fs";
import Image from "next/image";
import { useState } from "react";

const BackgroundMode = ["transparent", "white", "black", "checker"];

export default function ImageTabs({ images }: ImageTabsProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const [backgroundMode, setBackgroundMode] = useState("transparent");
  const currentImage = images[currentTab];
  return (
    <div
      className={`flex flex-col items-center justify-start gap-2 bg-white/5 rounded-md`}
    >
      {images.length > 1 && (
        <div className="flex flex-row flex-wrap w-full justify-around gap-2 items-center p-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentTab(index)}
              className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-white/5 cursor-pointer text-muted-foreground hover:text-white ${
                currentTab === index
                  ? "!text-white bg-white/10 ring-primary ring"
                  : ""
              } p-2`}
            >
              {image.title ?? index + 1}
            </button>
          ))}
        </div>
      )}
      {(currentImage && (
        <Image
          src={currentImage.url}
          alt={currentImage.alt ?? currentImage.title ?? currentImage.url}
          width={128}
          height={128}
          className={`w-40 h-40 my-4 p-4 ${getColor(
            backgroundMode
          )} bg-repeat bg-[length:1rem]`}
        />
      )) || <h1>(No image available)</h1>}
      <div className="flex flex-row gap-2 mb-4">
        {BackgroundMode.map((color, i) => (
          <button
            key={i}
            className={`${getColor(color)} border ${
              color === backgroundMode ? "border-primary" : "border-white"
            } flex w-8 h-8 rounded-md`}
            onClick={() => setBackgroundMode(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}

function getColor(color: string) {
  return color === "transparent"
    ? "bg-transparent"
    : color === "white"
    ? "bg-white"
    : color === "black"
    ? "bg-black"
    : color === "checker"
    ? "bg-checker bg-white"
    : "";
}

export interface ImageTabsProps extends React.PropsWithChildren {
  images: ImageTab[];
}
