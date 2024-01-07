import { Children } from "react";

export default function InfoboxRow({ columns, children }: InfoboxRowProps) {
  let childrenCount = 0;
  Children.forEach(children, (child) =>
    Boolean(child) ? childrenCount++ : null
  );

  // Make infoboxrow empty if there are no children
  if (childrenCount === 0) return <></>;

	if (childrenCount > 3) console.error("Having more than three children can lead to layout issues")

  return (
    <div
      className={`text-center divide-x-4 divide-muted bg-white/5 rounded-md text-sm flex flex-row`}
    >
      {children}
    </div>
  );
}

export interface InfoboxRowProps extends React.PropsWithChildren {
  columns?: number;
}
