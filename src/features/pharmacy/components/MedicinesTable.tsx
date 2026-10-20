import { Pill as PillIcon, TriangleAlert } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import DeleteButton from "@/components/shared/DeleteButton";
import Pill from "@/components/shared/Pill";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDate, formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { deleteMedicineAction } from "../actions";
import { isLowStock } from "../utils";
import type { MedicineWithCategory } from "@/types";

export default function MedicinesTable({ medicines }: { medicines: MedicineWithCategory[] }) {
  return (
    <TableShell>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicine</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.map((med, i) => {
            const lowStock = isLowStock(med);
            const fill = Math.min(100, Math.round((med.quantity / Math.max(med.lowStockThreshold * 3, 1)) * 100));
            const anim = rowAnimation(i);
            return (
              <TableRow key={med.id} style={anim.style} className={cn(anim.className, lowStock && "bg-amber-500/[0.04]")}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", lowStock ? "bg-amber-500/15 text-amber-600" : "bg-teal-500/10 text-teal-600 dark:text-teal-300")}>
                      <PillIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold">{med.name}</p>
                      {lowStock && (
                        <p className="flex items-center gap-1 text-[11px] font-semibold text-amber-600">
                          <TriangleAlert className="h-3 w-3" /> Low Stock
                        </p>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Pill>{med.category.name}</Pill>
                </TableCell>
                <TableCell>
                  <div className="w-32">
                    <p className={cn("text-sm font-semibold", lowStock ? "text-amber-600 dark:text-amber-400" : "")}>
                      {med.quantity} <span className="font-normal text-muted-foreground">{med.unit || "units"}</span>
                    </p>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn("h-full rounded-full", lowStock ? "bg-gradient-to-r from-amber-400 to-orange-500" : "bg-brand")}
                        style={{ width: `${fill}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-foreground/80 whitespace-nowrap">{formatCurrency(med.price)}</TableCell>
                <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{formatDate(med.expiryDate)}</TableCell>
                <TableCell>
                  <DeleteButton actionFn={deleteMedicineAction} id={med.id} idKey="medicineId" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableShell>
  );
}
