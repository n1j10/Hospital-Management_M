// The shared fetch wrapper used by every features/*/queries.ts and actions.ts.
// Runs on the server only (reads the auth-token cookie).

import "server-only";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "./constants";

const API_BASE =
  process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

/** Error thrown for any non-2xx response, keeps the HTTP status. */
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/** Build "?a=1&b=2" from an object, skipping empty values and "ALL". */
export function toQuery(params: Record<string, string | undefined>) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value && value !== "ALL") search.set(key, value);
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

/** A thin wrapper around fetch that adds the token and throws on non-2xx. */
export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;

  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers ?? {}),
      },
      cache: "no-store", // always fresh data
    });
  } catch {
    throw new ApiError(503, "Cannot reach the server. Is the backend running?");
  }

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    throw new ApiError(res.status, body?.message || `API error ${res.status}`);
  }

  return (body?.data !== undefined ? body.data : body) as T;
}

/** JSON body helper: apiFetch(path, json("POST", data)). */
export function json(method: string, data?: unknown): RequestInit {
  return { method, body: data === undefined ? undefined : JSON.stringify(data) };
}
