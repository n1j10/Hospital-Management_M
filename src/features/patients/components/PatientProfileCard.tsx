import Link from "next/link";
import { Phone, MapPin, Droplets, Calendar, User, CalendarPlus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import InfoTile from "@/components/shared/InfoTile";
import { formatDate, formatAge, formatGender } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Patient } from "@/types";

export default function PatientProfileCard({ patient }: { patient: Patient }) {
  return (
    <div className="surface relative overflow-hidden animate-scale-in">
      <div className="relative h-28 bg-brand-animated">
        <div className="absolute inset-0 bg-dots opacity-25" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl animate-blob" />
      </div>
      <div className="relative px-6 pb-6">
        <div className="-mt-12 mb-5 flex flex-wrap items-end justify-between gap-4">
          <div className="rounded-full bg-card p-1.5 shadow-xl">
            <InitialsAvatar name={patient.fullName} size="xl" className="h-20 w-20 text-2xl ring-0" />
          </div>
          <Link
            href={`/appointments/create?patientId=${patient.id}`}
            className={cn(buttonVariants({ variant: "brand" }), "h-10 rounded-xl px-4 font-semibold")}
          >
            <CalendarPlus className="h-4 w-4" />
            Book Appointment
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <InfoTile icon={User} label="Gender">{formatGender(patient.gender)}</InfoTile>
          <InfoTile icon={Calendar} label="Age">
            {formatAge(patient.dateOfBirth)} years
            <span className="ml-1 font-normal text-muted-foreground">({formatDate(patient.dateOfBirth)})</span>
          </InfoTile>
          <InfoTile icon={Phone} label="Phone">{patient.phone}</InfoTile>
          {patient.bloodType && (
            <InfoTile icon={Droplets} label="Blood Type" className="[&>span]:bg-rose-500/10 [&>span]:text-rose-600">
              <span className="font-mono text-rose-600 dark:text-rose-400">{patient.bloodType}</span>
            </InfoTile>
          )}
          {patient.address && (
            <InfoTile icon={MapPin} label="Address" className="sm:col-span-2">{patient.address}</InfoTile>
          )}
        </div>
      </div>
    </div>
  );
}
