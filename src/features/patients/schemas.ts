import * as zod from "zod";

export const patientSchema = zod.object({
  fullName: zod.string().min(2, { message: "Full name must be at least 2 characters" }),
  gender: zod.enum(["MALE", "FEMALE"], { message: "Please select a gender" }),
  dateOfBirth: zod.string().min(1, { message: "Date of birth is required" }),
  phone: zod.string().min(7, { message: "Phone number must be at least 7 digits" }),
  address: zod.string().optional(),
  bloodType: zod.string().optional(),
});
