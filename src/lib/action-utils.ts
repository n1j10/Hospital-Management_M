// Helpers shared by every features/*/actions.ts file.

import type * as zod from "zod";

export type ActionState = { message: string };

export type FormAction = (prevState: ActionState, formData: FormData) => Promise<ActionState>;

/** Parse data with a Zod schema, throwing one Error that lists every message. */
export function validateWithSchema<T>(schema: zod.ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.issues.map((issue) => issue.message).join(", "));
  }
  return result.data;
}

/** Turn any thrown error into the { message } shape FormContainer/DeleteButton toast. */
export function renderError(error: unknown): ActionState {
  if (error instanceof Error) return { message: error.message };
  return { message: "An error occurred" };
}

/** FormData -> plain object (empty strings dropped so optional fields stay undefined). */
export function formToObject(formData: FormData) {
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && value !== "" && !key.startsWith("$ACTION")) data[key] = value;
  }
  return data;
}
