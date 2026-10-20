export type {
  AppointmentForSelect,
  AppointmentStatus,
  AppointmentWithDetails,
  AppointmentWithRelations,
} from "@/types";

export type AppointmentInput = {
  patientId: string;
  doctorId: string;
  departmentId: string;
  scheduledAt: string;
  reason?: string;
};

export type AppointmentFilters = { search?: string; status?: string };
