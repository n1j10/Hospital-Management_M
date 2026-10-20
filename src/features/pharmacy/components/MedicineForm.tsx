import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import SubmitButton from "@/components/form/SubmitButton";
import { createMedicineAction } from "../actions";
import type { MedicineCategory } from "@/types";

export default function MedicineForm({ categories }: { categories: MedicineCategory[] }) {
  return (
    <FormContainer action={createMedicineAction}>
      <div className="space-y-5">
        <FormInput name="name" label="Medicine Name" placeholder="e.g. Amoxicillin 500mg" required />
        <FormSelect
          name="categoryId"
          label="Category"
          required
          options={categories.map((c) => ({ value: c.id, label: c.name }))}
          placeholder="Select category"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput name="quantity" label="Quantity in Stock" type="number" defaultValue="0" required />
          <FormInput name="unit" label="Unit" placeholder="e.g. tablets, vials, ml" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput name="price" label="Price (IQD)" type="number" defaultValue="0" required />
          <FormInput name="lowStockThreshold" label="Low Stock Alert Threshold" type="number" defaultValue="10" required />
        </div>
        <FormInput name="expiryDate" label="Expiry Date" type="date" required />
        <SubmitButton text="Add Medicine" />
      </div>
    </FormContainer>
  );
}
