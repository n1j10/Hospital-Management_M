export type { AdmissionStatus, AdmissionWithRelations } from "@/types";

export type AdmissionInput = {
  patientId: string;
  doctorId: string;
  departmentId: string;
  reason?: string;
};

export type AdmissionFilters = { search?: string; status?: string };
