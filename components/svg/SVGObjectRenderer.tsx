import { SVGObject } from "@/lib/util/types";
import { randomUUID } from "crypto";

export default function SVGObjectRenderer({ objects }: SVGObjectRenderer) {
  return (
    <>
      {[...objects]
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((object, i) => {
          let red: number | undefined;
          let green: number | undefined;
          let blue: number | undefined;
          let alpha: number | undefined;
          let filterURL: string | undefined;
          let tint = object.tint;
          if (typeof tint === "string") {
            if (tint.startsWith("#")) {
              switch (tint.length) {
                case 4: {
                  const [r, g, b] = [
                    tint.charAt(1),
                    tint.charAt(2),
                    tint.charAt(3)
                  ];
                  tint = parseInt(`${r}${r}${g}${g}${b}${b}`, 16);
                  break;
                }
                case 5: {
                  const [r, g, b, a] = [
                    tint.charAt(1),
                    tint.charAt(2),
                    tint.charAt(3),
                    tint.charAt(4)
                  ];
                  tint = parseInt(`${r}${r}${g}${g}${b}${b}${a}${a}`, 16);
                  break;
                }
                default: {
                  tint = parseInt((tint as string).slice(1), 16);
                  break;
                }
              }
            } else {
              tint = 0xffffff;
            }
          }
          if (typeof tint === "number") {
            if (tint > 0xffffff) {
              red = ((tint & 0xff000000) >> 24) / 255;
              green = ((tint & 0x00ff0000) >> 16) / 255;
              blue = ((tint & 0x0000ff00) >> 8) / 255;
              alpha = (tint & 0x000000ff) / 255;
            } else {
              red = ((tint & 0xff0000) >> 16) / 255;
              green = ((tint & 0x00ff00) >> 8) / 255;
              blue = (tint & 0x0000ff) / 255;
              alpha = 1;
            }
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
                    values={`${red} 0 0 0 0
                            0 ${green} 0 0 0
                            0 0 ${blue} 0 0
                            0 0 0 ${alpha} 0`}
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
