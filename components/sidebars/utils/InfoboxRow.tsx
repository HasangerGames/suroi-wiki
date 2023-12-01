import { Children } from "react";

export default function InfoboxRow({ columns, children }: InfoboxRowProps) {
  let childrenCount = 0;
  Children.forEach(children, (child) =>
    Boolean(child) ? childrenCount++ : null
  );
  
  return (
    <div
      className={`border-t-primary border-t text-center divide-x divide-primary grid text-sm`}
      style={{
        gridTemplateColumns: `repeat(${
          columns ?? childrenCount
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
