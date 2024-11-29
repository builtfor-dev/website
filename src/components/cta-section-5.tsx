import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection5() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center">
        Turn Developer Insights into Growth
      </h2>
      <p className="text-lg text-muted-foreground text-balance text-center max-w-2xl">
        Technical founders build the best dev tools. Yet most struggle with three key challenges:
        reaching the right developers, understanding their needs, and building effective
        distribution channels.
      </p>
      <p className="text-lg text-muted-foreground text-balance text-center max-w-2xl">
        We combine deep market research, developer ecosystem expertise, and proven strategic
        frameworks to help you:
      </p>
      <ul />
      <li>Find the developers who are willing and able to buy your tool</li>
      <Button size="lg" asChild variant="default" className="cursor-pointer border-border">
        <Link href="#">Get Started</Link>
      </Button>
    </section>
  );
}
