import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
import { formatDateTime } from "@/lib/format";
import type { AppointmentWithRelations } from "@/types";

function RecentAppointments({
  appointments,
}: {
  appointments: AppointmentWithRelations[];
}) {
  return (
    <TableShell
      title="Recent Appointments"
      description="Latest appointment activity"
      icon={CalendarClock}
      action={
        <Link href="/appointments" className="group inline-flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400">
          View all
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      }
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Scheduled</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((apt, i) => (
            <TableRow key={apt.id} {...rowAnimation(i)}>
              <TableCell>
                <Link
                  href={`/patients/${apt.patientId}`}
                  className="group flex items-center gap-3 font-semibold"
                >
                  <InitialsAvatar name={apt.patient.fullName} size="sm" />
                  <span className="transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {apt.patient.fullName}
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-foreground/80">{apt.doctor.user.name}</TableCell>
              <TableCell className="text-muted-foreground">{apt.department.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                {formatDateTime(apt.scheduledAt)}
              </TableCell>
              <TableCell>
                <StatusBadge status={apt.status} />
              </TableCell>
            </TableRow>
          ))}
          {appointments.length === 0 && <EmptyRow colSpan={5}>No recent appointments</EmptyRow>}
        </TableBody>
      </Table>
    </TableShell>
  );
}

export default RecentAppointments;
