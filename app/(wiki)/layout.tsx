export default function ArticleLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex flex-col-reverse gap-4 md:flex-row">{children}</main>
  );
}
