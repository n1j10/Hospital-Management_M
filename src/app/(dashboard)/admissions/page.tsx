import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";
import FilterLinks, { statusFilterOptions } from "@/components/shared/FilterLinks";
import AdmissionsTable from "@/features/admissions/components/AdmissionsTable";
import { getAdmissions } from "@/features/admissions/queries";
import type { AdmissionFilters } from "@/features/admissions/types";

const statuses = ["ALL", "ADMITTED", "DISCHARGED"];

export default async function AdmissionsPage({ searchParams }: PageProps<"/admissions">) {
  const { search, status } = (await searchParams) as AdmissionFilters;
  const admissions = await getAdmissions({ search, status });

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Clinical"
        title="Admissions"
        description={`${admissions.filter((a) => a.status === "ADMITTED").length} currently admitted`}
        actions={<PrimaryLinkButton href="/admissions/create">Admit Patient</PrimaryLinkButton>}
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between animate-fade-up [animation-delay:80ms]">
        <Suspense>
          <SearchInput placeholder="Search by patient name..." />
        </Suspense>
        <FilterLinks options={statusFilterOptions("/admissions", statuses, status)} />
      </div>

      {admissions.length === 0 ? (
        <EmptyList heading="No admissions found" />
      ) : (
        <AdmissionsTable admissions={admissions} />
      )}
    </div>
  );
}
