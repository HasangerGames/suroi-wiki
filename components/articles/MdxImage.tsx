import Image, { ImageProps } from "next/image";

// stolen from https://www.klastic.me/articles/workaround-for-nextjs-14-image-component-bug-in-mdx-files
export default function MdxImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} />;
}
