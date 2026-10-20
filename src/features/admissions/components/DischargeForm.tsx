import { TriangleAlert } from "lucide-react";
import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/SubmitButton";
import { dischargePatientAction } from "../actions";

export default function DischargeForm({ admissionId }: { admissionId: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-6 animate-fade-up [animation-delay:200ms]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/15 blur-2xl animate-blob" />
      <div className="relative flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
          <TriangleAlert className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <h3 className="font-bold text-amber-800 dark:text-amber-300">Confirm Discharge</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            This will mark the patient as discharged and record today&apos;s date as the discharge date.
          </p>
          <FormContainer action={dischargePatientAction}>
            <input type="hidden" name="id" value={admissionId} />
            <SubmitButton
              text="Confirm Discharge"
              variant="default"
              className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:brightness-110"
            />
          </FormContainer>
        </div>
      </div>
    </div>
  );
}
