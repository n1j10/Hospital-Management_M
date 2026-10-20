import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";
import DoctorCard from "@/features/doctors/components/DoctorCard";
import { getDoctors } from "@/features/doctors/queries";

export default async function DoctorsPage({ searchParams }: PageProps<"/doctors">) {
  const { search } = (await searchParams) as { search?: string };
  const doctors = await getDoctors(search);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Doctors"
        description={`${doctors.length} doctors registered`}
        actions={<PrimaryLinkButton href="/doctors/create">Add Doctor</PrimaryLinkButton>}
      />

      <Suspense>
        <SearchInput placeholder="Search by name or specialization..." />
      </Suspense>

      {doctors.length === 0 ? (
        <EmptyList heading="No doctors found" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}
