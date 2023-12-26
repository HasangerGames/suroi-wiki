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
