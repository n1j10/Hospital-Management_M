import PageHeader from "@/components/layout/PageHeader";
import PatientProfileCard from "@/features/patients/components/PatientProfileCard";
import PatientHistoryTabs from "@/features/patients/components/PatientHistoryTabs";
import { getPatient } from "@/features/patients/queries";

export default async function PatientDetailPage({ params }: PageProps<"/patients/[id]">) {
  const { id } = await params;
  const patient = await getPatient(id);

  return (
    <div className="space-y-6">
      <PageHeader title={patient.fullName} description="Patient Profile" backHref="/patients" />
      <PatientProfileCard patient={patient} />
      <PatientHistoryTabs patient={patient} />
    </div>
  );
}
