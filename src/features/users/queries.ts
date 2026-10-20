import "server-only";
import { apiFetch } from "@/lib/api-client";
import type { UserProfile } from "@/types";

/** GET /api/users */
export function getUsers() {
  return apiFetch<UserProfile[]>("/users");
}
