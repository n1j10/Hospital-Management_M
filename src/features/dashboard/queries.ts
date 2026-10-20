import "server-only";
import { apiFetch } from "@/lib/api-client";
import type { AppointmentWithRelations, DashboardStats, NavbarNotification } from "@/types";

/** GET /api/dashboard/stats */
export function getDashboardStats() {
  return apiFetch<DashboardStats>("/dashboard/stats");
}

/** GET /api/dashboard/notifications */
export function getNotifications() {
  return apiFetch<NavbarNotification[]>("/dashboard/notifications");
}

/** GET /api/dashboard/recent-appointments */
export function getRecentAppointments() {
  return apiFetch<AppointmentWithRelations[]>("/dashboard/recent-appointments");
}
