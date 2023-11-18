export default function FlexTable({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-center mt-8">
      <div className="w-[60ch] flex divide-y divide-muted-foreground flex-col border border-border">
        {children}
      </div>
    </div>
  );
}
