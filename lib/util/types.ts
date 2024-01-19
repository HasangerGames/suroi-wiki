import { ReactNode } from "react";

export type GalleryImage = {
  type?: "image" | "youtube";
  url: string;
  caption?: string;
  author?: string;
};

export type ImageTab = {
  title?: string;
} & (
  | {
      type: "image";
      url: string;
      alt?: string;
    }
  | {
      type: "svg";
      objects: SVGObject[];
      viewBox: string;
    }
  | {
      type: "react";
      children: ReactNode;
    }
);

export type AutoCompleteItem = {
  name: string;
  specialDisplay?: ReactNode;
  item: string;
};

export type CalculatorMenu = {
  title: string;
  items: CalculatorMenuItem[];
};

export type CalculatorMenuItem = {
  name: string;
  item: any;
};

export type SVGObject = SVGItem &
  (
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

export type SVGGroup = {
  objects: SVGObject[];
} & SVGItem;

export type SVGItem = {
  x?: number;
  y?: number;
  scaleX?: number;
  scaleY?: number;
  rotation?: number;
  origin?: string;
  zIndex: number;
};

export type Position = {
  x: number;
  y: number;
};
