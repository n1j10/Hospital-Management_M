import PageHeader from "@/components/layout/PageHeader";
import DoctorProfileCard from "@/features/doctors/components/DoctorProfileCard";
import DoctorAppointments from "@/features/doctors/components/DoctorAppointments";
import { getDoctor } from "@/features/doctors/queries";

export default async function DoctorDetailPage({ params }: PageProps<"/doctors/[id]">) {
  const { id } = await params;
  const doctor = await getDoctor(id);

  return (
    <div className="space-y-6">
      <PageHeader title={doctor.user.name} description="Doctor Profile" backHref="/doctors" />
      <DoctorProfileCard doctor={doctor} />
      <DoctorAppointments appointments={doctor.appointments} />
    </div>
  );
}
