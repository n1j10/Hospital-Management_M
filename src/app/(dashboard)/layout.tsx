import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { requireUser, toAuthPayload } from "@/lib/auth";
import { getNotifications } from "@/features/dashboard/queries";

export default async function DashboardLayout({ children }: LayoutProps<"/">) {
  const user = toAuthPayload(await requireUser());
  const notifications = await getNotifications().catch(() => []);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar user={user} notifications={notifications} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
