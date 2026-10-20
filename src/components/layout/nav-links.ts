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

export const sidebarSections: { title: string; links: NavLink[] }[] = [
  {
    title: "Overview",
    links: [{ href: "/admin", name: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "People",
    links: [
      { href: "/patients", name: "Patients", icon: Users },
      { href: "/doctors", name: "Doctors", icon: Stethoscope },
      { href: "/departments", name: "Departments", icon: Building2 },
    ],
  },
  {
    title: "Clinical",
    links: [
      { href: "/appointments", name: "Appointments", icon: CalendarClock },
      { href: "/consultations", name: "Consultations", icon: ClipboardList },
      { href: "/admissions", name: "Admissions", icon: BedDouble },
    ],
  },
  {
    title: "Inventory",
    links: [{ href: "/pharmacy", name: "Pharmacy", icon: Pill }],
  },
];

export const sidebarLinks: NavLink[] = sidebarSections.flatMap((section) => section.links);
