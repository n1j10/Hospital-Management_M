import { CalendarClock } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
import { formatDateTime } from "@/lib/format";
import type { DepartmentWithDetails } from "@/types";

export default function DepartmentAppointments({
  appointments,
}: {
  appointments: DepartmentWithDetails["appointments"];
}) {
  return (
    <TableShell title="Recent Appointments" icon={CalendarClock}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Scheduled</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((apt, i) => (
            <TableRow key={apt.id} {...rowAnimation(i)}>
              <TableCell>
                <div className="flex items-center gap-3 font-semibold">
                  <InitialsAvatar name={apt.patient.fullName} size="sm" />
                  {apt.patient.fullName}
                </div>
              </TableCell>
              <TableCell className="text-foreground/80">{apt.doctor.user.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                {formatDateTime(apt.scheduledAt)}
              </TableCell>
              <TableCell>
                <StatusBadge status={apt.status} />
              </TableCell>
            </TableRow>
          ))}
          {appointments.length === 0 && <EmptyRow colSpan={4}>No recent appointments</EmptyRow>}
        </TableBody>
      </Table>
    </TableShell>
  );
}
