export default function InfoboxColumn({
  children,
  title,
  abbr,
}: InfoboxColumnProps) {
  return (
    <div className="p-2 basis-0 grow flex flex-col">
      <span className={`${children && "mb-1"} font-bold`}>
        {abbr ? <abbr title={abbr}>{title}</abbr> : title}
      </span>
      <div className="flex justify-center items-center flex-1">{children}</div>
    </div>
  );
}

export interface InfoboxColumnProps extends React.PropsWithChildren {
  title: React.ReactNode;
  abbr?: string;
  image?: boolean;
}
