// Shapes of the JSON returned by the Express API.
// Dates and Decimals arrive as strings after JSON serialization.

export type Role = "ADMIN" | "RECEPTIONIST" | "DOCTOR";
export type Gender = "MALE" | "FEMALE";
export type AppointmentStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
export type AdmissionStatus = "ADMITTED" | "DISCHARGED";

// ─────────────────────── Base models ───────────────────────

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
};

export type Department = {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
};

export type Doctor = {
  id: string;
  userId: string;
  specialization: string;
  departmentId: string;
  createdAt: string;
};

export type Patient = {
  id: string;
  fullName: string;
  gender: Gender;
  dateOfBirth: string;
  phone: string;
  address: string | null;
  bloodType: string | null;
  createdAt: string;
};

export type Appointment = {
  id: string;
  patientId: string;
  doctorId: string;
  departmentId: string;
  scheduledAt: string;
  status: AppointmentStatus;
  reason: string | null;
  createdAt: string;
};

export type Consultation = {
  id: string;
  appointmentId: string;
  patientId: string;
  doctorId: string;
  diagnosis: string | null;
  notes: string | null;
  createdAt: string;
};

export type Admission = {
  id: string;
  patientId: string;
  doctorId: string;
  departmentId: string;
  admitDate: string;
  dischargeDate: string | null;
  status: AdmissionStatus;
  reason: string | null;
};

export type MedicineCategory = { id: string; name: string };

export type Medicine = {
  id: string;
  name: string;
  categoryId: string;
  quantity: number;
  unit: string | null;
  price: string | number; // Prisma Decimal → string in JSON
  expiryDate: string;
  lowStockThreshold: number;
  createdAt: string;
  updatedAt: string;
};

export type PrescriptionItem = {
  id: string;
  consultationId: string;
  medicineId: string;
  quantity: number;
  dosage: string | null;
};

// ─────────────────────── With relations ───────────────────────

export type DoctorWithUser = Doctor & { user: AuthUser };

// Doctor with user + department relations
export type DoctorWithRelations = DoctorWithUser & { department: Department };

// Logged-in user / admin users list (doctor profile when role = DOCTOR)
export type UserProfile = AuthUser & {
  doctor: (Doctor & { department: Department }) | null;
};

// Appointment with all relations
export type AppointmentWithRelations = Appointment & {
  patient: Patient;
  doctor: DoctorWithUser;
  department: Department;
};

// Completed appointments that still need a consultation
export type AppointmentForSelect = Appointment & {
  patient: Patient;
  doctor: DoctorWithUser;
};

// PrescriptionItem with medicine
export type PrescriptionItemWithMedicine = PrescriptionItem & { medicine: Medicine };

// One appointment with its consultation
export type AppointmentWithDetails = AppointmentWithRelations & {
  consultation: (Consultation & { prescriptions: PrescriptionItemWithMedicine[] }) | null;
};

// Consultation with relations
export type ConsultationWithRelations = Consultation & {
  patient: Patient;
  doctor: DoctorWithUser;
  appointment: Appointment;
  prescriptions: PrescriptionItemWithMedicine[];
};

// Admission with relations
export type AdmissionWithRelations = Admission & {
  patient: Patient;
  doctor: DoctorWithUser;
  department: Department;
};

// Medicine with category
export type MedicineWithCategory = Medicine & { category: MedicineCategory };

export type CategoryWithCount = MedicineCategory & { _count: { medicines: number } };

// Patient with full history
export type PatientWithHistory = Patient & {
  appointments: (Appointment & { doctor: DoctorWithUser; department: Department })[];
  consultations: (Consultation & {
    doctor: DoctorWithUser;
    prescriptions: PrescriptionItemWithMedicine[];
  })[];
  admissions: (Admission & { doctor: DoctorWithUser; department: Department })[];
};

// Doctor with full details
export type DoctorWithDetails = DoctorWithRelations & {
  appointments: (Appointment & { patient: Patient; department: Department })[];
};

export type DepartmentWithCounts = Department & {
  doctors: DoctorWithUser[];
  _count: { doctors: number; appointments: number };
};

export type DepartmentWithDetails = Department & {
  doctors: DoctorWithUser[];
  appointments: (Appointment & { patient: Patient; doctor: DoctorWithUser })[];
};

// Dashboard stats shape
export type DashboardStats = {
  totalPatients: number;
  totalDoctors: number;
  totalDepartments: number;
  todayAppointments: number;
  activeAdmissions: number;
  lowStockMedicines: number;
};

export type NavbarNotification = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "warning" | "info" | "success";
};
