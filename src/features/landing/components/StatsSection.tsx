import { Clock, Headphones, Lock, ShieldCheck } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const stats = [
  { value: "99.9%", label: "Uptime", icon: Clock },
  { value: "256-bit", label: "Encryption", icon: Lock },
  { value: "24/7", label: "Support", icon: Headphones },
  { value: "HIPAA", label: "Compliant", icon: ShieldCheck },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="surface relative grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="group bg-card p-8 text-center transition-colors hover:bg-muted/40">
                <Icon className="mx-auto h-6 w-6 text-teal-500 transition-transform duration-500 group-hover:scale-125" />
                <div className="mt-4 text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">{value}</div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
