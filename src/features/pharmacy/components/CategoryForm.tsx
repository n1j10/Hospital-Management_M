import { Tags } from "lucide-react";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import { createCategoryAction } from "../actions";

export default function CategoryForm() {
  return (
    <div className="surface relative h-fit overflow-hidden animate-fade-up [animation-delay:100ms]">
      <div className="h-1.5 bg-brand-animated" />
      <div className="p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-teal-500/20 animate-float">
            <Tags className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-bold">Add New Category</h3>
            <p className="text-xs text-muted-foreground">Group medicines for faster browsing</p>
          </div>
        </div>
        <FormContainer action={createCategoryAction}>
          <div className="space-y-5">
            <FormInput name="name" label="Category Name" placeholder="e.g. Antibiotics" required />
            <SubmitButton text="Add Category" className="w-full" />
          </div>
        </FormContainer>
      </div>
    </div>
  );
}
