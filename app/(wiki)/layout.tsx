import NavContainer from "@/components/interactive/NavContainer";
import NavigationBar from "@/components/interactive/NavigationBar";

export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <div className="container my-32">
        <div>{children}</div>
      </div>
    </div>
  );
}
