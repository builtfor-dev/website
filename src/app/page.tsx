import { PrimaryHeader } from "@/components/primary-header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { CtaSection2 } from "@/components/cta-section-2";
import { CtaSection3 } from "@/components/cta-section-3";
import { FeaturesSection2 } from "@/components/features-section-2";
import { Faq } from "@/components/faq";
import { CtaSection4 } from "@/components/cta-section-4";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <PrimaryHeader />
      <Hero />
      <SocialProof />
      <CtaSection />
      <FeaturesSection />
      <CtaSection2 />
      <CtaSection3 />
      <FeaturesSection2 />
      <Faq />
      <CtaSection4 />
      <Footer />
    </>
  );
}
