"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { appointmentSchema } from "./schemas";

/** POST /api/appointments */
export async function createAppointmentAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(appointmentSchema, formToObject(formData));
    await apiFetch("/appointments", json("POST", data));
    revalidatePath("/appointments");
  } catch (error) {
    return renderError(error);
  }
  redirect("/appointments");
}

/** PATCH /api/appointments/:id/status */
export async function updateAppointmentStatusAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const { id, status } = formToObject(formData);
  try {
    await apiFetch(`/appointments/${id}/status`, json("PATCH", { status }));
    revalidatePath(`/appointments/${id}`);
    revalidatePath("/appointments");
    return { message: `Appointment marked as ${status.toLowerCase()}` };
  } catch (error) {
    return renderError(error);
  }
}

/** DELETE /api/appointments/:id */
export async function deleteAppointmentAction(prev: { appointmentId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/appointments/${prev.appointmentId}`, json("DELETE"));
    revalidatePath("/appointments");
    return { message: "Appointment deleted" };
  } catch (error) {
    return renderError(error);
  }
}
