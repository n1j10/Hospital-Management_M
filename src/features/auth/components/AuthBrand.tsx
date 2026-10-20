import Link from "next/link";
import Logo from "@/components/layout/Logo";

/** Logo shown above the login / register forms. */
export default function AuthBrand() {
  return (
    <Link href="/" className="mb-10 inline-block animate-fade-up">
      <Logo />
    </Link>
  );
}
