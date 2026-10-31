"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { doctorSchema } from "./schemas";

/** POST /api/doctors */
export async function createDoctorAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(doctorSchema, formToObject(formData));
    await apiFetch("/doctors", json("POST", data));
    revalidatePath("/doctors");
  } catch (error) {
    return renderError(error);
  }
  redirect("/doctors");
}

/** DELETE /api/doctors/:id */
export async function deleteDoctorAction(prev: { doctorId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/doctors/${encodeURIComponent(prev.doctorId)}`, json("DELETE"));
    revalidatePath("/doctors");
    return { message: "Doctor deleted" };
  } catch (error) {
    return renderError(error);
  }
}
