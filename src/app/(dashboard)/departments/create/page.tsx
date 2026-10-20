import PageHeader from "@/components/layout/PageHeader";
import DepartmentForm from "@/features/departments/components/DepartmentForm";

export default function CreateDepartmentPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New Department" description="Create a new hospital department" backHref="/departments" />

      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6">
          <DepartmentForm />
        </div>
      </div>
    </div>
  );
}
