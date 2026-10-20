import Link from "next/link";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import DeleteButton from "@/components/shared/DeleteButton";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDateTime } from "@/lib/format";
import { deleteAppointmentAction } from "../actions";
import type { AppointmentWithRelations } from "@/types";

export default function AppointmentsTable({ appointments }: { appointments: AppointmentWithRelations[] }) {
  return (
    <TableShell>
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
          {appointments.map((apt, i) => (
            <TableRow key={apt.id} {...rowAnimation(i)}>
              <TableCell>
                <Link href={`/appointments/${apt.id}`} className="group flex items-center gap-3">
                  <InitialsAvatar name={apt.patient.fullName} size="sm" />
                  <span className="font-semibold transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {apt.patient.fullName}
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-foreground/80">{apt.doctor.user.name}</TableCell>
              <TableCell className="text-muted-foreground">{apt.department.name}</TableCell>
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
    </TableShell>
  );
}
