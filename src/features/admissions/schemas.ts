import * as zod from "zod";

export const admissionSchema = zod.object({
  patientId: zod.string().min(1, { message: "Please select a patient" }),
  doctorId: zod.string().min(1, { message: "Please select a doctor" }),
  departmentId: zod.string().min(1, { message: "Please select a department" }),
  reason: zod.string().optional(),
});
