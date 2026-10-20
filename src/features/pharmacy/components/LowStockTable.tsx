import { PackageX } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import Pill from "@/components/shared/Pill";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatCurrency } from "@/lib/format";
import type { MedicineWithCategory } from "@/types";

export default function LowStockTable({ medicines }: { medicines: MedicineWithCategory[] }) {
  return (
    <TableShell className="border-amber-500/25">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Medicine</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Current Stock</TableHead>
            <TableHead>Threshold</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.map((med, i) => {
            const fill = Math.min(100, Math.round((med.quantity / Math.max(med.lowStockThreshold, 1)) * 100));
            return (
              <TableRow key={med.id} {...rowAnimation(i)}>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                      <PackageX className="h-4 w-4" />
                    </span>
                    {med.name}
                  </div>
                </TableCell>
                <TableCell><Pill>{med.category.name}</Pill></TableCell>
                <TableCell>
                  <div className="w-32">
                    <p className="text-sm font-bold text-amber-600 dark:text-amber-400">
                      {med.quantity} {med.unit || "units"}
                    </p>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-400" style={{ width: `${fill}%` }} />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{med.lowStockThreshold}</TableCell>
                <TableCell className="text-muted-foreground whitespace-nowrap">{formatCurrency(med.price)}</TableCell>
                <TableCell>
                  <Pill tone="amber">Restock Needed</Pill>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableShell>
  );
}
