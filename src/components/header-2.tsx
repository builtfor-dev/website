import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

export function Header2() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <img src="/images/green-icon.png" width={50} />
      </Link>
      <nav className="hidden items-center gap-10 md:flex flex-1 justify-center">
        <Link
          href="https://blt4.dev/sprint"
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm" target="_blank"
        >
          Sprint
        </Link>
        <Link
          href="https://blt4.dev/doneforyou"
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm" target="_blank"
        >
          DevRel
        </Link>
        <Link
          href="https://www.builtfor.dev/#pricing"
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          Pricing
        </Link>
        <Link
          href="https://www.builtfor.dev/#difference"
          className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          Why Us
        </Link>
      </nav>
      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button asChild variant="secondary" className="text-black">
          <Link href="https://blt4.dev/sprint" className="cursor-pointer" target="_blank">
            Get Started
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="https://blt4.dev/sprint"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Sprint
            </Link>
            <Link
              href="https://blt4.dev/doneforyou"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              DevRel
            </Link>
            <Link
              href="https://www.builtfor.dev/#pricing"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="https://www.builtfor.dev/#difference"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Results
            </Link>
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="https://blt4.dev/sprint" className="cursor-pointer" target="_blank">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
