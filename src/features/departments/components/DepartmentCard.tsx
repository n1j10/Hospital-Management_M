import Link from "next/link";
import { ArrowUpRight, Building2, Users, CalendarClock } from "lucide-react";
import DeleteButton from "@/components/shared/DeleteButton";
import { deleteDepartmentAction } from "../actions";
import type { DepartmentWithCounts } from "@/types";

export default function DepartmentCard({
  department,
  style,
}: {
  department: DepartmentWithCounts;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style} className="surface lift group relative flex flex-col overflow-hidden p-6 animate-fade-up">
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-teal-500/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-teal-500/25 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <Building2 className="h-6 w-6" />
        </span>
        <DeleteButton actionFn={deleteDepartmentAction} id={department.id} idKey="departmentId" />
      </div>

      <Link href={`/departments/${department.id}`} className="relative mt-5 flex items-center gap-1.5">
        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
          {department.name}
        </h3>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
      </Link>
      <p className="relative mt-1.5 line-clamp-2 min-h-10 text-sm text-muted-foreground">
        {department.description || "No description provided."}
      </p>

      <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-border/70 pt-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-300">
            <Users className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold">{department._count.doctors}</p>
            <p className="text-[11px] text-muted-foreground">doctors</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
            <CalendarClock className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold">{department._count.appointments}</p>
            <p className="text-[11px] text-muted-foreground">appts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
