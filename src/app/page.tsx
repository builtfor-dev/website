import { PrimaryHeader } from "@/components/primary-header";
import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { ClearPathForward } from "@/components/clear-path-forward";
import { AgentQLCaseStudy } from "@/components/agent-q-l-case-study";
import { CtaSection } from "@/components/cta-section";
import { CtaSection2 } from "@/components/cta-section-2";
import { FeaturesSection } from "@/components/features-section";
import { FAQ } from "@/components/f-a-q";
import { NewsletterSubscribe } from "@/components/newsletter-subscribe";
import { Footer } from "@/components/footer";

export default async function HomePage() {
  return (
    <>
      <PrimaryHeader />
      <Hero />
      <Logos />
      <ClearPathForward />
      <AgentQLCaseStudy />
      <CtaSection />
      <CtaSection2 />
      <FeaturesSection />
      <FAQ />
      <NewsletterSubscribe />
      <Footer />
    </>
  );
}
