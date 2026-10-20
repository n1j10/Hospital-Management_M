import { Clock } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import EmptyList from "@/components/shared/EmptyList";
import ExpiringTable from "@/features/pharmacy/components/ExpiringTable";
import { getExpiringMedicines } from "@/features/pharmacy/queries";

export default async function ExpiringPage() {
  const medicines = await getExpiringMedicines();

  return (
    <div className="space-y-6">
      <PageHeader
        title={
          <span className="flex items-center gap-3">
            <Clock className="h-9 w-9 rounded-xl bg-rose-500/15 p-2 text-rose-600 animate-float" />
            Expiring Medicines
          </span>
        }
        description={`${medicines.length} medicines expiring within 30 days`}
        backHref="/pharmacy"
      />

      {medicines.length === 0 ? (
        <EmptyList
          heading="No medicines expiring soon"
          message="All medicines are within their validity period."
        />
      ) : (
        <ExpiringTable medicines={medicines} />
      )}
    </div>
  );
}
