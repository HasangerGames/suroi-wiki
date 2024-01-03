import { Children, ReactElement } from "react";

export function Renderer({
  children,
  viewBox: viewbox,
  className,
}: SVGRendererProps) {
  const sorted = Children.toArray(children).sort(
    (a, b) =>
      ((b as ReactElement).props.zIndex ?? 0) -
      ((a as ReactElement).props.zIndex ?? 0)
  );
  return (
    <svg viewBox={viewbox} className={className}>
      {sorted}
    </svg>
  );
}

export interface SVGRendererProps extends React.PropsWithChildren {
  viewBox?: `${number} ${number} ${number} ${number}`;
  className?: string;
}

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
  return (
    <G {...object}>
      <image href={object.url} />
    </G>
  );
}
export function Rect(object: SVGRectProps) {
  return (
    <G {...object}>
      <rect
        x={object.width / -2}
        y={object.height / -2}
        width={object.width}
        height={object.height}
      />
    </G>
  );
}
export function Circle(object: SVGCircleProps) {
  return (
    <G {...object}>
      <circle cx={0} cy={0} radius={object.radius} fill={object.fill} />
    </G>
  );
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
