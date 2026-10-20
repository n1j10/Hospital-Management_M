import * as zod from "zod";

export const doctorSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters" }),
  email: zod.string().email({ message: "Invalid email address" }),
  password: zod.string().min(6, { message: "Password must be at least 6 characters" }),
  specialization: zod.string().min(2, { message: "Specialization is required" }),
  departmentId: zod.string().min(1, { message: "Please select a department" }),
});
