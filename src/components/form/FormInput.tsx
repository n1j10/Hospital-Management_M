import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const fieldClass =
  "h-11 rounded-xl border-border bg-background/60 px-3.5 text-sm shadow-xs transition-all focus-visible:border-teal-500/60 focus-visible:ring-4 focus-visible:ring-teal-500/15";

export function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <Label htmlFor={htmlFor} className="text-[13px] font-semibold text-foreground/85">
      {children}
      {required && <span className="-ml-1.5 text-teal-600">*</span>}
    </Label>
  );
}

function FormInput({
  name,
  label,
  type = "text",
  defaultValue = "",
  placeholder,
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}

export default FormInput;
