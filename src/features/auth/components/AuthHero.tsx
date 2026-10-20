import { Activity, CalendarCheck, HeartPulse, ShieldCheck, Users } from "lucide-react";

/** The animated showcase half of the auth screens. */
export default function AuthHero({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative hidden flex-1 overflow-hidden bg-brand-animated lg:flex lg:items-center lg:justify-center">
      {/* decorations */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-white/15 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 animate-spin-slow" />
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 animate-spin-slow [animation-direction:reverse]" />

      <div className="relative z-10 max-w-md px-10 text-white">
        {/* floating glass cards */}
        <div className="relative mb-12 h-56">
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-white/20 shadow-2xl backdrop-blur-xl animate-scale-in">
            <HeartPulse className="h-14 w-14" />
          </div>
          <div className="absolute left-0 top-2 rounded-2xl bg-white/15 p-3.5 shadow-xl backdrop-blur-xl animate-float">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-teal-600"><Users className="h-4 w-4" /></span>
              <div className="leading-tight">
                <p className="text-sm font-bold">Patients</p>
                <p className="text-[11px] text-white/80">Records in sync</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-0 rounded-2xl bg-white/15 p-3.5 shadow-xl backdrop-blur-xl animate-float [animation-delay:-3s]">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sky-600"><CalendarCheck className="h-4 w-4" /></span>
              <div className="leading-tight">
                <p className="text-sm font-bold">Appointments</p>
                <p className="text-[11px] text-white/80">Smart scheduling</p>
              </div>
            </div>
          </div>
          <div className="absolute right-6 top-0 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-xl animate-float-slow">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            Live
          </div>
        </div>

        <h2 className="text-4xl font-extrabold leading-tight tracking-tight animate-fade-up [animation-delay:150ms]">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-white/85 animate-fade-up [animation-delay:250ms]">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:350ms]">
          {[
            { icon: ShieldCheck, label: "Secure access" },
            { icon: Activity, label: "Real-time data" },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium backdrop-blur">
              <Icon className="h-4 w-4" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
