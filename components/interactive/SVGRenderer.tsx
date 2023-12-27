import { SVGObject, getImageDimensions } from "@/lib/util/svg";

export default function SVGRenderer({ objects }: SVGRendererProps) {
  return (
    <svg>
      {objects.map((object, i) => (
        <g
          key={i.toString()}
          style={{
            transformBox: "fill-box",
            translate: `${object.x}px ${object.y}px`,
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
            (object.type === "image" && (
              <image
                href={object.url}
                x={getImageDimensions(object.url).then((v) => v.width / -2)}
                y={getImageDimensions(object.url).then((v) => v.height / -2)}
                width={getImageDimensions(object.url).then((v) => v.width)}
                height={getImageDimensions(object.url).then((v) => v.height)}
              />
            ))}
        </g>
      ))}
    </svg>
  );
}

export interface SVGRendererProps extends React.PropsWithChildren {
  objects: SVGObject[];
}
