
export enum GalleryImageType {
  Image,
  YouTubeVideo
}

export type GalleryImage = {
  type?: GalleryImageType,
  image: string,
  caption: string
}

export default function Gallery({images}: GalleryProps) {
  return (
    <></>
  )
}

export interface GalleryProps extends React.PropsWithChildren {
  images: GalleryImage[]
}