import { Children } from "react";

export default function InfoboxRow({ columns, children }: InfoboxRowProps) {
  return (
    <div
      className={`border-t-primary border-t text-center divide-x divide-primary grid text-sm`}
      style={{
        gridTemplateColumns: `repeat(${
          columns ?? Children.count(children)
        }, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}

export interface InfoboxRowProps extends React.PropsWithChildren {
  columns?: number;
}
