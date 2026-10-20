import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import { formatDateTime } from "@/lib/format";
import type { DoctorWithDetails } from "@/types";

export default function DoctorAppointments({
  appointments,
}: {
  appointments: DoctorWithDetails["appointments"];
}) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="p-6 pb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-purple-600 dark:text-purple-400" /> Appointments
        </h3>
      </div>
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
          {appointments.map((apt) => (
            <TableRow key={apt.id}>
              <TableCell className="font-medium">
                <Link href={`/patients/${apt.patient.id}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{apt.patient.fullName}</Link>
              </TableCell>
              <TableCell>{apt.department.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{formatDateTime(apt.scheduledAt)}</TableCell>
              <TableCell><StatusBadge status={apt.status} /></TableCell>
            </TableRow>
          ))}
          {appointments.length === 0 && (
            <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No appointments</TableCell></TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
