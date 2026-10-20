import PageHeader from "@/components/layout/PageHeader";
import DepartmentDoctors from "@/features/departments/components/DepartmentDoctors";
import DepartmentAppointments from "@/features/departments/components/DepartmentAppointments";
import { getDepartment } from "@/features/departments/queries";

export default async function DepartmentDetailPage({ params }: PageProps<"/departments/[id]">) {
  const { id } = await params;
  const department = await getDepartment(id);

  return (
    <div className="space-y-6">
      <PageHeader title={department.name} description={department.description} backHref="/departments" />
      <DepartmentDoctors doctors={department.doctors} />
      <DepartmentAppointments appointments={department.appointments} />
    </div>
  );
}
