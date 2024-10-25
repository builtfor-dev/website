import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Component2() {
  return (
    <section
      id="devrel"
      className="container flex flex-col gap-10 md:flex-row md:items-center md:gap-24 py-28"
    >
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left text-accent">
            Expert DevRel, Zero Overhead
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            DevRel Done-for-You
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          We&apos;ll bring your Dev Traction Sprint strategy to life while you build your product.
          Following the playbook we created together, our team turns your plan into real developer
          adoption.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Execute your content and community strategy exactly as we mapped it
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Keep getting insights from your technical advisory board
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Turn happy developers into vocal advocates for your tool
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Watch your community grow with a real-time custom dashboard
            </span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="default">
            <Link
              href="https://blt4.dev/doneforyou"
              className="h-12 cursor-pointer border-border text-base md:px-9"
            >
              View Pricing
            </Link>
          </Button>
          <Button size="lg" asChild variant="secondary">
            <Link href="https://blt4.dev/sprint" className="h-12 cursor-pointer text-base md:px-9">
              Book Sprint
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/my-life-through-a-lens-bq31L0jQAjU-unsplash.jpg"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
    </section>
  );
}
