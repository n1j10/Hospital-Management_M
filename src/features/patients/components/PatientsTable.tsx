import Link from "next/link";
import { Droplets, Phone } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import DeleteButton from "@/components/shared/DeleteButton";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import Pill from "@/components/shared/Pill";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDate, formatAge, formatGender } from "@/lib/format";
import { deletePatientAction } from "../actions";
import type { Patient } from "@/types";

export default function PatientsTable({ patients }: { patients: Patient[] }) {
  return (
    <TableShell>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Blood Type</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Registered</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient, i) => (
            <TableRow key={patient.id} {...rowAnimation(i)}>
              <TableCell>
                <Link href={`/patients/${patient.id}`} className="group flex items-center gap-3">
                  <InitialsAvatar name={patient.fullName} size="sm" />
                  <span className="font-semibold transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {patient.fullName}
                  </span>
                </Link>
              </TableCell>
              <TableCell>
                <Pill tone={patient.gender === "MALE" ? "sky" : "violet"}>{formatGender(patient.gender)}</Pill>
              </TableCell>
              <TableCell className="text-muted-foreground">
                <span className="font-semibold text-foreground">{formatAge(patient.dateOfBirth)}</span> yrs
              </TableCell>
              <TableCell>
                {patient.bloodType ? (
                  <Pill tone="rose" className="font-mono">
                    <Droplets />
                    {patient.bloodType}
                  </Pill>
                ) : (
                  <span className="text-muted-foreground text-sm">—</span>
                )}
              </TableCell>
              <TableCell className="text-muted-foreground">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <Phone className="h-3.5 w-3.5" />
                  {patient.phone}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                {formatDate(patient.createdAt)}
              </TableCell>
              <TableCell>
                <DeleteButton actionFn={deletePatientAction} id={patient.id} idKey="patientId" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableShell>
  );
}
