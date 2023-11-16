import Image from "next/image";
import Link from "@/components/links/Link";

export default function PageCard({
  title,
  url,
  image,
  description,
}: PageCardProps) {
  return (
    <div className="flex-1">
      <Link href={url}>
        <div className="p-4 rounded-md border border-border flex gap-8 w-full transition-colors h-full hover:border-blue-500 group">
          <div className="flex items-center justify-center">
            <Image
              src={image}
              width={100}
              height={100}
              alt={`${title} page image`}
              className=""
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg underline group-hover:text-blue-500 transition-colors leading-loose">
              {title}
            </h3>
            <p className="transition-colors group-hover:text-blue-500">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export interface PageCardProps {
  title: string;
  url: string;
  image: string;
  description?: string;
}
