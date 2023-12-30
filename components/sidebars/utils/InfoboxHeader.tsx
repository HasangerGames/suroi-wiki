export default function InfoboxHeader({ children }: React.PropsWithChildren) {
  return (
    <div className="p-2 bg-white/10 rounded-md">
      <h3 className="font-bold text-center">{children}</h3>
    </div>
  );
}
