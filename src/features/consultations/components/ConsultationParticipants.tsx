import Link from "next/link";
import { User, Stethoscope } from "lucide-react";
import type { ConsultationWithRelations } from "@/types";

export default function ConsultationParticipants({ consultation }: { consultation: ConsultationWithRelations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <User className="h-4 w-4" /><span className="text-sm font-medium">Patient</span>
        </div>
        <Link href={`/patients/${consultation.patientId}`} className="font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          {consultation.patient.fullName}
        </Link>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Stethoscope className="h-4 w-4" /><span className="text-sm font-medium">Doctor</span>
        </div>
        <Link href={`/doctors/${consultation.doctorId}`} className="font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          {consultation.doctor.user.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-0.5">{consultation.doctor.specialization}</p>
      </div>
    </div>
  );
}
