export type { CategoryWithCount, MedicineCategory, MedicineWithCategory } from "@/types";

export type MedicineInput = {
  name: string;
  categoryId: string;
  quantity: number;
  unit?: string;
  price: number;
  expiryDate: string;
  lowStockThreshold?: number;
};

export type MedicineFilters = { search?: string; categoryId?: string };
