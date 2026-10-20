import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import type { DoctorWithUser } from "@/types";

export default function DepartmentDoctors({ doctors }: { doctors: DoctorWithUser[] }) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="p-6 pb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Doctors
          </h3>
          <p className="text-sm text-muted-foreground">
            {doctors.length} doctors in this department
          </p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Specialization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell className="font-medium">
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {doctor.user.name}
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground">{doctor.user.email}</TableCell>
              <TableCell>
                <Badge variant="secondary">{doctor.specialization}</Badge>
              </TableCell>
            </TableRow>
          ))}
          {doctors.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                No doctors in this department
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
