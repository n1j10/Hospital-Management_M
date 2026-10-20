import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-animated px-6 py-20 text-center shadow-2xl shadow-teal-500/20 sm:px-16">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:-6s]" />
            <HeartPulse className="absolute right-12 top-10 hidden h-20 w-20 text-white/15 animate-float md:block" />

            <h2 className="relative text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to Transform Your Hospital?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/85">
              Join healthcare facilities already using MediCare to streamline their
              operations.
            </p>
            <Link
              href="/register"
              className="shine group relative mt-10 inline-flex h-13 items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-teal-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Start Now — It&apos;s Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
