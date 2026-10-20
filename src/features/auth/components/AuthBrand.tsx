import { Activity } from "lucide-react";

/** Logo + "MediCare" shown above the login / register forms. */
export default function AuthBrand() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md shadow-purple-500/20">
        <Activity className="h-5 w-5" />
      </div>
      <span className="text-xl font-bold tracking-tight">MediCare</span>
    </div>
  );
}
