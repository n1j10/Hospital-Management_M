import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/** Card that wraps a table, with an optional title row. */
export default function TableShell({
  title,
  description,
  icon: Icon,
  action,
  className,
  children,
}: {
  title?: string;
  description?: React.ReactNode;
  icon?: LucideIcon;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("surface overflow-hidden animate-fade-up [animation-delay:120ms]", className)}>
      {title && (
        <div className="flex items-center justify-between gap-4 border-b border-border/70 px-6 py-5">
          <div className="flex items-center gap-3">
            {Icon && (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-teal-500/20">
                <Icon className="h-5 w-5" />
              </span>
            )}
            <div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
              {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
            </div>
          </div>
          {action}
        </div>
      )}
      <div className="[&_thead_tr]:bg-muted/50 [&_thead_tr]:hover:bg-muted/50 [&_th]:h-11 [&_th]:px-4 [&_th]:text-[11px] [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-muted-foreground [&_td]:px-4 [&_td]:py-3.5 [&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-teal-500/[0.04]">
        {children}
      </div>
    </div>
  );
}

/** A table row that fades in, staggered by its index. */
export function rowAnimation(index: number) {
  return {
    className: "animate-fade-up",
    style: { animationDelay: `${150 + Math.min(index, 12) * 40}ms` },
  };
}

/** The "nothing here" row inside a table. */
export function EmptyRow({ colSpan, children }: { colSpan: number; children: React.ReactNode }) {
  return (
    <tr>
      <td colSpan={colSpan} className="py-12 text-center text-sm text-muted-foreground">
        {children}
      </td>
    </tr>
  );
}
