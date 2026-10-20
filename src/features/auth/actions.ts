"use server";

import { redirect } from "next/navigation";
import { apiFetch, json } from "@/lib/api-client";
import { clearAuthCookie, setAuthCookie } from "@/lib/auth";
import { type ActionState, formToObject, renderError, validateWithSchema } from "@/lib/action-utils";
import { loginSchema, registerSchema } from "./schemas";
import type { AuthResponse } from "./types";

/** POST /api/auth/login */
export async function loginAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(loginSchema, formToObject(formData));
    const { token } = await apiFetch<AuthResponse>("/auth/login", json("POST", data));
    await setAuthCookie(token);
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin");
}

/** POST /api/auth/register (ADMIN accounts are refused by the backend) */
export async function registerAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const data = validateWithSchema(registerSchema, formToObject(formData));
    const { token } = await apiFetch<AuthResponse>("/auth/register", json("POST", data));
    await setAuthCookie(token);
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin");
}

export async function logoutAction() {
  await clearAuthCookie();
  redirect("/login");
}
