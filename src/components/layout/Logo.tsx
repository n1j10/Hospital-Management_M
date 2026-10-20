import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

/** MediCare brand mark + wordmark. */
export default function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-animated text-white shadow-lg shadow-teal-500/30">
        <HeartPulse className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-card" />
      </div>
      {!compact && (
        <div className="flex flex-col leading-tight">
          <span className="text-[15px] font-extrabold tracking-tight text-foreground">
            Medi<span className="text-brand">Care</span>
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">Hospital System</span>
        </div>
      )}
    </div>
  );
}
