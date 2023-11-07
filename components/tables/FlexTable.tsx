export default function FlexTable({ children }: React.PropsWithChildren) {
  return (
    <div className="mt-8 flex justify-center">
      <div className="w-[60ch] flex divide-y divide-muted-foreground flex-col border border-muted-forground">
        {children}
      </div>
    </div>
  );
}
