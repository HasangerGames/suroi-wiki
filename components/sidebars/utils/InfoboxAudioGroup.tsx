"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";
import InfoboxHeader from "./InfoboxHeader";

export default function InfoboxAudioGroup({
  children
}: InfoboxAudioGroupProps) {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="relative cursor-pointer"
      >
        <InfoboxHeader>Sounds</InfoboxHeader>
        <div className="absolute right-2 top-1/4">
          {isOpened ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      <Collapse isOpened={isOpened}>
        <div className="flex flex-col text-sm">{children}</div>
      </Collapse>
    </>
  );
}

export type InfoboxAudioGroupProps = React.PropsWithChildren;
