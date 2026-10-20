import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import DeleteButton from "@/components/shared/DeleteButton";
import { formatDate } from "@/lib/format";
import { getInitials } from "@/lib/utils";
import { deleteUserAction } from "../actions";
import type { UserProfile } from "@/types";

const roleColors: Record<string, string> = {
  ADMIN: "bg-purple-500/15 text-purple-700 border-purple-500/25 dark:text-purple-400",
  DOCTOR: "bg-blue-500/15 text-blue-700 border-blue-500/25 dark:text-blue-400",
  RECEPTIONIST: "bg-indigo-500/15 text-indigo-700 border-indigo-500/25 dark:text-indigo-400",
};

export default function UsersTable({ users }: { users: UserProfile[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xs font-semibold shrink-0 shadow-xs">
                    {getInitials(user.name)}
                  </div>
                  {user.name}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell>
                <Badge variant="outline" className={roleColors[user.role] ?? ""}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {user.doctor?.department?.name ?? "—"}
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {formatDate(user.createdAt)}
              </TableCell>
              <TableCell>
                <DeleteButton actionFn={deleteUserAction} id={user.id} idKey="userId" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
