import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/bg-arrow-green.png"
          width={713}
          height={497.7}
          className="shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">
            Connect with developers who need you
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Help Developers Discover Your Product?
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          You&apos;ve built something valuable — now let&apos;s help developers discover and adopt
          it. Work with us to understand:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Where your target developers spend their time
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              What drives their tool selection decisions
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              How to increase your product&apos;s visibility
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Which developer channels work best</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">What&apos;s preventing wider adoption</span>
          </li>
        </ul>
        <p className="max-w-lg text-balance text-left text-muted-foreground">
          Strengthen your dev tool&apos;s market presence through a data-driven strategy that
          connects with the right developers on their preferred platforms.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild>
            <Link href="https://blt4.dev/consult" className="h-12 cursor-pointer text-base md:px-9">
              Book Strategy Consult
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
