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
      <Link href="/" className="flex items-center gap-3 flex-1">
        <Image alt="Image" src="/images/green-icon.png" width={50} height={500} />
        <span className="font-heading font-bold text-lg" />
      </Link>
      <nav className="hidden items-center gap-10 md:flex flex-1 justify-center text-foreground text-nowrap">
        <NavItem href="/services" label="Services" className="text-foreground" />
        <NavItem href="/framework" label="Framework" className="text-foreground" />
        <NavItem href="/results" label="Results" className="text-foreground" />
        <NavItem
          href="https://hub.builtfor.dev"
          label="Dev Hub"
          className="text-foreground text-nowrap"
        />
        <NavItem href="/about" label="About" className="text-foreground" />
      </nav>
      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button asChild variant="default">
          <Link href="https://blt4.dev/consult" className="cursor-pointer">
            Book Strategy Consult
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <undefined href="/about" label="About" />
            <undefined href="/docs" label="Docs" />
            <undefined href="/blog" label="Blog" />
            <undefined href="/pricing" label="Pricing" />
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
