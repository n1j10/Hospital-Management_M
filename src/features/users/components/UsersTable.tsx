import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import DeleteButton from "@/components/shared/DeleteButton";
import InitialsAvatar from "@/components/shared/InitialsAvatar";
import Pill, { type PillTone } from "@/components/shared/Pill";
import TableShell, { rowAnimation } from "@/components/shared/TableShell";
import { formatDate } from "@/lib/format";
import { deleteUserAction } from "../actions";
import type { UserProfile } from "@/types";

const roleTones: Record<string, PillTone> = {
  ADMIN: "violet",
  DOCTOR: "sky",
  RECEPTIONIST: "teal",
};

export default function UsersTable({ users }: { users: UserProfile[] }) {
  return (
    <TableShell>
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
          {users.map((user, i) => (
            <TableRow key={user.id} {...rowAnimation(i)}>
              <TableCell>
                <div className="flex items-center gap-3 font-semibold">
                  <InitialsAvatar name={user.name} size="sm" />
                  {user.name}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell>
                <Pill tone={roleTones[user.role] ?? "neutral"}>{user.role}</Pill>
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
    </TableShell>
  );
}
