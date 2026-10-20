import { Textarea } from "@/components/ui/textarea";
import { FieldLabel, fieldClass } from "./FormInput";
import { cn } from "@/lib/utils";

function FormTextarea({
  name,
  label,
  defaultValue = "",
  placeholder,
  required = false,
  rows = 4,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={cn(fieldClass, "h-auto min-h-24 py-3")}
      />
    </div>
  );
}

export default FormTextarea;
