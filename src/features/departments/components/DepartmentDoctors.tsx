import Link from "next/link";
import { Stethoscope } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import Pill from "@/components/shared/Pill";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
import type { DoctorWithUser } from "@/types";

export default function DepartmentDoctors({ doctors }: { doctors: DoctorWithUser[] }) {
  return (
    <TableShell
      title="Doctors"
      description={`${doctors.length} doctors in this department`}
      icon={Stethoscope}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Specialization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor, i) => (
            <TableRow key={doctor.id} {...rowAnimation(i)}>
              <TableCell>
                <Link href={`/doctors/${doctor.id}`} className="group flex items-center gap-3 font-semibold">
                  <InitialsAvatar name={doctor.user.name} size="sm" />
                  <span className="transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {doctor.user.name}
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-muted-foreground">{doctor.user.email}</TableCell>
              <TableCell>
                <Pill tone="sky">{doctor.specialization}</Pill>
              </TableCell>
            </TableRow>
          ))}
          {doctors.length === 0 && <EmptyRow colSpan={3}>No doctors in this department</EmptyRow>}
        </TableBody>
      </Table>
    </TableShell>
  );
}
