export default function WeaponsLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="grid grid-cols-6 lg:grid-cols-8 gap-4">{children}</main>
  );
}
