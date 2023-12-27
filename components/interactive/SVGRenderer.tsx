import { SVGObject } from "@/lib/util/svg";

export default function SVGRenderer({
  objects,
  viewbox,
  className,
}: SVGRendererProps) {
  /*
  x={getImageDimensions(object.url).then((v) => v.width / -2)}
  y={getImageDimensions(object.url).then((v) => v.height / -2)}
  width={getImageDimensions(object.url).then((v) => v.width)}
  height={getImageDimensions(object.url).then((v) => v.height)}
  */
  return (
    <svg viewBox={viewbox} className={className ?? ""}>
      {[...objects]
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((object, i) => (
          <g
            key={i.toString()}
            style={{
              transformBox: "fill-box",
              translate: `calc(${object.x}px - 50%) calc(${object.y}px - 50%)`,
              scale: `${object.scaleX ?? 1} ${object.scaleY ?? 1}`,
              rotate: `${object.rotation ?? 0}deg`,
              transformOrigin: "center",
            }}
          >
            {(object.type === "circle" && (
              <circle cx={0} cy={0} radius={object.radius} fill={object.fill} />
            )) ||
              (object.type === "rect" && (
                <rect
                  x={object.width / -2}
                  y={object.height / -2}
                  width={object.width}
                  height={object.height}
                />
              )) ||
              (object.type === "image" && <image href={object.url} />)}
          </g>
        ))}
    </svg>
  );
}

export interface SVGRendererProps extends React.PropsWithChildren {
  objects: SVGObject[];
  viewbox: string;
  className?: string;
}
