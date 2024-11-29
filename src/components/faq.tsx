import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Answers to Your Questions
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        Common questions from technical founders like you.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <FaqItem
          answer="Not necessarily. What matters is having a working solution that solves a real developer problem. We can work with pre-revenue tools as long as you've validated the technical need."
          question="Do we need to have users or customers already?"
        />
        <FaqItem
          answer="Developers have unique buying patterns. They're typically adverse to sales calls, ignore traditional marketing, and need to deeply trust a tool before using it. What works for general B2B software usually fails with developer tools."
          question="What makes dev tools different from other B2B software?"
        />
        <FaqItem
          answer='We get technical where it matters for growth. Beyond strategic planning, my team conducts developer experience audits to ensure your tool creates those crucial "aha moments" that drive adoption. This includes reviewing documentation, analyzing the getting started experience, and identifying friction points in the developer journey.'
          question="How technical do you get during these sessions?"
        />
        <FaqItem
          answer="That's common and something we often address. Pricing dev tools is tricky because developer expectations vary widely. We'll look at market data and competitor patterns to find the right approach. We’ll also talk to your prospect developers and ask them."
          question="What if we're not sure about our pricing strategy?"
        />
        <FaqItem
          answer='Most business coaches give generic advice that doesn&apos;t work for dev tools or doesn’t focus on solving a critical developer pain point. We focus exclusively on helping technical founders reach developers. No "social media strategy" or "cold calling tips" - just proven approaches for getting developers to discover, try, and pay for your solution.'
          question="How is this different from typical business coaching?"
        />
        <FaqItem
          answer="Book a consult and let's talk about where you are. Sometimes, a quick conversation can point you in the right direction, and we can always do the sprint when the timing is right."
          question="What if we're not ready for the growth strategy sprint?"
        />
      </Accordion>
    </section>
  );
}
