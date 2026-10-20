import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removePrescriptionItemAction } from "../actions";

export default function RemovePrescriptionButton({
  itemId,
  consultationId,
}: {
  itemId: string;
  consultationId: string;
}) {
  const removeItem = async () => {
    "use server";
    await removePrescriptionItemAction({ itemId, consultationId });
  };

  return (
    <form action={removeItem}>
      <Button type="submit" variant="ghost" size="icon" aria-label="Remove" className="rounded-lg text-muted-foreground transition-all hover:scale-110 hover:bg-rose-500/10 hover:text-rose-600">
        <Trash2 className="h-4 w-4" />
      </Button>
    </form>
  );
}
