import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClearPathForwardProps {
  className?: string;
}

export function ClearPathForward({ className }: ClearPathForwardProps) {
  return (
    <section
      className={cn("container flex flex-col items-center gap-6 py-24 sm:gap-10", className)}
    >
      <div className="text-center">
        <span className="font-bold uppercase text-primary">Get Your Dev Tool Discovered</span>
        <h2 className="pb-8 pt-2 text-center text-3xl font-semibold">A Clear Path Forward</h2>
        <h4 className="max-w-xl text-center font-heading text-lg">
          We help you understand what&apos;s really happening in your developer ecosystem.
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 py-10">
        <div className="text-center">
          <h2 className="text-balance pb-4 font-heading text-6xl font-semibold text-primary">1</h2>
          <h2 className="text-balance pb-3 font-heading text-xl font-semibold uppercase tracking-tight">
            Dev Market Insights
          </h2>
          <p className="text-balance pb-6 text-muted-foreground">
            Navigate the developer tool landscape confidently. Through deep market research and
            developer insights, we help you spot the most promising opportunities while steering
            clear of oversaturated segments.
          </p>
          <Button variant="outline">
            <Link href="#">Request Your Report</Link>
          </Button>
        </div>
        <div className="text-center">
          <h2 className="text-balance pb-4 font-heading text-6xl font-semibold text-primary">2</h2>
          <h2 className="text-balance pb-3 font-heading text-xl font-semibold uppercase tracking-tight">
            Growth Strategy Sprint
          </h2>
          <p className="text-balance pb-6 text-muted-foreground">
            In one day together, we&apos;ll define your market position, map your most promising
            channels, and create your developer growth strategy. You&apos;ll leave with clear
            priorities and an actionable plan to engage developers.
          </p>
          <Button variant="outline">
            <Link href="#">Schedule Sprint</Link>
          </Button>
        </div>
        <div className="text-center">
          <h2 className="text-balance pb-4 font-heading text-6xl font-semibold text-primary">3</h2>
          <h2 className="text-balance pb-3 font-heading text-xl font-semibold uppercase tracking-tight">
            Strategic Advisory Program
          </h2>
          <p className="text-balance pb-6 text-muted-foreground">
            Maintain momentum and sharpen your strategy through ongoing expert guidance. With
            biweekly sessions and continuous market monitoring, we&apos;ll help you make confident
            decisions to accelerate growth.
          </p>
          <Button variant="outline">
            <Link href="#">Apply for Program</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
