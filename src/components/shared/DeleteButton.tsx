"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Trash2, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DeleteButton({
  actionFn,
  id,
  idKey = "id",
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actionFn: (prevState: any) => Promise<{ message: string }>;
  id: string;
  idKey?: string;
}) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await actionFn({ [idKey]: id });
      toast(result.message);
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Delete"
            className="rounded-lg text-muted-foreground transition-all hover:scale-110 hover:bg-rose-500/10 hover:text-rose-600"
          />
        }
      >
        <Trash2 className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent className="rounded-2xl sm:max-w-md">
        <DialogHeader className="items-center text-center sm:items-center sm:text-center">
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 ring-8 ring-rose-500/5 animate-scale-in">
            <TriangleAlert className="h-6 w-6" />
          </div>
          <DialogTitle className="text-lg font-bold">Delete this record?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            record and all associated data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-center">
          <Button variant="outline" className="h-10 rounded-xl px-5" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            className="h-10 rounded-xl bg-rose-600 px-5 text-white hover:bg-rose-700"
            onClick={handleDelete}
            disabled={pending}
          >
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteButton;
