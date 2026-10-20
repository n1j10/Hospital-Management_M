import { BedDouble } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
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

      <FormCard
        icon={BedDouble}
        title="Admissions"
        description="Admitted patients stay on the admissions board until they are discharged."
      >
        <AdmissionForm patients={patients} doctors={doctors} departments={departments} />
      </FormCard>
    </div>
  );
}
