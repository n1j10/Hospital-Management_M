import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <div className="flex items-center gap-4">
          <Link href="/admissions"><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
          <h1 className="text-2xl font-bold">Patient Already Discharged</h1>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-muted-foreground">
            {admission.patient.fullName} was discharged on {admission.dischargeDate ? formatDate(admission.dischargeDate) : "unknown date"}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Discharge Patient"
        description={`Process discharge for ${admission.patient.fullName}`}
        backHref="/admissions"
      />

      <div className="max-w-2xl space-y-4">
        <AdmissionSummary admission={admission} />
        <DischargeForm admissionId={admission.id} />
      </div>
    </div>
  );
}
