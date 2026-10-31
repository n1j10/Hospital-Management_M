"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { departmentSchema } from "./schemas";

/** POST /api/departments */
export async function createDepartmentAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(departmentSchema, formToObject(formData));
    await apiFetch("/departments", json("POST", data));
    revalidatePath("/departments");
  } catch (error) {
    return renderError(error);
  }
  redirect("/departments");
}

/** DELETE /api/departments/:id */
export async function deleteDepartmentAction(prev: { departmentId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/departments/${encodeURIComponent(prev.departmentId)}`, json("DELETE"));
    revalidatePath("/departments");
    return { message: "Department deleted" };
  } catch (error) {
    return renderError(error);
  }
}
