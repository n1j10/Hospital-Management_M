import PageHeader from "@/components/layout/PageHeader";
import AdmissionForm from "@/features/admissions/components/AdmissionForm";
import { getPatientsForSelect } from "@/features/patients/queries";
import { getDoctorsForSelect } from "@/features/doctors/queries";
import { getDepartmentsForSelect } from "@/features/departments/queries";

export default async function CreateAdmissionPage() {
  const [patients, doctors, departments] = await Promise.all([
    getPatientsForSelect(),
    getDoctorsForSelect(),
    getDepartmentsForSelect(),
  ]);

  return (
    <div className="space-y-6">
      <PageHeader title="Admit Patient" description="Register a new patient admission" backHref="/admissions" />

      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6">
          <AdmissionForm patients={patients} doctors={doctors} departments={departments} />
        </div>
      </div>
    </div>
  );
}
