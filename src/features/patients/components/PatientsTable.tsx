import Link from "next/link";
import { Phone } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import DeleteButton from "@/components/shared/DeleteButton";
import { formatDate, formatAge, formatGender } from "@/lib/format";
import { deletePatientAction } from "../actions";
import type { Patient } from "@/types";

export default function PatientsTable({ patients }: { patients: Patient[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Blood Type</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Registered</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link
                  href={`/patients/${patient.id}`}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {patient.fullName}
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant={patient.gender === "MALE" ? "secondary" : "outline"}>
                  {formatGender(patient.gender)}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatAge(patient.dateOfBirth)} yrs
              </TableCell>
              <TableCell>
                {patient.bloodType ? (
                  <Badge variant="outline" className="font-mono text-red-700 dark:text-red-400 border-red-500/25">
                    {patient.bloodType}
                  </Badge>
                ) : (
                  <span className="text-muted-foreground text-sm">—</span>
                )}
              </TableCell>
              <TableCell className="text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" />
                  {patient.phone}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {formatDate(patient.createdAt)}
              </TableCell>
              <TableCell>
                <DeleteButton
                  actionFn={deletePatientAction}
                  id={patient.id}
                  idKey="patientId"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
