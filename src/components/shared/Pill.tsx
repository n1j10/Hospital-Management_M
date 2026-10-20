import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-muted text-foreground/80 ring-border",
  teal: "bg-teal-500/10 text-teal-700 ring-teal-500/25 dark:text-teal-300",
  sky: "bg-sky-500/10 text-sky-700 ring-sky-500/25 dark:text-sky-300",
  violet: "bg-violet-500/10 text-violet-700 ring-violet-500/25 dark:text-violet-300",
  amber: "bg-amber-500/10 text-amber-700 ring-amber-500/25 dark:text-amber-300",
  rose: "bg-rose-500/10 text-rose-700 ring-rose-500/25 dark:text-rose-300",
  emerald: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300",
};

export type PillTone = keyof typeof tones;

/** Small rounded label used everywhere instead of plain badges. */
export default function Pill({
  tone = "neutral",
  className,
  children,
}: {
  tone?: PillTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset whitespace-nowrap [&_svg]:h-3 [&_svg]:w-3",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
