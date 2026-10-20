import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
import { formatDateTime } from "@/lib/format";
import type { DoctorWithDetails } from "@/types";

export default function DoctorAppointments({
  appointments,
}: {
  appointments: DoctorWithDetails["appointments"];
}) {
  return (
    <TableShell title="Appointments" description={`${appointments.length} total`} icon={CalendarClock}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Scheduled</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((apt, i) => (
            <TableRow key={apt.id} {...rowAnimation(i)}>
              <TableCell>
                <Link href={`/patients/${apt.patient.id}`} className="group flex items-center gap-3 font-semibold">
                  <InitialsAvatar name={apt.patient.fullName} size="sm" />
                  <span className="transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">{apt.patient.fullName}</span>
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground">{apt.department.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{formatDateTime(apt.scheduledAt)}</TableCell>
              <TableCell><StatusBadge status={apt.status} /></TableCell>
            </TableRow>
          ))}
          {appointments.length === 0 && <EmptyRow colSpan={4}>No appointments</EmptyRow>}
        </TableBody>
      </Table>
    </TableShell>
  );
}
