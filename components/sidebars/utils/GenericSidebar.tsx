import Image from "next/image";

export default function GenericSidebar({
  children,
  title,
  image,
}: GenericSidebarProps) {
  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 border-b bg-primary border-primary">
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
        <div className="flex justify-center p-2">
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
