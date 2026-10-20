import { Suspense } from "react";
import { stagger } from "@/lib/utils";
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
        eyebrow="People"
        title="Departments"
        description="Manage hospital departments"
        actions={<PrimaryLinkButton href="/departments/create">Add Department</PrimaryLinkButton>}
      />

      <div className="animate-fade-up [animation-delay:80ms]">
      <Suspense>
        <SearchInput placeholder="Search departments..." />
      </Suspense>
      </div>

      {departments.length === 0 ? (
        <EmptyList heading="No departments found" message="Create your first department to get started." />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((dept, i) => (
            <DepartmentCard key={dept.id} department={dept} style={stagger(i, 60, 120)} />
          ))}
        </div>
      )}
    </div>
  );
}
