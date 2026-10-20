import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <div className="flex gap-2">
      <Link href="/patients/register">
        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md shadow-purple-500/20">
          <Plus className="h-4 w-4 mr-1" />
          New Patient
        </Button>
      </Link>
      <Link href="/appointments/create">
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-1" />
          New Appointment
        </Button>
      </Link>
    </div>
  );
}
