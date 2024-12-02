import Image from "next/image";
import { Check, AlertCircle } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export function FeaturesSection3() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          src="/images/chess-tight.svg"
          alt="SaaS Dashboard"
          width={500}
          height={497.7}
          className="border border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">
            Turn insights into actionable strategy
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Dev Tool Growth Strategy Sprint
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          Using your market insights, we&apos;ll spend one focused day transforming knowledge into
          action. Together we&apos;ll:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Identify key growth opportunities and action plans
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Create dev segments with proven outreach tactics
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Build your distribution strategy and channel plan
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Create a focused 90-day growth roadmap with metrics
            </span>
          </li>
        </ul>
        <p className="max-w-lg text-balance text-left italic text-muted-foreground">
          You&apos;ll walk away with strategic priorities and a detailed growth plan to start
          executing immediately, plus clear metrics to track your success.
        </p>
        <Alert>
          <AlertCircle />
          <AlertTitle>Market Insights First</AlertTitle>
          <AlertDescription>Market insights required for this service.</AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
