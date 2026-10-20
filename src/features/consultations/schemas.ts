import * as zod from "zod";

export const consultationSchema = zod.object({
  appointmentId: zod.string().min(1, { message: "Appointment is required" }),
  patientId: zod.string().min(1, { message: "Patient is required" }),
  doctorId: zod.string().min(1, { message: "Doctor is required" }),
  diagnosis: zod.string().optional(),
  notes: zod.string().optional(),
});

// The form only sends appointmentId; the backend fills patient/doctor from it.
export const consultationFormSchema = consultationSchema.pick({
  appointmentId: true,
  diagnosis: true,
  notes: true,
});

export const prescriptionItemSchema = zod.object({
  consultationId: zod.string().min(1, { message: "Consultation is required" }),
  medicineId: zod.string().min(1, { message: "Please select a medicine" }),
  quantity: zod.coerce.number().int().min(1, { message: "Quantity must be at least 1" }),
  dosage: zod.string().optional(),
});
