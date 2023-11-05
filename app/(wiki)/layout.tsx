export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="container my-8">
      <div>{children}</div>
    </div>
  );
}
