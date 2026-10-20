export type { DoctorWithDetails, DoctorWithRelations } from "@/types";

export type DoctorInput = {
  name: string;
  email: string;
  password: string;
  specialization: string;
  departmentId: string;
};
