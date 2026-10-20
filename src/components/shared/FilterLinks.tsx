import Link from "next/link";

const activeClass = "bg-purple-600 text-white border-purple-600 shadow-xs";
const idleClass = "border-border text-muted-foreground hover:bg-accent";

export type FilterOption = { href: string; label: string; active: boolean };

/** The row of pill links used to filter lists (by status, by category...). */
function FilterLinks({ options, wrap = false }: { options: FilterOption[]; wrap?: boolean }) {
  return (
    <div className={wrap ? "flex flex-wrap gap-2" : "flex gap-2"}>
      {options.map((option) => (
        <Link
          key={option.href}
          href={option.href}
          className={`inline-flex h-9 items-center rounded-lg border px-3 text-xs font-medium transition-colors ${
            option.active ? activeClass : idleClass
          }`}
        >
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
