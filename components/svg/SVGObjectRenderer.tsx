import { SVGObject } from "@/lib/util/types";

export default function SVGObjectRenderer({ objects }: SVGObjectRenderer) {
  return (
    <>
      {[...objects]
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((object, i) => (
          <g
            key={i.toString()}
            style={{
              transformBox: "fill-box",
              translate: `calc(${object.x ?? 0}px - 50%) calc(${
                object.y ?? 0
              }px - 50%)`,
              scale: `${object.scaleX ?? 1} ${object.scaleY ?? 1}`,
              rotate: `${object.rotation ?? 0}deg`,
              transformOrigin: object.origin ?? "center",
            }}
          >
            {(object.type === "circle" && (
              <circle cx={0} cy={0} radius={object.radius} fill={object.fill} />
            )) ||
              (object.type === "rect" && (
                <rect
                  width={object.width}
                  height={object.height}
                  fill={object.fill}
                />
              )) ||
              (object.type === "image" && <image href={object.url} />)}
          </g>
        ))}
    </>
  );
}

export interface SVGObjectRenderer extends React.PropsWithChildren {
  objects: SVGObject[];
}
