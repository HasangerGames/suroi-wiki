"use client";

import { GalleryImage } from "@/lib/util/types";
import {
  ChevronRight,
  ChevronLeft,
  ImageIcon,
  Maximize2,
  X,
  Youtube,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Gallery({ images }: GalleryProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const firstImage = images[0];

  return (
    <div className="not-prose">
      {fullscreen && (
        <div className="flex flex-col gap-8 fixed z-50 inset-0 w-full h-full bg-black/80 p-4">
          <button
            className="flex flex-row gap-8"
            onClick={() => setFullscreen(false)}
          >
            <X className="w-12 h-12" />
            <span className="text-xl my-auto">
              Gallery of {images.length} images
            </span>
          </button>
          <div className="relative w-full h-full">
            <button
              className="absolute hidden z-10 md:block left-0 top-[50%] translate-y-[-50%] rounded-full p-8 hover:bg-muted"
              onClick={() =>
                setCurrentImage(
                  currentImage - 1 < 0 ? images.length - 1 : currentImage - 1
                )
              }
            >
              <ChevronLeft className="w-16 h-16" />
            </button>
            <button
              className="absolute hidden z-10 md:block right-0 top-[50%] translate-y-[-50%] rounded-full p-8 hover:bg-muted"
              onClick={() =>
                setCurrentImage((currentImage + 1) % images.length)
              }
            >
              <ChevronRight className="w-16 h-16" />
            </button>
            <span className="flex flex-row gap-4 top-4 left-4">
              {images[currentImage].author && (
                <span className="flex flex-row gap-2 z-10">
                  <User2 /> {images[currentImage].author}
                </span>
              )}
            </span>
            {images[currentImage].caption && (
              <span className="absolute left-[50%] translate-x-[-50%] bottom-4 w-full p-4 h-16 overflow-y-auto z-10 text-center">
                {images[currentImage].caption}
              </span>
            )}
            {images[currentImage].type === "youtube" ? (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube-nocookie.com/embed/${images[currentImage].url}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <Link href={images[currentImage].url} className="cursor-zoom-in">
                <Image
                  src={images[currentImage].url}
                  alt={
                    (images[currentImage].caption &&
                      images[currentImage].caption) ||
                    "Image with no caption"
                  }
                  width={500}
                  height={500}
                  className="absolute object-scale-down h-full w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </Link>
            )}
          </div>
          <div className="flex flex-row justify-center gap-4 overflow-x-scroll w-full h-36">
            {images.map((image, i) => (
              // eslint-disable-next-line react/jsx-key
              <button onClick={() => setCurrentImage(i)} className="group">
                <Image
                  src={image.url}
                  alt={image.url}
                  width={50}
                  height={50}
                  className={`${
                    currentImage === i && "ring-primary ring"
                  } rounded-md grow min-w-[6rem] h-24 group-hover:ring-primary group-hover:ring`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setFullscreen(true)}
        className="group block cursor-zoom-in overflow-hidden bg-muted rounded-md p-2 aspect-video w-full md:w-64 h-auto"
      >
        {/* Stupid hack lol */}
        <div
          style={{ backgroundImage: `url(${firstImage.url})` }}
          className="bg-cover bg-center w-full h-full rounded-md"
        >
          <div className="relative transition-all group-hover:backdrop-brightness-50 w-full h-full rounded-md">
            <Maximize2 className="transition-transform absolute flex group-hover:visible invisible w-12 h-12 scale-0 group-hover:scale-100 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
            <span className="absolute flex flex-row gap-1 right-2 bottom-2">
              <ImageIcon className="w-6 h-6" />
              {images.length.toFixed(0)}
            </span>
            <span className="transition-opacity absolute flex flex-row left-2 bottom-2 opacity-0 group-hover:opacity-100">
              Gallery
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export interface GalleryProps extends React.PropsWithChildren {
  images: GalleryImage[];
}
