import Link from "next/link";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import DeleteButton from "@/components/shared/DeleteButton";
import { formatDateTime } from "@/lib/format";
import { deleteAppointmentAction } from "../actions";
import type { AppointmentWithRelations } from "@/types";

export default function AppointmentsTable({ appointments }: { appointments: AppointmentWithRelations[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Scheduled</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((apt) => (
            <TableRow key={apt.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link href={`/appointments/${apt.id}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {apt.patient.fullName}
                </Link>
              </TableCell>
              <TableCell>{apt.doctor.user.name}</TableCell>
              <TableCell>{apt.department.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                {formatDateTime(apt.scheduledAt)}
              </TableCell>
              <TableCell className="text-muted-foreground text-sm max-w-[150px] truncate">
                {apt.reason || "—"}
              </TableCell>
              <TableCell><StatusBadge status={apt.status} /></TableCell>
              <TableCell>
                <DeleteButton actionFn={deleteAppointmentAction} id={apt.id} idKey="appointmentId" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
