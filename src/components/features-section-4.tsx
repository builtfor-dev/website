import { Check, AlertCircle } from "lucide-react";
import Image from "next/image";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export function FeaturesSection4() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">
            Ongoing guidance for consistent growth
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Dev Tool Growth Advisory Program
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          Ready to maintain your growth momentum? Our quarterly advisory program provides:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Strategic guidance through bi-weekly sessions
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Fresh market insights and opportunity alerts
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Priority access for strategic questions</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Continuous optimization of your growth plan
            </span>
          </li>
        </ul>
        <p className="max-w-lg text-left italic text-muted-foreground">
          Perfect for founders focused on long-term strategic growth.
        </p>
        <Alert>
          <AlertCircle />
          <AlertTitle>Market Insights + Strategy Sprint First</AlertTitle>
          <AlertDescription>Must apply, market insights and strategy required.</AlertDescription>
        </Alert>
        <div className="mt-4 grid grid-cols-2 gap-3" />
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/advisory-program.svg"
          alt="SaaS Dashboard"
          width={713}
          height={497.7}
          className="border border-border shadow-lg"
        />
      </div>
    </section>
  );
}
