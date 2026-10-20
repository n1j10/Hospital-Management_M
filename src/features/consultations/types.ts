export type { ConsultationWithRelations, PrescriptionItemWithMedicine } from "@/types";

export type ConsultationInput = {
  appointmentId: string;
  // Optional: the backend takes them from the appointment when missing.
  patientId?: string;
  doctorId?: string;
  diagnosis?: string;
  notes?: string;
};

export type PrescriptionInput = {
  consultationId: string;
  medicineId: string;
  quantity: number;
  dosage?: string;
};
