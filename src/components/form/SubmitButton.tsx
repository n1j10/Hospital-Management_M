"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SubmitButton({
  text = "Submit",
  className,
  size = "default",
  variant = "brand",
}: {
  text?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand";
}) {
  const { pending } = useFormStatus();
  const isSmall = size === "sm";

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn(
        "group min-w-[120px] rounded-xl font-semibold",
        isSmall ? "h-9 px-3.5" : "h-11 px-5",
        className
      )}
      size={size}
      variant={variant}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        <>
          {text}
          {variant === "brand" && !isSmall && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </>
      )}
    </Button>
  );
}

export default SubmitButton;
