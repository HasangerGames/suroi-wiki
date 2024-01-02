export default function SVGRenderer() {}

export interface SVGRendererProps extends React.PropsWithChildren {}

export function G({
  children,
  ...object
}: SVGComponentProps & React.PropsWithChildren) {
  return (
    <g
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
      {children}
    </g>
  );
}

export function Image(object: SVGImageProps) {
  return <image href={object.url} />;
}
export function Rect(object: SVGRectProps) {
  return (
    <rect
      x={object.width / -2}
      y={object.height / -2}
      width={object.width}
      height={object.height}
    />
  );
}
export function Circle(object: SVGCircleProps) {
  return <circle cx={0} cy={0} radius={object.radius} fill={object.fill} />;
}

export interface SVGComponentProps {
  x?: number;
  y?: number;
  scaleX?: number;
  scaleY?: number;
  rotation?: number;
  origin?: string;
  zIndex?: number;
}

export interface SVGImageProps extends SVGComponentProps {
  url: string;
}

export interface SVGRectProps extends SVGComponentProps {
  width: number;
  height: number;
  fill: string;
}

export interface SVGCircleProps extends SVGComponentProps {
  radius: number;
  fill: string;
}
