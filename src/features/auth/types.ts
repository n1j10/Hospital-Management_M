import type { AuthUser } from "@/types";

export type AuthResponse = { token: string; user: AuthUser };

export type LoginInput = { email: string; password: string };

export type RegisterInput = { name: string; email: string; password: string; role: string };
