import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <div className="text-center">
        <span className="font-bold uppercase text-primary">Get Your Dev Tool Discovered</span>
        <h2 className="text-3xl font-semibold pb-8 text-center pt-2">A Clear Path Forward</h2>
        <h4 className="font-heading text-center text-lg max-w-xl">
          We help you understand what&apos;s really happening in your developer ecosystem.
        </h4>
      </div>
      <div className="grid grid-cols-3 pt-10 pb-10 gap-8">
        <div className="text-center">
          <h2 className="font-heading font-semibold text-balance text-xl pb-4 text-primary text-6xl">
            1
          </h2>
          <h2 className="font-heading font-semibold tracking-tight text-balance pb-3 text-xl uppercase">
            Dev Market Insights
          </h2>
          <p className="text-muted-foreground text-balance pb-6">
            Navigate the developer tool landscape confidently. Through deep market research and
            developer insights, we help you spot the most promising opportunities while steering
            clear of oversaturated segments.
          </p>
          <Button variant="outline">
            Request Your Report
            <Link href="#" />
          </Button>
        </div>
        <div className="text-center">
          <h2 className="font-heading font-semibold text-balance text-xl pb-4 text-6xl text-primary">
            2
          </h2>
          <h2 className="font-heading font-semibold tracking-tight text-balance pb-3 text-xl uppercase">
            Growth Strategy Sprint
          </h2>
          <p className="text-muted-foreground text-balance pb-6">
            In one day together, we&apos;ll define your market position, map your most promising
            channels, and create your developer growth strategy. You&apos;ll leave with clear
            priorities and an actionable plan to engage developers.
          </p>
          <Button variant="outline">
            Schedule Sprint
            <Link href="#" />
          </Button>
        </div>
        <div className="text-center">
          <h2 className="font-heading font-semibold text-balance text-xl pb-4 text-6xl text-primary">
            3
          </h2>
          <h2 className="font-heading font-semibold tracking-tight text-balance pb-3 text-xl uppercase">
            Strategic Advisory Program
          </h2>
          <p className="text-muted-foreground text-balance pb-6">
            Maintain momentum and sharpen your strategy through ongoing expert guidance. With
            biweekly sessions and continuous market monitoring, we&apos;ll help you make confident
            decisions to accelerate growth.
          </p>
          <Button variant="outline">
            Apply for Program
            <Link href="#" />
          </Button>
        </div>
      </div>
    </section>
  );
}
