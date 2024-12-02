import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function FeaturesSection2() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">
            Your foundation for strategic decisions
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Dev Tool Market Insights
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          Take the guesswork out of your market opportunity. Through in-depth research and developer
          ecosystem analysis, we&apos;ll uncover:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Your actual tool buyers and their profiles
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Untapped opportunities in the market</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Competitor strengths and weaknesses</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Most effective developer outreach channels
            </span>
          </li>
        </ul>
        <p className="max-w-lg text-left italic text-muted-foreground">
          Within two weeks, you&apos;ll receive clear insights into your market position and growth
          opportunities — all backed by real developer research and competitive analysis.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://blt4.dev/consult"
              className="h-12 cursor-pointer border-border text-base md:px-9"
            >
              Tell Me More
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link
              href="https://builtfordev.outseta.com/auth?widgetMode=register&planFamilyUid=OW412Vmg&planPaymentTerm=oneTime&skipPlanOptions=false"
              className="h-12 cursor-pointer text-base md:px-9"
            >
              Ready to Buy
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/market-insights.svg"
          alt="Market Insights"
          width={713}
          height={497.7}
          className="border border-border shadow-lg"
        />
      </div>
    </section>
  );
}
