import PageHeader from "@/components/layout/PageHeader";
import UsersTable from "@/features/users/components/UsersTable";
import { getUsers } from "@/features/users/queries";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <PageHeader title="System Users" description={`${users.length} registered users`} />
      <UsersTable users={users} />
    </div>
  );
}
