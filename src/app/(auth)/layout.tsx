export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-teal-400/15 blur-3xl animate-blob" />
        <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
