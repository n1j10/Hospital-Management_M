import * as zod from "zod";

export const departmentSchema = zod.object({
  name: zod.string().min(2, { message: "Department name must be at least 2 characters" }),
  description: zod.string().optional(),
});
