import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Building2,
  CalendarClock,
  ClipboardList,
  BedDouble,
  Pill,
  type LucideIcon,
} from "lucide-react";

type NavLink = {
  href: string;
  name: string;
  icon: LucideIcon;
};

export const sidebarLinks: NavLink[] = [
  { href: "/admin", name: "Dashboard", icon: LayoutDashboard },
  { href: "/patients", name: "Patients", icon: Users },
  { href: "/doctors", name: "Doctors", icon: Stethoscope },
  { href: "/departments", name: "Departments", icon: Building2 },
  { href: "/appointments", name: "Appointments", icon: CalendarClock },
  { href: "/consultations", name: "Consultations", icon: ClipboardList },
  { href: "/admissions", name: "Admissions", icon: BedDouble },
  { href: "/pharmacy", name: "Pharmacy", icon: Pill },
];
