import PageHeader from "@/components/layout/PageHeader";
import DashboardStats from "@/features/dashboard/components/DashboardStats";
import QuickActions from "@/features/dashboard/components/QuickActions";
import RecentAppointments from "@/features/dashboard/components/RecentAppointments";
import { getDashboardStats, getRecentAppointments } from "@/features/dashboard/queries";

export default async function AdminDashboardPage() {
  const [stats, recentAppointments] = await Promise.all([
    getDashboardStats(),
    getRecentAppointments(),
  ]);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Overview of your hospital operations"
        actions={<QuickActions />}
      />
      <DashboardStats stats={stats} />
      <RecentAppointments appointments={recentAppointments} />
    </div>
  );
}
