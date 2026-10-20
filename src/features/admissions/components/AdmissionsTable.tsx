import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import { formatDate } from "@/lib/format";
import type { AdmissionWithRelations } from "@/types";

export default function AdmissionsTable({ admissions }: { admissions: AdmissionWithRelations[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Admit Date</TableHead>
            <TableHead>Discharge Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-20">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admissions.map((adm) => (
            <TableRow key={adm.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link href={`/patients/${adm.patientId}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {adm.patient.fullName}
                </Link>
              </TableCell>
              <TableCell>{adm.doctor.user.name}</TableCell>
              <TableCell>{adm.department.name}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{formatDate(adm.admitDate)}</TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {adm.dischargeDate ? formatDate(adm.dischargeDate) : "—"}
              </TableCell>
              <TableCell><StatusBadge status={adm.status} /></TableCell>
              <TableCell>
                {adm.status === "ADMITTED" && (
                  <Link href={`/admissions/${adm.id}/discharge`}>
                    <Button size="sm" variant="outline" className="text-xs">Discharge</Button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
