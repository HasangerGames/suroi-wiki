export default function GridTable({ children }: React.PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      {children}
    </div>
  );
}
