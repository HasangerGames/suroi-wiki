export default function InfoboxRow({
  grid = "grid-cols-3",
  children,
}: InfoboxRowProps) {
  return (
    <div className={`border-t-primary border-t text-center divide-x divide-primary grid ${grid} text-sm`}>
      {children}
    </div>
  );
}

export interface InfoboxRowProps extends React.PropsWithChildren {
  grid?: `grid-cols-${number}`;
}
