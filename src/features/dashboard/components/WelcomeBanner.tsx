import Link from "next/link";
import { Activity, CalendarPlus, HeartPulse, Plus, Stethoscope } from "lucide-react";

/** Gradient hero at the top of the dashboard, with the two quick actions. */
export default function WelcomeBanner({ name, todayAppointments }: { name: string; todayAppointments: number }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand-animated p-6 text-white shadow-2xl shadow-teal-500/20 sm:p-8 animate-scale-in">
      {/* decorations */}
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl animate-blob" />
      <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-300/20 blur-2xl animate-blob [animation-delay:-5s]" />
      <div className="absolute inset-0 bg-dots opacity-20 [mask-image:linear-gradient(to_left,black,transparent)]" />
      <HeartPulse className="absolute right-10 top-8 hidden h-24 w-24 text-white/15 animate-float lg:block" />
      <Stethoscope className="absolute bottom-6 right-44 hidden h-14 w-14 text-white/10 animate-float-slow lg:block" />

      <div className="relative max-w-xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
          <Activity className="h-3.5 w-3.5" />
          Live hospital overview
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Welcome back, {name.split(" ")[0]}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
          You have <span className="font-bold text-white">{todayAppointments}</span> appointment
          {todayAppointments === 1 ? "" : "s"}{" "}scheduled today. Here&apos;s what&apos;s happening across your hospital.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/patients/register"
            className="group inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-teal-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            New Patient
          </Link>
          <Link
            href="/appointments/create"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
          >
            <CalendarPlus className="h-4 w-4" />
            New Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
