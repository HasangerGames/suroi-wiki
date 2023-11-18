export default function ArticleLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-6 lg:grid-cols-8">
      {children}
    </main>
  );
}
