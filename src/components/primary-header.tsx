import Link from "next/link";
import Image from "next/image";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { cn } from "@/lib/utils";

interface PrimaryHeaderProps {
  className?: string;
}

export function PrimaryHeader({ className }: PrimaryHeaderProps) {
  return (
    <header className={cn("container flex items-center justify-between gap-10 py-4", className)}>
      <Link href="/" className="flex flex-1 items-center gap-3">
        <Image alt="Image" src="/images/green-icon.png" width={50} height={500} />
        <span className="font-heading text-lg font-bold" />
      </Link>
      <nav className="hidden flex-1 items-center justify-center gap-10 text-nowrap text-foreground md:flex">
        <NavItem href="/services" label="Services" className="text-foreground" />
        <NavItem href="/framework" label="Framework" className="text-foreground" />
        <NavItem
          href="https://hub.builtfor.dev/home/collections/case-studies"
          label="Results"
          className="text-foreground"
        />
        <NavItem
          href="https://hub.builtfor.dev"
          label="Dev Hub"
          className="text-nowrap text-foreground"
        />
        <NavItem href="/about" label="About" className="text-foreground" />
      </nav>
      <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
        <Button asChild variant="default">
          <a href="https://blt4.dev/consult" className="cursor-pointer">
            Book Strategy Consult
          </a>
        </Button>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <NavItem href="/about" label="About" />
            <NavItem href="/docs" label="Docs" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/pricing" label="Pricing" />
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
