import { Pill as PillIcon } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import Pill from "@/components/shared/Pill";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
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
    <TableShell
      title={`Prescriptions (${consultation.prescriptions.length})`}
      description="Medicines prescribed in this consultation"
      icon={PillIcon}
      className="[animation-delay:350ms]"
    >
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
          {consultation.prescriptions.map((item, i) => (
            <TableRow key={item.id} {...rowAnimation(i)}>
              <TableCell className="font-semibold">{item.medicine.name}</TableCell>
              <TableCell>
                <Pill>{item.medicine.unit || "—"}</Pill>
              </TableCell>
              <TableCell className="font-semibold">×{item.quantity}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.dosage || "—"}</TableCell>
              <TableCell>
                <RemovePrescriptionButton itemId={item.id} consultationId={consultation.id} />
              </TableCell>
            </TableRow>
          ))}
          {consultation.prescriptions.length === 0 && <EmptyRow colSpan={5}>No prescriptions yet</EmptyRow>}
        </TableBody>
      </Table>

      <PrescriptionForm consultationId={consultation.id} medicines={medicines} />
    </TableShell>
  );
}
