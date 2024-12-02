import { PrimaryHeader } from "@/components/primary-header";
import { Hero2 } from "@/components/hero-2";
import { CtaSection6 } from "@/components/cta-section-6";
import { Logos } from "@/components/logos";
import { NewsletterSubscribe } from "@/components/newsletter-subscribe";
import { Footer } from "@/components/footer";

export default function FrameworkPage() {
  return (
    <>
      <PrimaryHeader />
      <Hero2 />
      <CtaSection6 />
      <Logos />
      <NewsletterSubscribe />
      <Footer />
    </>
  );
}
