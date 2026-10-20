import * as zod from "zod";

export const appointmentSchema = zod.object({
  patientId: zod.string().min(1, { message: "Please select a patient" }),
  doctorId: zod.string().min(1, { message: "Please select a doctor" }),
  departmentId: zod.string().min(1, { message: "Please select a department" }),
  scheduledAt: zod.string().min(1, { message: "Scheduled date/time is required" }),
  reason: zod.string().optional(),
});
