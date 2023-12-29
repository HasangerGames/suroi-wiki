export type GalleryImage = {
  type?: "image" | "youtube";
  url: string;
  caption?: string;
  author?: string;
};

export type ImageTab = {
  url: string;
  alt?: string;
  title?: string;
};

export type CalculatorMenu = {
  title: string;
  items: CalculatorMenuItem[];
};

export type CalculatorMenuItem = {
  name: string;
  item: any;
};

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
