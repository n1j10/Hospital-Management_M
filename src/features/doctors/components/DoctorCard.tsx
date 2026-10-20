import Link from "next/link";
import { Building2, Mail } from "lucide-react";
import DeleteButton from "@/components/shared/DeleteButton";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import Pill from "@/components/shared/Pill";
import { deleteDoctorAction } from "../actions";
import type { DoctorWithRelations } from "@/types";

export default function DoctorCard({ doctor, style }: { doctor: DoctorWithRelations; style?: React.CSSProperties }) {
  return (
    <div style={style} className="surface lift group relative overflow-hidden animate-fade-up">
      {/* cover */}
      <div className="relative h-20 bg-brand opacity-90 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-dots opacity-25" />
        <div className="absolute right-3 top-3 rounded-lg bg-white/90 dark:bg-card/90">
          <DeleteButton actionFn={deleteDoctorAction} id={doctor.id} idKey="doctorId" />
        </div>
      </div>

      <div className="relative px-5 pb-5">
        <div className="-mt-8 mb-3 w-fit rounded-full bg-card p-1 shadow-lg transition-transform duration-500 group-hover:scale-105">
          <InitialsAvatar name={doctor.user.name} size="lg" className="h-14 w-14 text-lg ring-0" />
        </div>
        <Link
          href={`/doctors/${doctor.id}`}
          className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-teal-600 dark:hover:text-teal-400"
        >
          {doctor.user.name}
        </Link>
        <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-muted-foreground">
          <Mail className="h-3.5 w-3.5 shrink-0" />
          {doctor.user.email}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill tone="sky">{doctor.specialization}</Pill>
          <Pill tone="teal">
            <Building2 />
            {doctor.department.name}
          </Pill>
        </div>
      </div>
    </div>
  );
}
