import { CircleCheckBig } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import AdmissionSummary from "@/features/admissions/components/AdmissionSummary";
import DischargeForm from "@/features/admissions/components/DischargeForm";
import { getAdmission } from "@/features/admissions/queries";
import { formatDate } from "@/lib/format";

export default async function DischargePage({ params }: PageProps<"/admissions/[id]/discharge">) {
  const { id } = await params;
  const admission = await getAdmission(id);

  if (admission.status === "DISCHARGED") {
    return (
      <div className="space-y-6">
        <PageHeader title="Patient Already Discharged" backHref="/admissions" />
        <div className="surface flex flex-col items-center px-6 py-14 text-center animate-scale-in">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-8 ring-emerald-500/5 animate-float">
            <CircleCheckBig className="h-8 w-8" />
          </span>
          <p className="mt-5 max-w-md text-muted-foreground">
            <span className="font-semibold text-foreground">{admission.patient.fullName}</span> was discharged on{" "}
            {admission.dischargeDate ? formatDate(admission.dischargeDate) : "unknown date"}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admissions"
        title="Discharge Patient"
        description={`Process discharge for ${admission.patient.fullName}`}
        backHref="/admissions"
      />

      <div className="max-w-3xl space-y-5">
        <AdmissionSummary admission={admission} />
        <DischargeForm admissionId={admission.id} />
      </div>
    </div>
  );
}
