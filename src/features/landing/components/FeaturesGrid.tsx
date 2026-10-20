import { Users, Calendar, Pill, Stethoscope, BedDouble, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Register, track, and manage patient records with complete medical history.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    description: "Organize doctors by department and specialization with scheduling.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: Calendar,
    title: "Appointments",
    description: "Schedule, confirm, and track appointments with real-time status updates.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: ClipboardList,
    title: "Consultations",
    description: "Record diagnoses, notes, and prescriptions for each consultation.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: BedDouble,
    title: "Admissions",
    description: "Manage patient admissions and discharges with department tracking.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Full inventory management with low-stock alerts and expiry tracking.",
    color: "from-cyan-500 to-sky-600",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools designed for modern healthcare facilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
