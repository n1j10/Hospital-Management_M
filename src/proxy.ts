import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, AUTH_ROUTES, PROTECTED_ROUTES } from "@/lib/constants";

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  // If user has auth token and tries to access login or register, redirect to dashboard
  if (token && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // If user is not authenticated and tries to access dashboard routes, redirect to login
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
