import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import { createCategoryAction } from "../actions";

export default function CategoryForm() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-semibold mb-4">Add New Category</h3>
      <FormContainer action={createCategoryAction}>
        <div className="space-y-4">
          <FormInput name="name" label="Category Name" placeholder="e.g. Antibiotics" required />
          <SubmitButton text="Add Category" />
        </div>
      </FormContainer>
    </div>
  );
}
