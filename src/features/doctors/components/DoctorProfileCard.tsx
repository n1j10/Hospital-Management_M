import { Mail, Building2, Stethoscope, CalendarClock } from "lucide-react";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import InfoTile from "@/components/shared/InfoTile";
import type { DoctorWithDetails } from "@/types";

export default function DoctorProfileCard({ doctor }: { doctor: DoctorWithDetails }) {
  return (
    <div className="surface relative overflow-hidden animate-scale-in">
      <div className="relative h-28 bg-brand-animated">
        <div className="absolute inset-0 bg-dots opacity-25" />
        <Stethoscope className="absolute right-8 top-6 h-16 w-16 text-white/20 animate-float" />
      </div>
      <div className="relative px-6 pb-6">
        <div className="-mt-12 mb-4 w-fit rounded-full bg-card p-1.5 shadow-xl">
          <InitialsAvatar name={doctor.user.name} size="xl" className="h-20 w-20 text-2xl ring-0" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <InfoTile icon={Mail} label="Email">{doctor.user.email}</InfoTile>
          <InfoTile icon={Building2} label="Department">{doctor.department.name}</InfoTile>
          <InfoTile icon={Stethoscope} label="Specialization">{doctor.specialization}</InfoTile>
          <InfoTile icon={CalendarClock} label="Appointments">{doctor.appointments.length}</InfoTile>
        </div>
      </div>
    </div>
  );
}
