import Link from "next/link";
import { ArrowUpRight, User, Stethoscope } from "lucide-react";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import type { ConsultationWithRelations } from "@/types";

export default function ConsultationParticipants({ consultation }: { consultation: ConsultationWithRelations }) {
  const people = [
    { icon: User, label: "Patient", href: `/patients/${consultation.patientId}`, name: consultation.patient.fullName, sub: consultation.patient.phone },
    { icon: Stethoscope, label: "Doctor", href: `/doctors/${consultation.doctorId}`, name: consultation.doctor.user.name, sub: consultation.doctor.specialization },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {people.map(({ icon: Icon, label, href, name, sub }, i) => (
        <Link
          key={label}
          href={href}
          style={{ animationDelay: `${100 + i * 80}ms` }}
          className="surface lift group flex items-center gap-4 p-5 animate-fade-up"
        >
          <InitialsAvatar name={name} size="lg" className="h-14 w-14 text-lg" />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
              {label}
            </p>
            <p className="mt-0.5 truncate text-lg font-bold transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">{name}</p>
            <p className="truncate text-sm text-muted-foreground">{sub}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}
