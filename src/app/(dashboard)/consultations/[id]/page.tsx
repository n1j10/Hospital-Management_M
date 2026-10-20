import PageHeader from "@/components/layout/PageHeader";
import ConsultationParticipants from "@/features/consultations/components/ConsultationParticipants";
import ClinicalRecord from "@/features/consultations/components/ClinicalRecord";
import PrescriptionsCard from "@/features/consultations/components/PrescriptionsCard";
import { getConsultation } from "@/features/consultations/queries";
import { getMedicines } from "@/features/pharmacy/queries";
import { formatDate } from "@/lib/format";

export default async function ConsultationDetailPage({ params }: PageProps<"/consultations/[id]">) {
  const { id } = await params;
  const [consultation, medicines] = await Promise.all([
    getConsultation(id),
    getMedicines(),
  ]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Consultation Details"
        description={formatDate(consultation.createdAt)}
        backHref="/consultations"
      />
      <ConsultationParticipants consultation={consultation} />
      <ClinicalRecord consultation={consultation} />
      <PrescriptionsCard consultation={consultation} medicines={medicines} />
    </div>
  );
}
