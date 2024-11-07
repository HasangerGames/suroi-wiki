import { SVGObject } from "@/lib/util/types";
import { randomUUID } from "crypto";

export default function SVGObjectRenderer({ objects }: SVGObjectRenderer) {
  return (
    <>
      {[...objects]
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((object, i) => {
          let r: number | undefined;
          let g: number | undefined;
          let b: number | undefined;
          let filterURL: string | undefined;
          const tint = object.tint;
          if (tint) {
            r = ((tint & 0xff0000) >> 16) / 255;
            g = ((tint & 0x00ff00) >> 8) / 255;
            b = (tint & 0x0000ff) / 255;
            console.log(r, g, b);
            filterURL = randomUUID();
          }
          return (
            <>
              {tint && (
                <filter id={filterURL}>
                  <feColorMatrix
                    in="SourceGraphic"
                    color-interpolation-filters="sRGB"
                    type="matrix"
                    values={`${r} 0 0 0 0
                            0 ${g} 0 0 0
                            0 0 ${b} 0 0
                            0 0 0 1 0`}
                  />
                </filter>
              )}
              <g
                key={i.toString()}
                style={{
                  transformBox: "fill-box",
                  translate: `calc(${object.x ?? 0}px - 50%) calc(${
                    object.y ?? 0
                  }px - 50%)`,
                  scale: `${object.scaleX ?? 1} ${object.scaleY ?? 1}`,
                  rotate: `${object.rotation ?? 0}deg`,
                  transformOrigin: object.origin ?? "center"
                }}
                filter={tint ? `url(#${filterURL})` : undefined}
              >
                {(object.type === "circle" && (
                  <circle cx={0} cy={0} radius={object.radius} fill={object.fill} />
                ))
                || (object.type === "rect" && (
                  <rect
                    x={object.width / -2}
                    y={object.height / -2}
                    width={object.width}
                    height={object.height}
                  />
                ))
                || (object.type === "image" && <image href={object.url} />)
                || (object.type === "react" && object.url)}
              </g>
            </>
          );
        })}
    </>
  );
}

export interface SVGObjectRenderer extends React.PropsWithChildren {
  objects: SVGObject[]
}
