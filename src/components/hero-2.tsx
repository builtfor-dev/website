import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border px-3 py-0.5 bg-primary hover:bg-primary/80 text-foreground">
          <span className="text-sm text-background">
            Book a Strategy Consult
            <Link href="http://google.com" />
          </span>
          <ArrowRight size={16} className="text-background" />
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold lg:text-left tracking-tight">
          Turn Developer Insights into Growth
        </h1>
        <p className="max-w-md text-center text-muted-foreground lg:text-left">
          Technical founders build the best dev tools. Yet most struggle with three key challenges:
          reaching the right developers, understanding their needs, and building effective
          distribution channels.
        </p>
        <p className="max-w-md text-center text-muted-foreground lg:text-left">
          We combine deep market research, developer ecosystem expertise, and proven strategic
          frameworks to help you:
        </p>
        <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 border-border bg-card px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:flex-1"
          />
          <Button size="lg" asChild className="cursor-pointer text-base">
            <Link href="#">Tell Me More</Link>
          </Button>
        </form>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/dashboard.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
