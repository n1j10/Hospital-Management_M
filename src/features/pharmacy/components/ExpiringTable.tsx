import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import Pill, { type PillTone } from "@/components/shared/Pill";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDate, formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { daysUntil } from "../utils";
import type { MedicineWithCategory } from "@/types";

export default function ExpiringTable({ medicines }: { medicines: MedicineWithCategory[] }) {
  const today = new Date();

  return (
    <TableShell className="border-rose-500/20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicine</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Days Left</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.map((med, i) => {
            const daysLeft = daysUntil(med.expiryDate, today);
            const isExpired = daysLeft <= 0;
            const isCritical = daysLeft <= 7 && daysLeft > 0;
            const tone: PillTone = isExpired ? "rose" : isCritical ? "amber" : "sky";
            const anim = rowAnimation(i);

            return (
              <TableRow key={med.id} style={anim.style} className={cn(anim.className, isExpired && "bg-rose-500/[0.05]")}>
                <TableCell className="font-semibold">{med.name}</TableCell>
                <TableCell><Pill>{med.category.name}</Pill></TableCell>
                <TableCell className="text-muted-foreground">{med.quantity} {med.unit || "units"}</TableCell>
                <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{formatDate(med.expiryDate)}</TableCell>
                <TableCell>
                  <Pill tone={tone}>
                    {(isExpired || isCritical) && (
                      <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", isExpired ? "bg-rose-500" : "bg-amber-500")} />
                    )}
                    {isExpired ? "Expired" : `${daysLeft} days`}
                  </Pill>
                </TableCell>
                <TableCell className="text-muted-foreground whitespace-nowrap">{formatCurrency(med.price)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableShell>
  );
}
