import Link from "next/link";
import { cn } from "@/lib/utils";

export type FilterOption = { href: string; label: string; active: boolean };

/** Segmented pill control used to filter lists (by status, by category...). */
function FilterLinks({ options, wrap = false }: { options: FilterOption[]; wrap?: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex gap-1 rounded-xl border border-border bg-muted/60 p-1",
        wrap ? "flex-wrap" : "overflow-x-auto scrollbar-thin"
      )}
    >
      {options.map((option) => (
        <Link
          key={option.href}
          href={option.href}
          className={cn(
            "relative inline-flex h-8 items-center rounded-lg px-3.5 text-xs font-semibold transition-all duration-300 whitespace-nowrap",
            option.active
              ? "bg-card text-teal-700 shadow-sm ring-1 ring-border dark:text-teal-300"
              : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
          )}
        >
          {option.active && <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-teal-500" />}
          {option.label}
        </Link>
      ))}
    </div>
  );
}

/** Build options for a status filter: ["ALL", "PENDING"] -> All, Pending. */
export function statusFilterOptions(basePath: string, statuses: string[], current?: string): FilterOption[] {
  return statuses.map((s) => ({
    href: `${basePath}?status=${s}`,
    label: s === "ALL" ? "All" : s.charAt(0) + s.slice(1).toLowerCase(),
    active: (current ?? "ALL") === s,
  }));
}

export default FilterLinks;
