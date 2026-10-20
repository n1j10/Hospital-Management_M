import { Building2, CalendarDays, Stethoscope, User } from "lucide-react";
import InfoTile from "@/components/shared/InfoTile";
import { formatDate } from "@/lib/format";
import type { AdmissionWithRelations } from "@/types";

export default function AdmissionSummary({ admission }: { admission: AdmissionWithRelations }) {
  return (
    <div className="surface p-6 animate-fade-up [animation-delay:100ms]">
      <h3 className="mb-4 font-bold">Admission Summary</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoTile icon={User} label="Patient">{admission.patient.fullName}</InfoTile>
        <InfoTile icon={Stethoscope} label="Doctor">{admission.doctor.user.name}</InfoTile>
        <InfoTile icon={Building2} label="Department">{admission.department.name}</InfoTile>
        <InfoTile icon={CalendarDays} label="Admit Date">{formatDate(admission.admitDate)}</InfoTile>
      </div>
      {admission.reason && (
        <div className="mt-4 rounded-xl border border-border/70 bg-muted/30 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Reason</p>
          <p className="mt-1 text-sm">{admission.reason}</p>
        </div>
      )}
    </div>
  );
}
