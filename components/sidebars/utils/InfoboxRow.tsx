import { Children } from "react";

export default function InfoboxRow({ columns, children }: InfoboxRowProps) {
  let childrenCount = 0;
  Children.forEach(children, (child) =>
    Boolean(child) ? childrenCount++ : null
  );

  // Make infoboxrow empty if there are no children
  if (childrenCount === 0) return <></>;

  return (
    <div
      className={`text-center divide-x-4 divide-muted bg-white/5 rounded-md grid text-sm`}
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
