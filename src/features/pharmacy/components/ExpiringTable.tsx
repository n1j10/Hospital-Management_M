import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { formatDate, formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { daysUntil } from "../utils";
import type { MedicineWithCategory } from "@/types";

export default function ExpiringTable({ medicines }: { medicines: MedicineWithCategory[] }) {
  const today = new Date();

  return (
    <div className="rounded-xl border border-red-500/20 bg-card overflow-hidden">
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
          {medicines.map((med) => {
            const daysLeft = daysUntil(med.expiryDate, today);
            const isExpired = daysLeft <= 0;
            const isCritical = daysLeft <= 7 && daysLeft > 0;

            return (
              <TableRow key={med.id} className={cn(isExpired ? "bg-red-500/10" : isCritical ? "bg-orange-500/5" : "bg-amber-500/5")}>
                <TableCell className="font-medium">{med.name}</TableCell>
                <TableCell><Badge variant="secondary">{med.category.name}</Badge></TableCell>
                <TableCell className="text-muted-foreground">{med.quantity} {med.unit || "units"}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{formatDate(med.expiryDate)}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      isExpired
                        ? "text-red-600 border-red-500/30"
                        : isCritical
                          ? "text-orange-600 border-orange-500/30"
                          : "text-amber-600 border-amber-500/30"
                    )}
                  >
                    {isExpired ? "Expired" : `${daysLeft} days`}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{formatCurrency(med.price)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
