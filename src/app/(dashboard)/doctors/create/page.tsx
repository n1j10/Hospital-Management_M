import { Stethoscope } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
import DoctorForm from "@/features/doctors/components/DoctorForm";
import { getDepartmentsForSelect } from "@/features/departments/queries";

export default async function CreateDoctorPage() {
  const departments = await getDepartmentsForSelect();

  return (
    <div className="space-y-6">
      <PageHeader title="Add Doctor" description="Register a new doctor in the system" backHref="/doctors" />

      <FormCard
        icon={Stethoscope}
        title="Doctor accounts"
        description="The doctor gets a login with these credentials and is assigned to the selected department."
      >
        <DoctorForm departments={departments} />
      </FormCard>
    </div>
  );
}
