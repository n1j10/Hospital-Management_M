// The Express backend owns users and JWTs. The frontend only stores the
// token in the "auth-token" cookie and asks GET /api/auth/me who it belongs to.

import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ApiError, apiFetch } from "./api-client";
import { AUTH_COOKIE, ONE_WEEK } from "./constants";
import type { UserProfile } from "@/types";

export type AuthPayload = {
  userId: string;
  email: string;
  role: string;
  name: string;
};

/** Save the token returned by /auth/login or /auth/register (Server Functions only). */
export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ONE_WEEK,
  });
}

/** Remove the token (Server Functions / Route Handlers only). */
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
}

/**
 * The logged-in user's full profile, or null if there is no valid token.
 * Cached per request so the layout and pages share one /auth/me call.
 */
export const getCurrentUser = cache(async (): Promise<UserProfile | null> => {
  const cookieStore = await cookies();
  if (!cookieStore.get(AUTH_COOKIE)) return null;

  try {
    return await apiFetch<UserProfile>("/auth/me");
  } catch (error) {
    if (error instanceof ApiError && (error.status === 401 || error.status === 404)) {
      return null;
    }
    throw error;
  }
});

/** The small user shape the navbar uses. */
export function toAuthPayload(user: UserProfile): AuthPayload {
  return { userId: user.id, email: user.email, role: user.role, name: user.name };
}

/**
 * For pages: returns the user or sends them to /logout, which clears the
 * stale cookie (a redirect straight to /login would bounce back to /admin
 * because proxy.ts still sees the cookie).
 */
export async function requireUser(): Promise<UserProfile> {
  const user = await getCurrentUser();
  if (!user) redirect("/logout");
  return user;
}
