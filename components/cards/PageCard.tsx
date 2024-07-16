import Link from "@/components/links/Link";
import Image from "next/image";

export default function PageCard({
  title,
  url,
  image,
  description
}: PageCardProps) {
  return (
    <div className="flex-1">
      <Link href={url} unstyled>
        <div className="flex gap-8 p-4 w-full h-full rounded-md border transition-colors border-border hover:border-blue-500 group">
          <div className="flex justify-center items-center">
            <Image
              src={image}
              width={100}
              height={100}
              alt={`${title} page image`}
              className="w-24 h-24"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold leading-loose underline transition-colors group-hover:text-blue-500">
              {title}
            </h3>
            <p className="transition-colors group-hover:text-blue-500">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export interface PageCardProps {
  title: string
  url: string
  image: string
  description?: string
}
