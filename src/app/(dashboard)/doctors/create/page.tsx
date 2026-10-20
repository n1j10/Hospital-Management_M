import PageHeader from "@/components/layout/PageHeader";
import DoctorForm from "@/features/doctors/components/DoctorForm";
import { getDepartmentsForSelect } from "@/features/departments/queries";

export default async function CreateDoctorPage() {
  const departments = await getDepartmentsForSelect();

  return (
    <div className="space-y-6">
      <PageHeader title="Add Doctor" description="Register a new doctor in the system" backHref="/doctors" />

      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6">
          <DoctorForm departments={departments} />
        </div>
      </div>
    </div>
  );
}
