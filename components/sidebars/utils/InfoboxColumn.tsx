export default function InfoboxColumn({
  children,
  title,
  abbr,
  image = false,
}: InfoboxColumnProps) {
  return (
    <div className="p-2">
      <h4 className="mb-1 font-bold">
        {abbr ? <abbr title={abbr}>{title}</abbr> : title}
      </h4>
      {!image && <p className="">{children}</p>}
      {image && (
        <div className="flex justify-center items-center">{children}</div>
      )}
    </div>
  );
}

export interface InfoboxColumnProps extends React.PropsWithChildren {
  title: React.ReactNode;
  abbr?: string;
  image?: boolean;
}
