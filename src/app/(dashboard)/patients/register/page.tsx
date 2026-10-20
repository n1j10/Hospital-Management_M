import PageHeader from "@/components/layout/PageHeader";
import PatientForm from "@/features/patients/components/PatientForm";

export default function RegisterPatientPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Register Patient" description="Add a new patient to the system" backHref="/patients" />

      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6">
          <PatientForm />
        </div>
      </div>
    </div>
  );
}
