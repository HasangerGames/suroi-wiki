export default function ArticleLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="sm:grid flex flex-col-reverse sm:grid-cols-6 lg:grid-cols-8 gap-4">
      {children}
    </main>
  );
}
