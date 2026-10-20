import Link from "next/link";
import { BedDouble, CalendarClock, ClipboardList } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import Pill from "@/components/shared/Pill";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
import { formatDate, formatDateTime } from "@/lib/format";
import type { PatientWithHistory } from "@/types";

const triggerClass =
  "h-9 gap-2 rounded-lg px-4 text-sm font-semibold data-active:bg-card data-active:text-teal-700 data-active:shadow-sm dark:data-active:text-teal-300";

/** Tabs: Appointments | Consultations | Admissions */
export default function PatientHistoryTabs({ patient }: { patient: PatientWithHistory }) {
  return (
    <Tabs defaultValue="appointments" className="gap-4 animate-fade-up [animation-delay:150ms]">
      <TabsList className="h-auto w-fit flex-wrap rounded-xl border border-border bg-muted/60 p-1">
        <TabsTrigger value="appointments" className={triggerClass}>
          <CalendarClock className="h-4 w-4" />
          Appointments ({patient.appointments.length})
        </TabsTrigger>
        <TabsTrigger value="consultations" className={triggerClass}>
          <ClipboardList className="h-4 w-4" />
          Consultations ({patient.consultations.length})
        </TabsTrigger>
        <TabsTrigger value="admissions" className={triggerClass}>
          <BedDouble className="h-4 w-4" />
          Admissions ({patient.admissions.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="appointments">
        <TableShell>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patient.appointments.map((apt, i) => (
                <TableRow key={apt.id} {...rowAnimation(i)}>
                  <TableCell className="font-semibold">
                    <Link href={`/appointments/${apt.id}`} className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
                      {apt.doctor.user.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{apt.department.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{formatDateTime(apt.scheduledAt)}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">{apt.reason || "—"}</TableCell>
                  <TableCell><StatusBadge status={apt.status} /></TableCell>
                </TableRow>
              ))}
              {patient.appointments.length === 0 && <EmptyRow colSpan={5}>No appointments</EmptyRow>}
            </TableBody>
          </Table>
        </TableShell>
      </TabsContent>

      <TabsContent value="consultations">
        <TableShell>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Diagnosis</TableHead>
                <TableHead>Prescriptions</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patient.consultations.map((con, i) => (
                <TableRow key={con.id} {...rowAnimation(i)}>
                  <TableCell className="font-semibold">
                    <Link href={`/consultations/${con.id}`} className="transition-colors hover:text-teal-600 dark:hover:text-teal-400">
                      {con.doctor.user.name}
                    </Link>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate text-muted-foreground">{con.diagnosis || "—"}</TableCell>
                  <TableCell>
                    <Pill tone="teal">{con.prescriptions.length} items</Pill>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(con.createdAt)}</TableCell>
                </TableRow>
              ))}
              {patient.consultations.length === 0 && <EmptyRow colSpan={4}>No consultations</EmptyRow>}
            </TableBody>
          </Table>
        </TableShell>
      </TabsContent>

      <TabsContent value="admissions">
        <TableShell>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Admit Date</TableHead>
                <TableHead>Discharge Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patient.admissions.map((adm, i) => (
                <TableRow key={adm.id} {...rowAnimation(i)}>
                  <TableCell className="font-semibold">{adm.doctor.user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{adm.department.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(adm.admitDate)}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {adm.dischargeDate ? formatDate(adm.dischargeDate) : "—"}
                  </TableCell>
                  <TableCell><StatusBadge status={adm.status} /></TableCell>
                </TableRow>
              ))}
              {patient.admissions.length === 0 && <EmptyRow colSpan={5}>No admissions</EmptyRow>}
            </TableBody>
          </Table>
        </TableShell>
      </TabsContent>
    </Tabs>
  );
}
