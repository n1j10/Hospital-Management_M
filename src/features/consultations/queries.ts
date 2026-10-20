import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { ConsultationWithRelations } from "@/types";

/** GET /api/consultations?search= */
export function getConsultations(search?: string) {
  return apiFetch<ConsultationWithRelations[]>(`/consultations${toQuery({ search })}`);
}

/** GET /api/consultations/:id */
export function getConsultation(id: string) {
  return apiFetch<ConsultationWithRelations>(`/consultations/${id}`);
}
