import Link from "next/link";
import { Phone, MapPin, Droplets, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatAge, formatGender } from "@/lib/format";
import { getInitials } from "@/lib/utils";
import type { Patient } from "@/types";

export default function PatientProfileCard({ patient }: { patient: Patient }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-start gap-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-2xl font-bold shrink-0 shadow-md shadow-purple-500/20">
          {getInitials(patient.fullName)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Gender:</span>
            <Badge variant="secondary">{formatGender(patient.gender)}</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Age:</span>
            <span className="font-medium">{formatAge(patient.dateOfBirth)} years ({formatDate(patient.dateOfBirth)})</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-medium">{patient.phone}</span>
          </div>
          {patient.bloodType && (
            <div className="flex items-center gap-2 text-sm">
              <Droplets className="h-4 w-4 text-red-500" />
              <span className="text-muted-foreground">Blood Type:</span>
              <Badge variant="outline" className="font-mono text-red-600 dark:text-red-400 border-red-500/25">
                {patient.bloodType}
              </Badge>
            </div>
          )}
          {patient.address && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Address:</span>
              <span className="font-medium">{patient.address}</span>
            </div>
          )}
        </div>
        <div className="shrink-0">
          <Link href={`/appointments/create?patientId=${patient.id}`}>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
