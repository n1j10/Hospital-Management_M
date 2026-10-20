import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/SubmitButton";
import { dischargePatientAction } from "../actions";

export default function DischargeForm({ admissionId }: { admissionId: string }) {
  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
      <h3 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Confirm Discharge</h3>
      <p className="text-sm text-muted-foreground mb-4">
        This will mark the patient as discharged and record today&apos;s date as the discharge date.
      </p>
      <FormContainer action={dischargePatientAction}>
        <input type="hidden" name="id" value={admissionId} />
        <SubmitButton
          text="Confirm Discharge"
          className="bg-amber-500 hover:bg-amber-600 text-white"
        />
      </FormContainer>
    </div>
  );
}
