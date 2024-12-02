import { PrimaryHeader } from "@/components/primary-header";
import { CtaSection3 } from "@/components/cta-section-3";
import { Logos } from "@/components/logos";
import { ClearPathForwardnoCTA } from "@/components/clear-path-forwardno-c-t-a";
import { CtaSection4 } from "@/components/cta-section-4";
import { FeaturesSection2 } from "@/components/features-section-2";
import { FeaturesSection3 } from "@/components/features-section-3";
import { FeaturesSection4 } from "@/components/features-section-4";
import { AgentQLCaseStudynoCTA } from "@/components/agent-q-l-case-studyno-c-t-a";
import { FAQ } from "@/components/f-a-q";
import { CtaSection5 } from "@/components/cta-section-5";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <>
      <PrimaryHeader />
      <CtaSection3 />
      <Logos />
      <ClearPathForwardnoCTA />
      <CtaSection4 />
      <FeaturesSection2 />
      <FeaturesSection3 />
      <FeaturesSection4 />
      <AgentQLCaseStudynoCTA />
      <FAQ />
      <CtaSection5 />
      <Footer />
    </>
  );
}
