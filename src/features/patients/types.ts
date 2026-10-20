export type { Patient, PatientWithHistory } from "@/types";

export type PatientInput = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  address?: string;
  bloodType?: string;
};
