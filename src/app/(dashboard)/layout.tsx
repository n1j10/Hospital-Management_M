import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { requireUser, toAuthPayload } from "@/lib/auth";
import { getNotifications } from "@/features/dashboard/queries";

export default async function DashboardLayout({ children }: LayoutProps<"/">) {
  const user = toAuthPayload(await requireUser());
  const notifications = await getNotifications().catch(() => []);

  return (
    <div className="relative flex h-screen overflow-hidden bg-background">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-400/10 blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-3xl animate-blob [animation-delay:-7s]" />
        <div className="absolute inset-0 bg-dots opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      </div>

      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <Navbar user={user} notifications={notifications} />
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
