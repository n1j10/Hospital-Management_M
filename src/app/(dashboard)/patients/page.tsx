import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";
import PatientsTable from "@/features/patients/components/PatientsTable";
import { getPatients } from "@/features/patients/queries";

export default async function PatientsPage({ searchParams }: PageProps<"/patients">) {
  const { search } = (await searchParams) as { search?: string };
  const patients = await getPatients(search);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="People"
        title="Patients"
        description={`${patients.length} patients registered`}
        actions={<PrimaryLinkButton href="/patients/register">Register Patient</PrimaryLinkButton>}
      />

      <div className="animate-fade-up [animation-delay:80ms]">
      <Suspense>
        <SearchInput placeholder="Search by name or phone..." />
      </Suspense>
      </div>

      {patients.length === 0 ? (
        <EmptyList heading="No patients found" />
      ) : (
        <PatientsTable patients={patients} />
      )}
    </div>
  );
}
