"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { categorySchema, medicineSchema } from "./schemas";

/** POST /api/medicines */
export async function createMedicineAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(medicineSchema, formToObject(formData));
    await apiFetch("/medicines", json("POST", data));
    revalidatePath("/pharmacy");
  } catch (error) {
    return renderError(error);
  }
  redirect("/pharmacy");
}

/** DELETE /api/medicines/:id */
export async function deleteMedicineAction(prev: { medicineId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/medicines/${encodeURIComponent(prev.medicineId)}`, json("DELETE"));
    revalidatePath("/pharmacy");
    return { message: "Medicine deleted" };
  } catch (error) {
    return renderError(error);
  }
}

/** POST /api/categories */
export async function createCategoryAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(categorySchema, formToObject(formData));
    await apiFetch("/categories", json("POST", data));
    revalidatePath("/pharmacy/categories");
    return { message: "Category created" };
  } catch (error) {
    return renderError(error);
  }
}

/** DELETE /api/categories/:id */
export async function deleteCategoryAction(prev: { categoryId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/categories/${encodeURIComponent(prev.categoryId)}`, json("DELETE"));
    revalidatePath("/pharmacy/categories");
    return { message: "Category deleted" };
  } catch (error) {
    return renderError(error);
  }
}
