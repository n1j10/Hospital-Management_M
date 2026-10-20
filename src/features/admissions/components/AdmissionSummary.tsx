import { formatDate } from "@/lib/format";
import type { AdmissionWithRelations } from "@/types";

export default function AdmissionSummary({ admission }: { admission: AdmissionWithRelations }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-3">
      <h3 className="font-semibold">Admission Summary</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground">Patient</p>
          <p className="font-medium">{admission.patient.fullName}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Doctor</p>
          <p className="font-medium">{admission.doctor.user.name}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Department</p>
          <p className="font-medium">{admission.department.name}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Admit Date</p>
          <p className="font-medium">{formatDate(admission.admitDate)}</p>
        </div>
      </div>
      {admission.reason && (
        <div>
          <p className="text-muted-foreground text-sm">Reason</p>
          <p className="text-sm">{admission.reason}</p>
        </div>
      )}
    </div>
  );
}
