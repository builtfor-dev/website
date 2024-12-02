import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10">
      <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Dev Tool Growth Framework
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Developer adoption isn’t magic; it’s methodical.
      </p>
      <p className="max-w-xl text-center text-muted-foreground">
        A systematic approach to understanding, measuring, and improving how developers discover,
        embrace, and advocate for technical products.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
          <Link href="https://blt4.dev/playbook">Download Playbook</Link>
        </Button>
        <Button size="lg" asChild className="cursor-pointer">
          <Link href="#">What&apos;s Your Score?</Link>
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
