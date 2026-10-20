import * as zod from "zod";

export const medicineSchema = zod.object({
  name: zod.string().min(2, { message: "Medicine name is required" }),
  categoryId: zod.string().min(1, { message: "Please select a category" }),
  quantity: zod.coerce.number().int().min(0, { message: "Quantity must be 0 or more" }),
  unit: zod.string().optional(),
  price: zod.coerce.number().min(0, { message: "Price must be a positive number" }),
  expiryDate: zod.string().min(1, { message: "Expiry date is required" }),
  lowStockThreshold: zod.coerce.number().int().min(0).default(10),
});

export const categorySchema = zod.object({
  name: zod.string().min(2, { message: "Category name is required" }),
});
