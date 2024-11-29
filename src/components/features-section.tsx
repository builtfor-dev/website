import { Check, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 md:flex-row md:items-center md:gap-24 pb-14 pt-24">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-left text-secondary">Case Study</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-left">
            Real Results from a Developer Audit
          </h2>
        </div>
        <h4 className="text-lg text-muted-foreground text-balance max-w-lg text-left font-semibold">
          From no developer AHA Moment to #1 Product of the Day and Week on Product Hunt
        </h4>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Developers could get the tool running</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Documentation was comprehensive</span>
          </li>
          <li className="flex items-center gap-2">
            <X size={24} className="size-5 text-destructive" />
            <span className="text-muted-foreground">
              Couldn&apos;t quickly grasp what was possible
            </span>
          </li>
          <li className="flex items-center gap-2">
            <X size={24} className="size-5 text-destructive" />
            <span className="text-muted-foreground">
              No clear path to that &quot;aha&quot; moment
            </span>
          </li>
        </ul>
        <p className="text-lg text-muted-foreground text-sm">
          Problem: A technically solid product was preparing for their public debut and asked our
          team to audit their experience.
        </p>
        <p className="text-lg text-muted-foreground text-sm">
          Key Fix: Interactive playground that let developers experience the value immediately.
        </p>
        <p className="text-muted-foreground text-balance text-sm">
          Result: #1 Product of the Day and Week on Product Hunt. 🔥
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="outline" className="hover:bg-foreground">
            <Link
              href="https://blt4.dev/agentqlplay"
              className="h-12 cursor-pointer border-border text-base md:px-9"
            >
              Visit the Playground
            </Link>
          </Button>
          <Button size="lg" asChild variant="secondary">
            <Link
              href="https://www.youtube.com/watch?v=A05VCF2_JF0"
              className="h-12 cursor-pointer text-base md:px-9"
            >
              Watch Dev Audit
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="AgentQL DX Audit Screenshot"
          src="/images/agentql-screenshot-audit.png"
          width={800}
          height={500}
          className="shadow-lg"
        />
      </div>
    </section>
  );
}
