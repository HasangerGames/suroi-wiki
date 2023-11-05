export default function InfoxboxHeader({ children }: React.PropsWithChildren) {
  return (
    <div className="p-2 bg-primary">
      <h3 className="font-bold text-center">{children}</h3>
    </div>
  );
}
