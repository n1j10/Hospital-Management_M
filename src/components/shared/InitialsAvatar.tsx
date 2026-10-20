import { avatarGradient, cn, getInitials } from "@/lib/utils";

const sizes = {
  sm: "h-8 w-8 text-[11px]",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-xl",
  xl: "h-24 w-24 text-3xl",
};

/** Colorful initials avatar — the color is derived from the name. */
export default function InitialsAvatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-br font-bold uppercase text-white shadow-md ring-2 ring-white/70 dark:ring-white/10",
        avatarGradient(name),
        sizes[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
