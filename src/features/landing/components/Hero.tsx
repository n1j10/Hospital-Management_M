import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  HeartPulse,
  Pill,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function MockStat({ icon: Icon, label, tone }: { icon: typeof Users; label: string; tone: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-card p-3">
      <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", tone)}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="mt-3 h-2 w-12 rounded-full bg-foreground/15" />
      <p className="mt-1.5 text-[11px] font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

/** A stylised dashboard preview (decorative). */
function DashboardMock() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl animate-fade-up [animation-delay:500ms]">
      <div className="absolute -inset-4 rounded-[2rem] bg-brand opacity-25 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-2xl backdrop-blur">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-4 h-6 flex-1 max-w-xs rounded-md bg-muted" />
        </div>
        <div className="grid grid-cols-[180px_1fr] max-md:grid-cols-1">
          <div className="hidden space-y-2 border-r border-border/70 p-4 md:block">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={cn("flex items-center gap-2 rounded-lg px-2 py-2", i === 1 && "bg-brand")}>
                <span className={cn("h-4 w-4 rounded", i === 1 ? "bg-white/80" : "bg-muted-foreground/25")} />
                <span className={cn("h-2 rounded-full", i === 1 ? "w-16 bg-white/80" : "w-20 bg-muted-foreground/20")} />
              </div>
            ))}
          </div>
          <div className="space-y-4 p-5">
            <div className="relative overflow-hidden rounded-2xl bg-brand-animated p-5 text-white">
              <div className="h-3 w-40 rounded-full bg-white/70" />
              <div className="mt-2 h-2 w-64 max-w-full rounded-full bg-white/40" />
              <HeartPulse className="absolute right-5 top-4 h-10 w-10 text-white/30" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <MockStat icon={Users} label="Patients" tone="from-teal-400 to-teal-600" />
              <MockStat icon={Stethoscope} label="Doctors" tone="from-sky-400 to-blue-600" />
              <MockStat icon={BedDouble} label="Admitted" tone="from-rose-400 to-pink-600" />
              <MockStat icon={Pill} label="Low stock" tone="from-amber-400 to-orange-500" />
            </div>
            <div className="space-y-2 rounded-xl border border-border/70 p-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-full bg-gradient-to-br from-teal-300 to-cyan-500" />
                  <span className="h-2 w-28 rounded-full bg-foreground/15" />
                  <span className="ml-auto h-5 w-16 rounded-full bg-emerald-500/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -left-6 top-1/3 hidden rounded-2xl border border-border/70 bg-card/90 p-3 shadow-xl backdrop-blur animate-float lg:block">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600"><CalendarCheck className="h-4 w-4" /></span>
          <div className="leading-tight">
            <p className="text-sm font-bold">Appointment confirmed</p>
            <p className="text-[11px] text-muted-foreground">just now</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-6 bottom-12 hidden rounded-2xl border border-border/70 bg-card/90 p-3 shadow-xl backdrop-blur animate-float [animation-delay:-3s] lg:block">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600"><Pill className="h-4 w-4" /></span>
          <div className="leading-tight">
            <p className="text-sm font-bold">Low stock alert</p>
            <p className="text-[11px] text-muted-foreground">Pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-teal-400/25 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-3xl animate-blob [animation-delay:-5s]" />
        <div className="absolute left-0 top-1/2 h-[360px] w-[360px] rounded-full bg-violet-400/10 blur-3xl animate-blob [animation-delay:-9s]" />
        <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-700 dark:text-teal-300 animate-fade-up">
            <Shield className="h-3.5 w-3.5" />
            <span>Secure & Reliable Healthcare Management</span>
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:100ms]">
            Modern Hospital
            <br />
            <span className="bg-brand-animated bg-clip-text text-transparent">Management System</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up [animation-delay:200ms]">
            Streamline your hospital operations with our comprehensive
            management system. Handle patients, doctors, appointments,
            pharmacy, and more — all in one place.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up [animation-delay:300ms]">
            <Link href="/register" className={cn(buttonVariants({ variant: "brand" }), "group h-12 rounded-xl px-8 text-base font-semibold")}>
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/login" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-xl px-8 text-base font-semibold")}>
              Sign In
            </Link>
          </div>
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}
