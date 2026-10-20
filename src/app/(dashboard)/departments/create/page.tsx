import { Building2 } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
import DepartmentForm from "@/features/departments/components/DepartmentForm";

export default function CreateDepartmentPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New Department" description="Create a new hospital department" backHref="/departments" />

      <FormCard
        icon={Building2}
        title="Departments"
        description="Group doctors and appointments under a clinical unit like Cardiology or Pediatrics."
      >
        <DepartmentForm />
      </FormCard>
    </div>
  );
}
