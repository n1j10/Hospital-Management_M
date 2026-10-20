import type { Medicine } from "@/types";

export const isLowStock = (medicine: Pick<Medicine, "quantity" | "lowStockThreshold">) =>
  medicine.quantity <= medicine.lowStockThreshold;

/** Whole days from `today` until the expiry date (0 or less = expired). */
export function daysUntil(date: string, today = new Date()) {
  return Math.ceil((new Date(date).getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}
