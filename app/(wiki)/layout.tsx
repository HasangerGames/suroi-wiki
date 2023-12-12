import NavContainer from "@/components/interactive/NavContainer";

export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <nav className="mb-4 py-4 border-b border-b-[gray] bg-background top-0 z-50 sticky">
        <NavContainer />
      </nav>
      <div className="container my-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
