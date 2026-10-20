import { Users, Calendar, Pill, Stethoscope, BedDouble, ClipboardList, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Register, track, and manage patient records with complete medical history.",
    color: "from-teal-400 to-cyan-600",
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    description: "Organize doctors by department and specialization with scheduling.",
    color: "from-sky-400 to-blue-600",
  },
  {
    icon: Calendar,
    title: "Appointments",
    description: "Schedule, confirm, and track appointments with real-time status updates.",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: ClipboardList,
    title: "Consultations",
    description: "Record diagnoses, notes, and prescriptions for each consultation.",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: BedDouble,
    title: "Admissions",
    description: "Manage patient admissions and discharges with department tracking.",
    color: "from-rose-400 to-pink-600",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Full inventory management with low-stock alerts and expiry tracking.",
    color: "from-amber-400 to-orange-500",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">Features</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Everything You <span className="text-brand">Need</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete suite of tools designed for modern healthcare facilities.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 90}>
              <div className="surface lift group relative h-full overflow-hidden p-7">
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-20`} />
                <div className="relative flex items-start justify-between">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
