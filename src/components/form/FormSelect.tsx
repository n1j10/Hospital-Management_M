import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldLabel, fieldClass } from "./FormInput";
import { cn } from "@/lib/utils";

function FormSelect({
  name,
  label,
  options,
  defaultValue,
  placeholder = "Select...",
  required = false,
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <Select name={name} defaultValue={defaultValue} required={required}>
        <SelectTrigger id={name} className={cn(fieldClass, "w-full data-[size=default]:h-11")}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value} className="rounded-lg py-2">
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
