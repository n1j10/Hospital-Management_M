import Link from "next/link";
import { LogOut } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDate } from "@/lib/format";
import type { AdmissionWithRelations } from "@/types";

export default function AdmissionsTable({ admissions }: { admissions: AdmissionWithRelations[] }) {
  return (
    <TableShell>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Admit Date</TableHead>
            <TableHead>Discharge Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admissions.map((adm, i) => (
            <TableRow key={adm.id} {...rowAnimation(i)}>
              <TableCell>
                <Link href={`/patients/${adm.patientId}`} className="group flex items-center gap-3">
                  <InitialsAvatar name={adm.patient.fullName} size="sm" />
                  <span className="font-semibold transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {adm.patient.fullName}
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-foreground/80">{adm.doctor.user.name}</TableCell>
              <TableCell className="text-muted-foreground">{adm.department.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{formatDate(adm.admitDate)}</TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                {adm.dischargeDate ? formatDate(adm.dischargeDate) : "—"}
              </TableCell>
              <TableCell><StatusBadge status={adm.status} /></TableCell>
              <TableCell>
                {adm.status === "ADMITTED" && (
                  <Link
                    href={`/admissions/${adm.id}/discharge`}
                    className="group inline-flex h-8 items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 text-xs font-semibold text-amber-700 transition-all hover:bg-amber-500 hover:text-white dark:text-amber-300"
                  >
                    <LogOut className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    Discharge
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableShell>
  );
}
