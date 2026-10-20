import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { Patient, PatientWithHistory } from "@/types";

/** GET /api/patients?search= */
export function getPatients(search?: string) {
  return apiFetch<Patient[]>(`/patients${toQuery({ search })}`);
}

/** GET /api/patients/select */
export function getPatientsForSelect() {
  return apiFetch<Patient[]>("/patients/select");
}

/** GET /api/patients/:id */
export function getPatient(id: string) {
  return apiFetch<PatientWithHistory>(`/patients/${id}`);
}
