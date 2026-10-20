import { Mail, Building2, Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";
import type { DoctorWithRelations } from "@/types";

export default function DoctorProfileCard({ doctor }: { doctor: DoctorWithRelations }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xl font-bold shadow-md shadow-purple-500/20">
          {getInitials(doctor.user.name)}
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" /> {doctor.user.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4" /> {doctor.department.name}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary"><Stethoscope className="h-3 w-3 mr-1" />{doctor.specialization}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
