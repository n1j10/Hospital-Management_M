"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { patientSchema } from "./schemas";

/** POST /api/patients */
export async function createPatientAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(patientSchema, formToObject(formData));
    await apiFetch("/patients", json("POST", data));
    revalidatePath("/patients");
  } catch (error) {
    return renderError(error);
  }
  redirect("/patients");
}

/** DELETE /api/patients/:id */
export async function deletePatientAction(prev: { patientId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/patients/${encodeURIComponent(prev.patientId)}`, json("DELETE"));
    revalidatePath("/patients");
    return { message: "Patient deleted" };
  } catch (error) {
    return renderError(error);
  }
}
