/**
 * Units are in PX!
 */
export type SVGObject =
  | {
      x: number;
      y: number;
      scaleX?: number;
      scaleY?: number;
      rotation?: number;
      zIndex: number;
    } & (
      | {
          type: "image";
          url: string;
        }
      | {
          type: "rect";
          width: number;
          height: number;
          fill: string;
        }
      | {
          type: "circle";
          radius: number;
          fill: string;
        }
    );
