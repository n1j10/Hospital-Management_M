import LandingNav from "@/features/landing/components/LandingNav";
import Hero from "@/features/landing/components/Hero";
import FeaturesGrid from "@/features/landing/components/FeaturesGrid";
import StatsSection from "@/features/landing/components/StatsSection";
import CtaSection from "@/features/landing/components/CtaSection";
import LandingFooter from "@/features/landing/components/LandingFooter";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <LandingNav />
      <Hero />
      <FeaturesGrid />
      <StatsSection />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}
