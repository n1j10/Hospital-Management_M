"use server";

import { revalidatePath } from "next/cache";
import { apiFetch, json } from "@/lib/api-client";
import { type ActionState, renderError } from "@/lib/action-utils";

/** DELETE /api/users/:id */
export async function deleteUserAction(prev: { userId: string }): Promise<ActionState> {
  try {
    await apiFetch(`/users/${encodeURIComponent(prev.userId)}`, json("DELETE"));
    revalidatePath("/admin/users");
    return { message: "User deleted" };
  } catch (error) {
    return renderError(error);
  }
}
