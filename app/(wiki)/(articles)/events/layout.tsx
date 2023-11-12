export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose prose-invert col-span-full">{children}</div>;
}
