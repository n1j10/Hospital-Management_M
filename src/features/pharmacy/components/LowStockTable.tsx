import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/format";
import type { MedicineWithCategory } from "@/types";

export default function LowStockTable({ medicines }: { medicines: MedicineWithCategory[] }) {
  return (
    <div className="rounded-xl border border-amber-500/20 bg-card overflow-hidden">
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
          {medicines.map((med) => (
            <TableRow key={med.id} className="bg-amber-500/5 hover:bg-amber-500/10">
              <TableCell className="font-medium">{med.name}</TableCell>
              <TableCell><Badge variant="secondary">{med.category.name}</Badge></TableCell>
              <TableCell>
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  {med.quantity} {med.unit || "units"}
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">{med.lowStockThreshold}</TableCell>
              <TableCell className="text-muted-foreground">{formatCurrency(med.price)}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-amber-600 border-amber-500/30">
                  Restock Needed
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
