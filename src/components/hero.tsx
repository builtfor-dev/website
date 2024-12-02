import { Network } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-28 sm:gap-10">
      <div className="flex items-center gap-1 rounded-full border bg-background px-3 py-0.5">
        <span className="text-sm text-foreground">Your target devs are already in our network</span>
        <Network size={16} className="text-foreground" />
      </div>
      <h1 className="max-w-2xl text-center font-heading text-5xl font-semibold tracking-tight">
        Does reaching the right developers feel impossible?
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Through deep research and developer insights, we uncover your biggest dev tool market
        opportunities — pinpointing which developers will buy, what solutions they need, and how to
        connect with them.
      </p>
      <div>
        <Button size="lg">
          Book Strategy Consult
          <Link href="https://blt4.dev/consult" target="_blank" />
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
