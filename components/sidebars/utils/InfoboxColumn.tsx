export default function InfoboxColumn({
  children,
  title,
  abbr,
}: InfoboxColumnProps) {
  return (
    <div className="p-2 flex flex-col">
      <h4 className={`${children && "mb-1"} font-bold`}>
        {abbr ? <abbr title={abbr}>{title}</abbr> : title}
      </h4>
      <div className="flex justify-center items-center flex-1">{children}</div>
    </div>
  );
}

export interface InfoboxColumnProps extends React.PropsWithChildren {
  title: React.ReactNode;
  abbr?: string;
  image?: boolean;
}
