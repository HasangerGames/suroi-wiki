export default function TableWithHeader({
  header,
  content,
  title,
}: TableWithHeaderProps) {
  return (
    <div className="flex flex-col gap-2 p-2 my-4 bg-muted rounded-md">
      {title && <h3 className="text-xl font-bold">{title}</h3>}
      <div
        className="grid p-2 gap-2 divide-x-4 divide-muted bg-white/20 rounded-md text-center font-bold"
        style={{
          gridTemplateColumns: `repeat(${header.length}, minmax(0, 1fr))`,
        }}
      >
        {header.map((cell, i) => (
          <span key={i.toString()} className="px-2">
            {cell}
          </span>
        ))}
      </div>
      <div className="flex flex-col p-2 divide-muted bg-white/5 rounded-md">
        {content.map((row, i) => (
          <>
            <div
              key={i.toString()}
              className="grid gap-2 divide-x-4 py-2 divide-muted rounded-md hover:bg-white/5"
              style={{
                gridTemplateColumns: `repeat(${header.length}, minmax(0, 1fr))`,
              }}
            >
              {row.map((cell, j) => (
                <span key={`${i}-${j}`} className="px-2">
                  {cell}
                </span>
              ))}
            </div>
            <span className="w-full h-1 bg-muted rounded-full my-1 last:hidden"></span>
          </>
        ))}
      </div>
    </div>
  );
}

export interface TableWithHeaderProps extends React.PropsWithChildren {
  header: string[];
  content: string[][];
  title?: string;
}
