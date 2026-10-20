import { ClipboardList } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
import ConsultationForm from "@/features/consultations/components/ConsultationForm";
import { getAppointmentsWithoutConsultation } from "@/features/appointments/queries";

export default async function CreateConsultationPage({ searchParams }: PageProps<"/consultations/create">) {
  const { appointmentId } = (await searchParams) as { appointmentId?: string };
  const appointments = await getAppointmentsWithoutConsultation();

  return (
    <div className="space-y-6">
      <PageHeader
        title="New Consultation"
        description="Record a consultation for a completed appointment"
        backHref="/consultations"
      />

      <FormCard
        icon={ClipboardList}
        title="Consultations"
        description="Only completed appointments without a consultation appear here. Add prescriptions after saving."
      >
        <ConsultationForm appointments={appointments} defaultAppointmentId={appointmentId} />
      </FormCard>
    </div>
  );
}
