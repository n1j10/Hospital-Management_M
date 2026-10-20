import Link from "next/link";
import { Pill as PillIcon } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import Pill from "@/components/shared/Pill";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDate } from "@/lib/format";
import type { ConsultationWithRelations } from "@/types";

export default function ConsultationsTable({ consultations }: { consultations: ConsultationWithRelations[] }) {
  return (
    <TableShell>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Diagnosis</TableHead>
            <TableHead>Prescriptions</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consultations.map((con, i) => (
            <TableRow key={con.id} {...rowAnimation(i)}>
              <TableCell>
                <Link href={`/consultations/${con.id}`} className="group flex items-center gap-3">
                  <InitialsAvatar name={con.patient.fullName} size="sm" />
                  <span className="font-semibold transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {con.patient.fullName}
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-foreground/80">{con.doctor.user.name}</TableCell>
              <TableCell className="max-w-[220px] truncate text-muted-foreground text-sm">
                {con.diagnosis || "—"}
              </TableCell>
              <TableCell>
                <Pill tone="teal">
                  <PillIcon />
                  {con.prescriptions.length} items
                </Pill>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                {formatDate(con.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableShell>
  );
}
