import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/format";
import type { ConsultationWithRelations } from "@/types";

export default function ConsultationsTable({ consultations }: { consultations: ConsultationWithRelations[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
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
          {consultations.map((con) => (
            <TableRow key={con.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link href={`/consultations/${con.id}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {con.patient.fullName}
                </Link>
              </TableCell>
              <TableCell>{con.doctor.user.name}</TableCell>
              <TableCell className="max-w-[200px] truncate text-muted-foreground text-sm">
                {con.diagnosis || "—"}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{con.prescriptions.length} items</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {formatDate(con.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
