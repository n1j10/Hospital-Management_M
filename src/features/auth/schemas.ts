import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod.string().email({ message: "Invalid email address" }),
  password: zod.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const registerSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters" }),
  email: zod.string().email({ message: "Invalid email address" }),
  password: zod.string().min(6, { message: "Password must be at least 6 characters" }),
  role: zod.enum(["ADMIN", "RECEPTIONIST", "DOCTOR"], {
    message: "Please select a valid role",
  }),
});
