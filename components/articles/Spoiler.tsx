"use client";

import { EyeIcon } from "lucide-react";
import { useState } from "react";

export default function Spoiler({ spoiler, children }: SpoilerProps) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div
      className={`relative bg-white/5 p-4 rounded-md my-4 ${
        revealed ? "select-text" : "select-none"
      }`}
    >
      {!revealed && (
        <div className="absolute flex flex-col justify-center gap-4 p-4 inset-0 w-full h-full backdrop-blur-md rounded-md">
          <span className="text-center font-bold">
            {(spoiler && `Warning! This is a spoiler for: ${spoiler}`) ||
              "Warning! This is a spoiler!"}
          </span>
          <button
            className="transition-colors p-2 rounded-md bg-muted mx-auto flex flex-row gap-2 hover:bg-primary"
            onClick={() => setRevealed(true)}
          >
            <EyeIcon className="my-auto" /> Yes, I understand
          </button>
        </div>
      )}
      {children}
    </div>
  );
}

export interface SpoilerProps extends React.PropsWithChildren {
  spoiler?: string;
}
