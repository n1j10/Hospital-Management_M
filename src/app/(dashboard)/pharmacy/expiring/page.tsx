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
          <span className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-red-500" />
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
