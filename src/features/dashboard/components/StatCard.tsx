import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import CountUp from "@/components/shared/CountUp";
import { cn } from "@/lib/utils";

const tones = {
  teal: { icon: "from-teal-400 to-teal-600 shadow-teal-500/30", glow: "bg-teal-500/15", bar: "bg-teal-500" },
  sky: { icon: "from-sky-400 to-blue-600 shadow-sky-500/30", glow: "bg-sky-500/15", bar: "bg-sky-500" },
  violet: { icon: "from-violet-400 to-purple-600 shadow-violet-500/30", glow: "bg-violet-500/15", bar: "bg-violet-500" },
  amber: { icon: "from-amber-400 to-orange-500 shadow-amber-500/30", glow: "bg-amber-500/15", bar: "bg-amber-500" },
  emerald: { icon: "from-emerald-400 to-green-600 shadow-emerald-500/30", glow: "bg-emerald-500/15", bar: "bg-emerald-500" },
  rose: { icon: "from-rose-400 to-pink-600 shadow-rose-500/30", glow: "bg-rose-500/15", bar: "bg-rose-500" },
};

export type StatTone = keyof typeof tones;

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  href: string;
  tone?: StatTone;
  hint?: string;
  style?: React.CSSProperties;
}

function StatCard({ title, value, icon: Icon, href, tone = "teal", hint, style }: StatCardProps) {
  const t = tones[tone];

  return (
    <Link
      href={href}
      style={style}
      className="surface lift group relative block overflow-hidden p-5 animate-fade-up"
    >
      <div className={cn("absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150", t.glow)} />
      <div className="relative flex items-start justify-between">
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", t.icon)}>
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </div>
      <p className="relative mt-4 text-3xl font-extrabold tracking-tight text-foreground">
        <CountUp value={value} />
      </p>
      <p className="relative mt-0.5 text-sm font-medium text-muted-foreground">{title}</p>
      {hint && <p className="relative mt-3 text-[11px] text-muted-foreground/80">{hint}</p>}
      <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full w-2/3 rounded-full transition-all duration-700 group-hover:w-full", t.bar)} />
      </div>
    </Link>
  );
}

export default StatCard;
