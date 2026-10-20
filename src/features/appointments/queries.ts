import "server-only";
import { apiFetch, toQuery } from "@/lib/api-client";
import type { AppointmentForSelect, AppointmentWithDetails, AppointmentWithRelations } from "@/types";
import type { AppointmentFilters } from "./types";

/** GET /api/appointments?search=&status= */
export function getAppointments(filters?: AppointmentFilters) {
  return apiFetch<AppointmentWithRelations[]>(`/appointments${toQuery({ ...filters })}`);
}

/** GET /api/appointments/without-consultation */
export function getAppointmentsWithoutConsultation() {
  return apiFetch<AppointmentForSelect[]>("/appointments/without-consultation");
}

/** GET /api/appointments/:id */
export function getAppointment(id: string) {
  return apiFetch<AppointmentWithDetails>(`/appointments/${id}`);
}
