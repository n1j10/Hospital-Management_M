// Safe to import anywhere (proxy, route handlers, server code).

export const AUTH_COOKIE = "auth-token";

export const ONE_WEEK = 60 * 60 * 24 * 7; // matches JWT_EXPIRES_IN=7d on the backend

/** Route prefixes that need a logged-in user (checked in src/proxy.ts). */
export const PROTECTED_ROUTES = [
  "/admin",
  "/patients",
  "/doctors",
  "/departments",
  "/appointments",
  "/consultations",
  "/admissions",
  "/pharmacy",
  "/profile",
];

export const AUTH_ROUTES = ["/login", "/register"];
