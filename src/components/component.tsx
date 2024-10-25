import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <section
      id="sprint"
      className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24 py-28"
    >
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/pexels-rdne-6669448.jpg"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left text-accent">
            Skip the Guesswork
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            One-Day Dev Traction Sprint
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          Turn developer interest into real adoption in one focused day. Skip months of guesswork
          with a proven process that gives you actionable insights, a clear growth strategy, and
          direct validation from your target users.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Get validation and feedback from a curated Technical Advisory Board
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Growth playbook and clear roadmap built on real developer insights
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Start executing immediately with a 90-day roadmap to follow
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              No time? We&apos;ll build and manage your developer relations program for you
            </span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="default">
            <Link
              href="https://blt4.dev/consult"
              className="h-12 cursor-pointer border-border text-base md:px-9"
            >
              Let&apos;s Talk
            </Link>
          </Button>
          <Button size="lg" asChild variant="secondary">
            <Link href="https://blt4.dev/sprint" className="h-12 cursor-pointer text-base md:px-9">
              Book It
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
