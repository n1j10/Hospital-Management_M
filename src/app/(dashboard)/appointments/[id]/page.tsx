import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/shared/StatusBadge";
import AppointmentActions from "@/features/appointments/components/AppointmentActions";
import AppointmentInfoCards from "@/features/appointments/components/AppointmentInfoCards";
import LinkedConsultation from "@/features/appointments/components/LinkedConsultation";
import { getAppointment } from "@/features/appointments/queries";
import { formatDateTime } from "@/lib/format";

export default async function AppointmentDetailPage({ params }: PageProps<"/appointments/[id]">) {
  const { id } = await params;
  const appointment = await getAppointment(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/appointments">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">Appointment Details</h1>
            <StatusBadge status={appointment.status} />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {formatDateTime(appointment.scheduledAt)}
          </p>
        </div>
        <AppointmentActions appointment={appointment} />
      </div>

      <AppointmentInfoCards appointment={appointment} />

      {appointment.reason && (
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold mb-2">Reason for Visit</h3>
          <p className="text-muted-foreground">{appointment.reason}</p>
        </div>
      )}

      {appointment.consultation && <LinkedConsultation consultation={appointment.consultation} />}
    </div>
  );
}
