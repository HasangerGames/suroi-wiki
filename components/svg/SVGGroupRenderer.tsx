import { SVGGroup } from "@/lib/util/types";
import SVGObjectRenderer from "./SVGObjectRenderer";
import React from "react";

export default function SVGGroupRenderer({
  viewBox,
  className,
  groups,
}: SVGGroupRendererProps) {
  return (
    <svg viewBox={viewBox} className={className ?? ""}>
      {[...groups]
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((group, i) => (
          <g
            key={i.toString()}
            style={{
              transformBox: "fill-box",
              translate: `calc(${group.x ?? 0}px - 50%) calc(${
                group.y ?? 0
              }px - 50%)`,
              scale: `${group.scaleX ?? 1} ${group.scaleY ?? 1}`,
              rotate: `${group.rotation ?? 0}deg`,
              transformOrigin: group.origin ?? "center",
            }}
          >
            <SVGObjectRenderer objects={group.objects} />
          </g>
        ))}
    </svg>
  );
}

export interface SVGGroupRendererProps extends React.PropsWithChildren {
  viewBox: string;
  className?: string;
  groups: SVGGroup[];
}
