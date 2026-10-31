"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { admissionSchema } from "./schemas";

/** POST /api/admissions */
export async function createAdmissionAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(admissionSchema, formToObject(formData));
    await apiFetch("/admissions", json("POST", data));
    revalidatePath("/admissions");
  } catch (error) {
    return renderError(error);
  }
  redirect("/admissions");
}

/** PATCH /api/admissions/:id/discharge */
export async function dischargePatientAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const { id } = formToObject(formData);
  try {
    await apiFetch(`/admissions/${encodeURIComponent(id)}/discharge`, json("PATCH"));
    revalidatePath("/admissions");
  } catch (error) {
    return renderError(error);
  }
  redirect("/admissions");
}
