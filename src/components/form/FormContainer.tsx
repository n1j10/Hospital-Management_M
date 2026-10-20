"use client";

import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import type { FormAction } from "@/lib/action-utils";

const initialState = { message: "" };

function FormContainer({
  action,
  children,
}: {
  action: FormAction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
