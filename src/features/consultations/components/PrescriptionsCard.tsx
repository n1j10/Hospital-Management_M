import { Pill } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import RemovePrescriptionButton from "./RemovePrescriptionButton";
import PrescriptionForm from "./PrescriptionForm";
import type { ConsultationWithRelations, MedicineWithCategory } from "@/types";

export default function PrescriptionsCard({
  consultation,
  medicines,
}: {
  consultation: ConsultationWithRelations;
  medicines: MedicineWithCategory[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="p-6 pb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Pill className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          Prescriptions ({consultation.prescriptions.length})
        </h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicine</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Dosage</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consultation.prescriptions.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.medicine.name}</TableCell>
              <TableCell>
                <Badge variant="secondary">{item.medicine.unit || "—"}</Badge>
              </TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.dosage || "—"}</TableCell>
              <TableCell>
                <RemovePrescriptionButton itemId={item.id} consultationId={consultation.id} />
              </TableCell>
            </TableRow>
          ))}
          {consultation.prescriptions.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground py-8">No prescriptions yet</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <PrescriptionForm consultationId={consultation.id} medicines={medicines} />
    </div>
  );
}
