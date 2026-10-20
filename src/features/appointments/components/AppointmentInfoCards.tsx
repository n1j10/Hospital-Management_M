import Link from "next/link";
import { User, Stethoscope, Building2 } from "lucide-react";
import type { AppointmentWithRelations } from "@/types";

export default function AppointmentInfoCards({ appointment }: { appointment: AppointmentWithRelations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <User className="h-4 w-4" />
          <span className="text-sm font-medium">Patient</span>
        </div>
        <Link
          href={`/patients/${appointment.patientId}`}
          className="font-semibold text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          {appointment.patient.fullName}
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{appointment.patient.phone}</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Stethoscope className="h-4 w-4" />
          <span className="text-sm font-medium">Doctor</span>
        </div>
        <Link
          href={`/doctors/${appointment.doctorId}`}
          className="font-semibold text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          {appointment.doctor.user.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{appointment.doctor.specialization}</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Building2 className="h-4 w-4" />
          <span className="text-sm font-medium">Department</span>
        </div>
        <Link
          href={`/departments/${appointment.departmentId}`}
          className="font-semibold text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          {appointment.department.name}
        </Link>
      </div>
    </div>
  );
}
