import NavigationBar from "@/components/interactive/NavigationBar";

export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <div className="container mb-32 sm:mt-32 mt-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
