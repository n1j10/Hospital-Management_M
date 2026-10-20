import { Activity } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-teal-500" />
            <span className="text-sm font-semibold">MediCare</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MediCare Hospital System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
