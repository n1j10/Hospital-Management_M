import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CSSProperties } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** "Ahmed Ali" -> "AA" (first letters of the first two words). */
export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/** Inline style for staggered entrance animations: <div style={stagger(i)} />. */
export function stagger(index: number, step = 60, base = 0): CSSProperties {
  return { animationDelay: `${base + index * step}ms` };
}

const avatarGradients = [
  "from-teal-400 to-cyan-600",
  "from-sky-400 to-indigo-600",
  "from-emerald-400 to-teal-600",
  "from-violet-400 to-fuchsia-600",
  "from-amber-400 to-orange-600",
  "from-rose-400 to-pink-600",
];

/** Stable gradient per name, so each person keeps the same avatar color. */
export function avatarGradient(name: string) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  return avatarGradients[Math.abs(hash) % avatarGradients.length];
}
