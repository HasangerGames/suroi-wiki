export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="col-span-full prose prose-invert">{children}</div>;
}
