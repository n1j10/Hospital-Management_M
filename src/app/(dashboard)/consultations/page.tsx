import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";
import ConsultationsTable from "@/features/consultations/components/ConsultationsTable";
import { getConsultations } from "@/features/consultations/queries";

export default async function ConsultationsPage({ searchParams }: PageProps<"/consultations">) {
  const { search } = (await searchParams) as { search?: string };
  const consultations = await getConsultations(search);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Clinical"
        title="Consultations"
        description={`${consultations.length} consultations recorded`}
        actions={<PrimaryLinkButton href="/consultations/create">New Consultation</PrimaryLinkButton>}
      />

      <div className="animate-fade-up [animation-delay:80ms]">
      <Suspense>
        <SearchInput placeholder="Search by patient or diagnosis..." />
      </Suspense>
      </div>

      {consultations.length === 0 ? (
        <EmptyList heading="No consultations found" />
      ) : (
        <ConsultationsTable consultations={consultations} />
      )}
    </div>
  );
}
