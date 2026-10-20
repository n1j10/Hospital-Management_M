import { AlertTriangle } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import EmptyList from "@/components/shared/EmptyList";
import LowStockTable from "@/features/pharmacy/components/LowStockTable";
import { getLowStockMedicines } from "@/features/pharmacy/queries";

export default async function LowStockPage() {
  const medicines = await getLowStockMedicines();

  return (
    <div className="space-y-6">
      <PageHeader
        title={
          <span className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            Low Stock Medicines
          </span>
        }
        description={`${medicines.length} medicines need restocking`}
        backHref="/pharmacy"
      />

      {medicines.length === 0 ? (
        <EmptyList
          heading="No low stock medicines"
          message="All medicines are sufficiently stocked."
        />
      ) : (
        <LowStockTable medicines={medicines} />
      )}
    </div>
  );
}
