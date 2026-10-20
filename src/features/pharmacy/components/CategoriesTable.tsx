import { Pill as PillIcon, Tags } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import DeleteButton from "@/components/shared/DeleteButton";
import Pill from "@/components/shared/Pill";
import TableShell, { EmptyRow, rowAnimation } from "@/components/shared/TableShell";
import { deleteCategoryAction } from "../actions";
import type { CategoryWithCount } from "@/types";

export default function CategoriesTable({ categories }: { categories: CategoryWithCount[] }) {
  return (
    <TableShell title={`${categories.length} Categories`} icon={Tags} className="[animation-delay:200ms]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Medicines</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat, i) => (
            <TableRow key={cat.id} {...rowAnimation(i)}>
              <TableCell className="font-semibold">{cat.name}</TableCell>
              <TableCell>
                <Pill tone="teal">
                  <PillIcon />
                  {cat._count.medicines} medicines
                </Pill>
              </TableCell>
              <TableCell>
                <DeleteButton actionFn={deleteCategoryAction} id={cat.id} idKey="categoryId" />
              </TableCell>
            </TableRow>
          ))}
          {categories.length === 0 && <EmptyRow colSpan={3}>No categories yet</EmptyRow>}
        </TableBody>
      </Table>
    </TableShell>
  );
}
