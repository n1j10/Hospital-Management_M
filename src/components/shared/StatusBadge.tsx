import { cn } from "@/lib/utils";

type StatusType = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "ADMITTED" | "DISCHARGED";

const statusConfig: Record<StatusType, { label: string; className: string; dot: string; live?: boolean }> = {
  PENDING: { label: "Pending", className: "bg-amber-500/10 text-amber-700 ring-amber-500/25 dark:text-amber-300", dot: "bg-amber-500", live: true },
  CONFIRMED: { label: "Confirmed", className: "bg-sky-500/10 text-sky-700 ring-sky-500/25 dark:text-sky-300", dot: "bg-sky-500" },
  CANCELLED: { label: "Cancelled", className: "bg-rose-500/10 text-rose-700 ring-rose-500/25 dark:text-rose-300", dot: "bg-rose-500" },
  COMPLETED: { label: "Completed", className: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300", dot: "bg-emerald-500" },
  ADMITTED: { label: "Admitted", className: "bg-teal-500/10 text-teal-700 ring-teal-500/25 dark:text-teal-300", dot: "bg-teal-500", live: true },
  DISCHARGED: { label: "Discharged", className: "bg-slate-500/10 text-slate-600 ring-slate-500/25 dark:text-slate-300", dot: "bg-slate-400" },
};

function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status as StatusType] || {
    label: status,
    className: "bg-muted text-muted-foreground ring-border",
    dot: "bg-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset whitespace-nowrap",
        config.className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        {config.live && (
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", config.dot)} />
        )}
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", config.dot)} />
      </span>
      {config.label}
    </span>
  );
}

export default StatusBadge;
