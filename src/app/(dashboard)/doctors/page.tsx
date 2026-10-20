import { Suspense } from "react";
import { stagger } from "@/lib/utils";
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
        eyebrow="People"
        title="Doctors"
        description={`${doctors.length} doctors registered`}
        actions={<PrimaryLinkButton href="/doctors/create">Add Doctor</PrimaryLinkButton>}
      />

      <div className="animate-fade-up [animation-delay:80ms]">
      <Suspense>
        <SearchInput placeholder="Search by name or specialization..." />
      </Suspense>
      </div>

      {doctors.length === 0 ? (
        <EmptyList heading="No doctors found" />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.id} doctor={doctor} style={stagger(i, 60, 120)} />
          ))}
        </div>
      )}
    </div>
  );
}
