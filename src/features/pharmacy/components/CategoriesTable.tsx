import { Pill } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import DeleteButton from "@/components/shared/DeleteButton";
import { deleteCategoryAction } from "../actions";
import type { CategoryWithCount } from "@/types";

export default function CategoriesTable({ categories }: { categories: CategoryWithCount[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-5 pb-3">
        <h3 className="font-semibold">{categories.length} Categories</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Medicines</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat) => (
            <TableRow key={cat.id}>
              <TableCell className="font-medium">{cat.name}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Pill className="h-3 w-3 mr-1" />
                  {cat._count.medicines} medicines
                </Badge>
              </TableCell>
              <TableCell>
                <DeleteButton actionFn={deleteCategoryAction} id={cat.id} idKey="categoryId" />
              </TableCell>
            </TableRow>
          ))}
          {categories.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                No categories yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
