import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 sm:gap-10 pb-10 pb-8">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60 bg-background">
        <span className="text-sm text-secondary-foreground text-foreground">
          🏃‍➡️ One-Day Sprint to Dev Adoption
        </span>
        <ArrowRight size={16} />
      </div>
      <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight">
        Fast-Track Your Dev Tool From Unknown to Favorite
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        We&apos;re multi-skilled developers who know how to get dev tools adopted by other
        developers.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <Button size="lg" asChild variant="default" className="cursor-pointer border-border">
          <Link href="https://blt4.dev/consult" target="_blank">Let&apos;s Talk</Link>
        </Button>
        <Button size="lg" asChild variant="secondary" className="cursor-pointer text-black">
          <Link href="https://blt4.dev/sprint" target="_blank">Ready to Run?</Link>
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
