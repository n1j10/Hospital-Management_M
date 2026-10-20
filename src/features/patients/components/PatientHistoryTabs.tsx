import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/shared/StatusBadge";
import { formatDate, formatDateTime } from "@/lib/format";
import type { PatientWithHistory } from "@/types";

/** Tabs: Appointments | Consultations | Admissions */
export default function PatientHistoryTabs({ patient }: { patient: PatientWithHistory }) {
  return (
    <Tabs defaultValue="appointments">
      <TabsList>
        <TabsTrigger value="appointments">
          Appointments ({patient.appointments.length})
        </TabsTrigger>
        <TabsTrigger value="consultations">
          Consultations ({patient.consultations.length})
        </TabsTrigger>
        <TabsTrigger value="admissions">
          Admissions ({patient.admissions.length})
        </TabsTrigger>
      </TabsList>

      {/* Appointments Tab */}
      <TabsContent value="appointments">
        <div className="rounded-xl border border-border bg-card overflow-hidden">
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
              {patient.appointments.map((apt) => (
                <TableRow key={apt.id}>
                  <TableCell className="font-medium">
                    <Link href={`/appointments/${apt.id}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {apt.doctor.user.name}
                    </Link>
                  </TableCell>
                  <TableCell>{apt.department.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDateTime(apt.scheduledAt)}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">{apt.reason || "—"}</TableCell>
                  <TableCell><StatusBadge status={apt.status} /></TableCell>
                </TableRow>
              ))}
              {patient.appointments.length === 0 && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No appointments</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      {/* Consultations Tab */}
      <TabsContent value="consultations">
        <div className="rounded-xl border border-border bg-card overflow-hidden">
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
              {patient.consultations.map((con) => (
                <TableRow key={con.id}>
                  <TableCell className="font-medium">
                    <Link href={`/consultations/${con.id}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {con.doctor.user.name}
                    </Link>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">{con.diagnosis || "—"}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{con.prescriptions.length} items</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(con.createdAt)}</TableCell>
                </TableRow>
              ))}
              {patient.consultations.length === 0 && (
                <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No consultations</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      {/* Admissions Tab */}
      <TabsContent value="admissions">
        <div className="rounded-xl border border-border bg-card overflow-hidden">
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
              {patient.admissions.map((adm) => (
                <TableRow key={adm.id}>
                  <TableCell className="font-medium">{adm.doctor.user.name}</TableCell>
                  <TableCell>{adm.department.name}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{formatDate(adm.admitDate)}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {adm.dischargeDate ? formatDate(adm.dischargeDate) : "—"}
                  </TableCell>
                  <TableCell><StatusBadge status={adm.status} /></TableCell>
                </TableRow>
              ))}
              {patient.admissions.length === 0 && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No admissions</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </Tabs>
  );
}
