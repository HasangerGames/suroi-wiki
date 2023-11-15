"use client";

import { useState } from "react";
import { Collapse } from "react-collapse";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function InfoboxSection({
  grid = "grid-cols-3",
  title,
  abbr,
  children,
}: InfoboxSectionProps) {
  const [isOpened, setIsOpened] = useState(true);
  
  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="relative"
      >
        <div className="p-2 bg-secondary">
          <h3 className="font-bold text-center">{abbr ? <abbr title={abbr}>{title}</abbr> : title}</h3>
        </div>
        <div className="absolute right-2 top-1/4">
          {isOpened ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      <Collapse isOpened={isOpened}>
        <div className={`border-t-primary border-t text-center divide-x divide-primary grid ${grid} text-sm`}>
          {children}
        </div>
      </Collapse>
    </>
  );
}

export interface InfoboxSectionProps extends React.PropsWithChildren {
  grid?: `grid-cols-${number}`;
  abbr?: string;
  title?: string;
}
