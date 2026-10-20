import { UserPlus } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
import PatientForm from "@/features/patients/components/PatientForm";

export default function RegisterPatientPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Register Patient" description="Add a new patient to the system" backHref="/patients" />

      <FormCard
        icon={UserPlus}
        title="Patient record"
        description="Register once, then book appointments, consultations and admissions from the patient profile."
      >
        <PatientForm />
      </FormCard>
    </div>
  );
}
