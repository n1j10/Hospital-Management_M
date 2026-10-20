import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-500 to-cyan-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Transform Your Hospital?
        </h2>
        <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
          Join healthcare facilities already using MediCare to streamline their
          operations.
        </p>
        <div className="mt-8">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-teal-50 text-base px-8 h-12 font-semibold"
            >
              Start Now — It&apos;s Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
