import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection3() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center">
        Find your developer audience. Grow your tool.
      </h2>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        Show developers you understand their needs with a process that gets to know them deeply
      </p>
      <Button size="lg" asChild variant="secondary" className="cursor-pointer border-border">
        <Link href="https://blt4.dev/consult" target="_blank">Let&apos;s Talk</Link>
      </Button>
    </section>
  );
}
