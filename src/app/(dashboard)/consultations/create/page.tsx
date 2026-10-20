import PageHeader from "@/components/layout/PageHeader";
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

      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6">
          <ConsultationForm appointments={appointments} defaultAppointmentId={appointmentId} />
        </div>
      </div>
    </div>
  );
}
