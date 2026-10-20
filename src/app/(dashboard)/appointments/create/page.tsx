import { CalendarPlus } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
import AppointmentForm from "@/features/appointments/components/AppointmentForm";
import { getPatientsForSelect } from "@/features/patients/queries";
import { getDoctorsForSelect } from "@/features/doctors/queries";
import { getDepartmentsForSelect } from "@/features/departments/queries";

export default async function CreateAppointmentPage({ searchParams }: PageProps<"/appointments/create">) {
  const { patientId } = (await searchParams) as { patientId?: string };
  const [patients, doctors, departments] = await Promise.all([
    getPatientsForSelect(),
    getDoctorsForSelect(),
    getDepartmentsForSelect(),
  ]);

  return (
    <div className="space-y-6">
      <PageHeader title="New Appointment" description="Schedule a new appointment" backHref="/appointments" />

      <FormCard
        icon={CalendarPlus}
        title="Scheduling"
        description="New appointments start as Pending — confirm or cancel them from the appointment page."
      >
        <AppointmentForm
            patients={patients}
            doctors={doctors}
            departments={departments}
            defaultPatientId={patientId}
          />
      </FormCard>
    </div>
  );
}
