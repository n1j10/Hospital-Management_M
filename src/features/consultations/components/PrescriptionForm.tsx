import FormContainer from "@/components/form/FormContainer";
import FormSelect from "@/components/form/FormSelect";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import { addPrescriptionItemAction } from "../actions";
import type { MedicineWithCategory } from "@/types";

export default function PrescriptionForm({
  consultationId,
  medicines,
}: {
  consultationId: string;
  medicines: MedicineWithCategory[];
}) {
  return (
    <div className="border-t border-border/70 bg-muted/30 p-6">
      <p className="mb-4 flex items-center gap-2 text-sm font-bold">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-500/15 text-teal-600">+</span>
        Add Prescription Item
      </p>
      <FormContainer action={addPrescriptionItemAction}>
        <input type="hidden" name="consultationId" value={consultationId} />
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 min-w-[200px]">
            <FormSelect
              name="medicineId"
              label="Medicine"
              required
              options={medicines.map((m) => ({
                value: m.id,
                label: `${m.name} (${m.quantity} ${m.unit || "units"} in stock)`,
              }))}
              placeholder="Select medicine"
            />
          </div>
          <div className="w-24">
            <FormInput name="quantity" label="Qty" type="number" defaultValue="1" required />
          </div>
          <div className="flex-1 min-w-[150px]">
            <FormInput name="dosage" label="Dosage" placeholder="e.g. 1 tablet twice daily" />
          </div>
          <div className="flex items-end">
            <SubmitButton text="Add" size="sm" variant="brand" className="h-11 min-w-0 px-5" />
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
