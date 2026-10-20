import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Icon + label + value, used on profile / detail cards. */
export default function InfoTile({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start gap-3 rounded-xl border border-border/70 bg-muted/30 p-3.5 transition-colors hover:bg-muted/60", className)}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-300">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <div className="mt-0.5 break-words text-sm font-semibold text-foreground">{children}</div>
      </div>
    </div>
  );
}
