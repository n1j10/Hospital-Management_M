import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { CategoryWithCount, MedicineWithCategory } from "@/types";
import type { MedicineFilters } from "./types";

/** GET /api/medicines?search=&categoryId= */
export function getMedicines(filters?: MedicineFilters) {
  return apiFetch<MedicineWithCategory[]>(`/medicines${toQuery({ ...filters })}`);
}

/** GET /api/medicines/low-stock */
export function getLowStockMedicines() {
  return apiFetch<MedicineWithCategory[]>("/medicines/low-stock");
}

/** GET /api/medicines/expiring */
export function getExpiringMedicines() {
  return apiFetch<MedicineWithCategory[]>("/medicines/expiring");
}

/** GET /api/categories */
export function getCategories() {
  return apiFetch<CategoryWithCount[]>("/categories");
}
