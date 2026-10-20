import { Users, Stethoscope, Building2, CalendarClock, BedDouble, Pill } from "lucide-react";
import StatCard from "./StatCard";
import type { DashboardStats as Stats } from "@/types";

export default function DashboardStats({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard title="Total Patients" value={stats.totalPatients} icon={Users} />
      <StatCard title="Doctors" value={stats.totalDoctors} icon={Stethoscope} />
      <StatCard title="Departments" value={stats.totalDepartments} icon={Building2} />
      <StatCard title="Today's Appts" value={stats.todayAppointments} icon={CalendarClock} />
      <StatCard title="Admitted" value={stats.activeAdmissions} icon={BedDouble} />
      <StatCard title="Low Stock" value={stats.lowStockMedicines} icon={Pill} />
    </div>
  );
}
