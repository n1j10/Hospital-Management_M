import DashboardStats from "@/features/dashboard/components/DashboardStats";
import RecentAppointments from "@/features/dashboard/components/RecentAppointments";
import WelcomeBanner from "@/features/dashboard/components/WelcomeBanner";
import { getDashboardStats, getRecentAppointments } from "@/features/dashboard/queries";
import { requireUser } from "@/lib/auth";

export default async function AdminDashboardPage() {
  const [user, stats, recentAppointments] = await Promise.all([
    requireUser(),
    getDashboardStats(),
    getRecentAppointments(),
  ]);

  return (
    <div className="space-y-8">
      <WelcomeBanner name={user.name} todayAppointments={stats.todayAppointments} />
      <DashboardStats stats={stats} />
      <RecentAppointments appointments={recentAppointments} />
    </div>
  );
}
