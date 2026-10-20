import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import DeleteButton from "@/components/shared/DeleteButton";
import { formatDate, formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { deleteMedicineAction } from "../actions";
import { isLowStock } from "../utils";
import type { MedicineWithCategory } from "@/types";

export default function MedicinesTable({ medicines }: { medicines: MedicineWithCategory[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicine</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.map((med) => {
            const lowStock = isLowStock(med);
            return (
              <TableRow key={med.id} className={cn("hover:bg-muted/50", lowStock && "bg-amber-500/5")}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {med.name}
                    {lowStock && (
                      <Badge variant="outline" className="text-amber-600 border-amber-500/30 text-xs">
                        Low Stock
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{med.category.name}</Badge>
                </TableCell>
                <TableCell>
                  <span className={cn("font-medium", lowStock ? "text-amber-600 dark:text-amber-400" : "")}>
                    {med.quantity} {med.unit || "units"}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">{formatCurrency(med.price)}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{formatDate(med.expiryDate)}</TableCell>
                <TableCell>
                  <DeleteButton actionFn={deleteMedicineAction} id={med.id} idKey="medicineId" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
