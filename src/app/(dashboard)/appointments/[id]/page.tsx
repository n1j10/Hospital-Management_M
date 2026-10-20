import { CalendarClock, MessageSquareText } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
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
      <PageHeader
        backHref="/appointments"
        eyebrow="Appointment"
        title={
          <span className="flex flex-wrap items-center gap-3">
            Appointment Details
            <StatusBadge status={appointment.status} />
          </span>
        }
        description={
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-4 w-4" />
            {formatDateTime(appointment.scheduledAt)}
          </span>
        }
        actions={<AppointmentActions appointment={appointment} />}
      />

      <AppointmentInfoCards appointment={appointment} />

      {appointment.reason && (
        <div className="surface p-6 animate-fade-up [animation-delay:300ms]">
          <h3 className="flex items-center gap-2 font-bold">
            <MessageSquareText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            Reason for Visit
          </h3>
          <p className="mt-2 text-muted-foreground">{appointment.reason}</p>
        </div>
      )}

      {appointment.consultation && <LinkedConsultation consultation={appointment.consultation} />}
    </div>
  );
}
