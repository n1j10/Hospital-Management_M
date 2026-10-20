import { Suspense } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import EmptyList from "@/components/shared/EmptyList";
import PrimaryLinkButton from "@/components/shared/PrimaryLinkButton";
import DepartmentCard from "@/features/departments/components/DepartmentCard";
import { getDepartments } from "@/features/departments/queries";

export default async function DepartmentsPage({ searchParams }: PageProps<"/departments">) {
  const { search } = (await searchParams) as { search?: string };
  const departments = await getDepartments(search);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Departments"
        description="Manage hospital departments"
        actions={<PrimaryLinkButton href="/departments/create">Add Department</PrimaryLinkButton>}
      />

      <Suspense>
        <SearchInput placeholder="Search departments..." />
      </Suspense>

      {departments.length === 0 ? (
        <EmptyList heading="No departments found" message="Create your first department to get started." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>
      )}
    </div>
  );
}
