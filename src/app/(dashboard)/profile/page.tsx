import ProfileView from "@/features/users/components/ProfileView";
import { requireUser } from "@/lib/auth";

export default async function ProfilePage() {
  const user = await requireUser();
  return <ProfileView user={user} />;
}
