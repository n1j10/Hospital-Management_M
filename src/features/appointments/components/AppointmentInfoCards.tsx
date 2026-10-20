import Link from "next/link";
import { ArrowUpRight, User, Stethoscope, Building2, type LucideIcon } from "lucide-react";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import { stagger } from "@/lib/utils";
import type { AppointmentWithRelations } from "@/types";

function InfoCard({
  icon: Icon,
  label,
  href,
  name,
  sub,
  index,
  avatar = true,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  name: string;
  sub?: string;
  index: number;
  avatar?: boolean;
}) {
  return (
    <Link href={href} style={stagger(index, 80, 100)} className="surface lift group relative block overflow-hidden p-5 animate-fade-up">
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
          <Icon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          {label}
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
      </div>
      <div className="mt-4 flex items-center gap-3">
        {avatar ? (
          <InitialsAvatar name={name} />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-md">
            <Building2 className="h-5 w-5" />
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate font-bold text-foreground transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">{name}</p>
          {sub && <p className="truncate text-sm text-muted-foreground">{sub}</p>}
        </div>
      </div>
    </Link>
  );
}

export default function AppointmentInfoCards({ appointment }: { appointment: AppointmentWithRelations }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <InfoCard
        index={0}
        icon={User}
        label="Patient"
        href={`/patients/${appointment.patientId}`}
        name={appointment.patient.fullName}
        sub={appointment.patient.phone}
      />
      <InfoCard
        index={1}
        icon={Stethoscope}
        label="Doctor"
        href={`/doctors/${appointment.doctorId}`}
        name={appointment.doctor.user.name}
        sub={appointment.doctor.specialization}
      />
      <InfoCard
        index={2}
        icon={Building2}
        label="Department"
        href={`/departments/${appointment.departmentId}`}
        name={appointment.department.name}
        avatar={false}
      />
    </div>
  );
}
