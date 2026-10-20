import { Users, Stethoscope, Building2, CalendarClock, BedDouble, Pill } from "lucide-react";
import StatCard from "./StatCard";
import { stagger } from "@/lib/utils";
import type { DashboardStats as Stats } from "@/types";

export default function DashboardStats({ stats }: { stats: Stats }) {
  const cards = [
    { title: "Total Patients", value: stats.totalPatients, icon: Users, href: "/patients", tone: "teal" as const },
    { title: "Doctors", value: stats.totalDoctors, icon: Stethoscope, href: "/doctors", tone: "sky" as const },
    { title: "Departments", value: stats.totalDepartments, icon: Building2, href: "/departments", tone: "violet" as const },
    { title: "Today's Appts", value: stats.todayAppointments, icon: CalendarClock, href: "/appointments", tone: "emerald" as const },
    { title: "Admitted", value: stats.activeAdmissions, icon: BedDouble, href: "/admissions", tone: "rose" as const },
    { title: "Low Stock", value: stats.lowStockMedicines, icon: Pill, href: "/pharmacy/low-stock", tone: "amber" as const },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
      {cards.map((card, i) => (
        <StatCard key={card.title} {...card} style={stagger(i, 70, 150)} />
      ))}
    </div>
  );
}
