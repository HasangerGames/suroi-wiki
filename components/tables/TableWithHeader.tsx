export default function TableWithHeader({
  header,
  content,
  title,
}: TableWithHeaderProps) {
  return (
    <div className="flex flex-col gap-4 p-2 my-4 bg-muted rounded-md">
      {title && <h3 className="text-xl font-bold">{title}</h3>}
      <table className="w-full divide-y-4 divide-muted">
        <thead>
          <tr className="bg-white/20 p-2 divide-x-4 divide-muted">
            {header.map((cell, i) => (
              <th
                key={i.toString()}
                className="first:rounded-l-md last:rounded-r-md p-2"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="p-2 bg-white/5 divide-y-4 divide-muted">
          {content.map((row, i) => (
            <tr
              key={i.toString()}
              className="transition-colors divide-x-4 divide-muted first:rounded-t-md last:rounded-b-md hover:bg-white/5"
            >
              {row.map((cell, j) => (
                <td key={`${i}.${j}`} className="p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface TableWithHeaderProps extends React.PropsWithChildren {
  header: string[];
  content: string[][];
  title?: string;
}
