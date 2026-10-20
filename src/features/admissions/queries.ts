import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { AdmissionWithRelations } from "@/types";
import type { AdmissionFilters } from "./types";

/** GET /api/admissions?search=&status= */
export function getAdmissions(filters?: AdmissionFilters) {
  return apiFetch<AdmissionWithRelations[]>(`/admissions${toQuery({ ...filters })}`);
}

/** GET /api/admissions/:id */
export function getAdmission(id: string) {
  return apiFetch<AdmissionWithRelations>(`/admissions/${id}`);
}
