"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { consultationFormSchema, prescriptionItemSchema } from "./schemas";
import type { ConsultationWithRelations } from "@/types";

/** POST /api/consultations */
export async function createConsultationAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  let id: string;
  try {
    const data = validateWithSchema(consultationFormSchema, formToObject(formData));
    const consultation = await apiFetch<ConsultationWithRelations>("/consultations", json("POST", data));
    id = consultation.id;
    revalidatePath("/consultations");
  } catch (error) {
    return renderError(error);
  }
  redirect(`/consultations/${id}`);
}

/** POST /api/prescriptions */
export async function addPrescriptionItemAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(prescriptionItemSchema, formToObject(formData));
    await apiFetch("/prescriptions", json("POST", data));
    revalidatePath(`/consultations/${data.consultationId}`);
    return { message: "Medicine added to prescription" };
  } catch (error) {
    return renderError(error);
  }
}

/** DELETE /api/prescriptions/:id */
export async function removePrescriptionItemAction(prev: {
  itemId: string;
  consultationId: string;
}): Promise<ActionState> {
  try {
    await apiFetch(`/prescriptions/${prev.itemId}`, json("DELETE"));
    revalidatePath(`/consultations/${prev.consultationId}`);
    return { message: "Medicine removed from prescription" };
  } catch (error) {
    return renderError(error);
  }
}
