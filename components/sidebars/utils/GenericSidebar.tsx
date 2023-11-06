import Image from "next/image";

export default function GenericSidebar({
  children,
  title,
  image,
}: GenericSidebarProps) {
  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 bg-primary border-b border-primary">
          <h2 className="font-bold text-xl text-center">{title}</h2>
        </div>
        <div className="p-2 flex justify-center">
          <Image
            src={image}
            width={128}
            height={128}
            alt={`Image of ${title}`}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export interface GenericSidebarProps extends React.PropsWithChildren {
  title: string;
  image: string;
}
