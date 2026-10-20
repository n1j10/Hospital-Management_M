import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";
import FilterLinks, { statusFilterOptions } from "@/components/shared/FilterLinks";
import AppointmentsTable from "@/features/appointments/components/AppointmentsTable";
import { getAppointments } from "@/features/appointments/queries";
import type { AppointmentFilters } from "@/features/appointments/types";

const statuses = ["ALL", "PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"];

export default async function AppointmentsPage({ searchParams }: PageProps<"/appointments">) {
  const { search, status } = (await searchParams) as AppointmentFilters;
  const appointments = await getAppointments({ search, status });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointments"
        description={`${appointments.length} appointments found`}
        actions={<PrimaryLinkButton href="/appointments/create">New Appointment</PrimaryLinkButton>}
      />

      <div className="flex flex-wrap gap-3">
        <Suspense>
          <SearchInput placeholder="Search by patient or reason..." />
        </Suspense>
        <FilterLinks options={statusFilterOptions("/appointments", statuses, status)} />
      </div>

      {appointments.length === 0 ? (
        <EmptyList heading="No appointments found" />
      ) : (
        <AppointmentsTable appointments={appointments} />
      )}
    </div>
  );
}
