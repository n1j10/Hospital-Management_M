import { CalendarClock } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import { formatDateTime } from "@/lib/format";
import type { DepartmentWithDetails } from "@/types";

export default function DepartmentAppointments({
  appointments,
}: {
  appointments: DepartmentWithDetails["appointments"];
}) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="p-6 pb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          Recent Appointments
        </h3>
      </div>
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
          {appointments.map((apt) => (
            <TableRow key={apt.id}>
              <TableCell className="font-medium">{apt.patient.fullName}</TableCell>
              <TableCell>{apt.doctor.user.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {formatDateTime(apt.scheduledAt)}
              </TableCell>
              <TableCell>
                <StatusBadge status={apt.status} />
              </TableCell>
            </TableRow>
          ))}
          {appointments.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                No recent appointments
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
