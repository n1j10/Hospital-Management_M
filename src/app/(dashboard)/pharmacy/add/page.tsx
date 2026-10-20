import { Pill } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FormCard from "@/components/form/FormCard";
import MedicineForm from "@/features/pharmacy/components/MedicineForm";
import { getCategories } from "@/features/pharmacy/queries";

export default async function AddMedicinePage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <PageHeader title="Add Medicine" description="Add a new medicine to inventory" backHref="/pharmacy" />

      <FormCard
        icon={Pill}
        title="Inventory"
        description="You'll get a low-stock alert when quantity drops to the threshold you set."
      >
        <MedicineForm categories={categories} />
      </FormCard>
    </div>
  );
}
