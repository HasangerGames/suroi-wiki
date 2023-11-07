export default function InfoboxAudioGroup({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="flex flex-col divide-y divide-primary text-sm border-t border-t-primary">
      {children}
    </div>
  );
}
