import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { DoctorWithDetails, DoctorWithRelations } from "@/types";

/** GET /api/doctors?search= */
export function getDoctors(search?: string) {
  return apiFetch<DoctorWithRelations[]>(`/doctors${toQuery({ search })}`);
}

/** GET /api/doctors/select */
export function getDoctorsForSelect() {
  return apiFetch<DoctorWithRelations[]>("/doctors/select");
}

/** GET /api/doctors/:id */
export function getDoctor(id: string) {
  return apiFetch<DoctorWithDetails>(`/doctors/${encodeURIComponent(id)}`);
}
