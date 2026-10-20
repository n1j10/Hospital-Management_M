import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { Department, DepartmentWithCounts, DepartmentWithDetails } from "@/types";

/** GET /api/departments?search= */
export function getDepartments(search?: string) {
  return apiFetch<DepartmentWithCounts[]>(`/departments${toQuery({ search })}`);
}

/** GET /api/departments/select */
export function getDepartmentsForSelect() {
  return apiFetch<Department[]>("/departments/select");
}

/** GET /api/departments/:id */
export function getDepartment(id: string) {
  return apiFetch<DepartmentWithDetails>(`/departments/${id}`);
}
