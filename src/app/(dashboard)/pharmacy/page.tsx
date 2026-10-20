import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import FilterLinks from "@/components/shared/FilterLinks";
import MedicinesTable from "@/features/pharmacy/components/MedicinesTable";
import PharmacyHeaderActions from "@/features/pharmacy/components/PharmacyHeaderActions";
import PharmacyQuickLinks from "@/features/pharmacy/components/PharmacyQuickLinks";
import { getCategories, getMedicines } from "@/features/pharmacy/queries";
import { isLowStock } from "@/features/pharmacy/utils";
import type { MedicineFilters } from "@/features/pharmacy/types";

export default async function PharmacyPage({ searchParams }: PageProps<"/pharmacy">) {
  const { search, categoryId } = (await searchParams) as MedicineFilters;
  const [medicines, categories] = await Promise.all([
    getMedicines({ search, categoryId }),
    getCategories(),
  ]);

  const lowStockCount = medicines.filter(isLowStock).length;

  const categoryOptions = [
    { href: "/pharmacy", label: "All", active: !categoryId },
    ...categories.map((cat) => ({
      href: `/pharmacy?categoryId=${cat.id}`,
      label: cat.name,
      active: categoryId === cat.id,
    })),
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Inventory"
        title="Pharmacy"
        description={
          <>
            {medicines.length} medicines in inventory
            {lowStockCount > 0 && (
              <span className="ml-2 text-amber-600 dark:text-amber-400 font-medium">
                · {lowStockCount} low stock
              </span>
            )}
          </>
        }
        actions={<PharmacyHeaderActions lowStockCount={lowStockCount} />}
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between animate-fade-up [animation-delay:80ms]">
        <Suspense>
          <SearchInput placeholder="Search medicines..." />
        </Suspense>
        <FilterLinks options={categoryOptions} wrap />
      </div>

      <PharmacyQuickLinks />

      {medicines.length === 0 ? (
        <EmptyList heading="No medicines found" />
      ) : (
        <MedicinesTable medicines={medicines} />
      )}
    </div>
  );
}
