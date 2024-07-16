import { ReactNode } from "react";

export default function MatrixTable({
  title,
  corner,
  tHeader,
  lHeader,
  content
}: MatrixTableProps) {
  return (
    <div className="flex flex-col gap-2 p-4 pt-0 bg-muted rounded-md not-prose max-h-screen overflow-y-auto">
      <div className="max-h-screen overflow-auto sticky bg-muted pt-4 top-0">
        <div>
          {title && <h3 className="text-xl font-bold pb-2">{title}</h3>}
        </div>
        <div
          className="overflow-auto grid bg-muted rounded-md gap-2 max-h-screen max-w-full"
          style={{
            gridTemplateColumns: `repeat(${
              tHeader.length + 1
            }, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${lHeader.length + 1}, minmax(0, 1fr))`
          }}
        >
          <div className="bg-primary sticky rounded-md font-bold min-w-[10ch] md:min-w-[5ch] z-10">
            {corner}
          </div>
          <div
            className=" bg-white/20 sticky rounded-md grid divide-x-4 divide-muted font-bold z-10"
            style={{
              gridColumn: `span ${tHeader.length} / span ${tHeader.length}`,
              gridTemplateColumns: `repeat(${tHeader.length}, minmax(0, 1fr))`
            }}
          >
            {tHeader.map((cell, i) => (
              <div key={i} className="p-2 min-w-[10ch] md:min-w-[5ch]">
                {cell}
              </div>
            ))}
          </div>
          <div
            className=" bg-white/20 rounded-md grid sticky min-w-[10ch] md:min-w-[5ch] divide-y-4 divide-muted font-bold z-10"
            style={{
              gridRow: `span ${lHeader.length} / span ${lHeader.length}`,
              gridTemplateRows: `repeat(${lHeader.length}, minmax(0, 1fr))`
            }}
          >
            {lHeader.map((cell, i) => (
              <div key={i} className="p-2">
                {cell}
              </div>
            ))}
          </div>
          <div
            className="grid rounded-md bg-white/5 divide-y-4 divide-muted"
            style={{
              gridRow: `span ${lHeader.length} / span ${lHeader.length}`,
              gridTemplateRows: `repeat(${lHeader.length}, minmax(0, 1fr))`,
              gridColumn: `span ${tHeader.length} / span ${tHeader.length}`
            }}
          >
            {content.map((row, i) => (
              <div
                key={i}
                className="grid divide-x-4 divide-muted"
                style={{
                  gridTemplateColumns: `repeat(${tHeader.length}, minmax(0, 1fr))`
                }}
              >
                {row.map((cell, j) => (
                  <div key={j} className="p-2 min-w-[10ch] md:min-w-[5ch]">
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface MatrixTableProps extends React.PropsWithChildren {
  title?: string
  corner?: ReactNode
  tHeader: ReactNode[]
  lHeader: ReactNode[]
  content: ReactNode[][]
}
