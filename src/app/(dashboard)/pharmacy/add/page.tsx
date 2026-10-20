import PageHeader from "@/components/layout/PageHeader";
import MedicineForm from "@/features/pharmacy/components/MedicineForm";
import { getCategories } from "@/features/pharmacy/queries";

export default async function AddMedicinePage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <PageHeader title="Add Medicine" description="Add a new medicine to inventory" backHref="/pharmacy" />

      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6">
          <MedicineForm categories={categories} />
        </div>
      </div>
    </div>
  );
}
