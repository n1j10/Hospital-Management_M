import Logo from "@/components/layout/Logo";

export default function LandingFooter() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MediCare Hospital System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
