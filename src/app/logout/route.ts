// Clears a stale/expired auth cookie and goes to /login.
// Pages redirect here (instead of /login) when the backend says 401,
// otherwise proxy.ts would see the cookie and bounce back to /admin.

import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/lib/constants";

export function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/login", req.url));
  res.cookies.delete(AUTH_COOKIE);
  return res;
}
