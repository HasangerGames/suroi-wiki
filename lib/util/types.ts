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
