import { Check, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AgentQLCaseStudynoCTAProps {
  className?: string;
}

export function AgentQLCaseStudynoCTA({ className }: AgentQLCaseStudynoCTAProps) {
  return (
    <section
      className={cn(
        "container flex flex-col gap-10 pb-14 pt-24 md:flex-row md:items-center md:gap-24",
        className,
      )}
    >
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-secondary">Case Study</span>
          <h2 className="text-balance text-left font-heading text-3xl font-semibold tracking-tight">
            Real Results from a Developer Audit
          </h2>
        </div>
        <h4 className="max-w-lg text-balance text-left text-lg font-semibold text-muted-foreground">
          From no developer AHA Moment to #1 Product of the Day and Week on Product Hunt
        </h4>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Developers could get the tool running</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Documentation was comprehensive</span>
          </li>
          <li className="flex items-center gap-2">
            <X size={24} className="size-5 text-destructive" />
            <span className="text-muted-foreground">
              Couldn&apos;t quickly grasp what was possible
            </span>
          </li>
          <li className="flex items-center gap-2">
            <X size={24} className="size-5 text-destructive" />
            <span className="text-muted-foreground">
              No clear path to that &quot;aha&quot; moment
            </span>
          </li>
        </ul>
        <p className="text-lg text-muted-foreground">
          Problem: A technically solid product was preparing for their public debut and asked our
          team to audit their experience.
        </p>
        <p className="text-lg text-muted-foreground">
          Key Fix: Interactive playground that let developers experience the value immediately.
        </p>
        <p className="text-muted-foreground">
          Result: #1 Product of the Day and Week on Product Hunt. 🔥
        </p>
      </div>
      <div className="relative flex-1">
        <Image
          alt="AgentQL DX Audit Screenshot"
          src="/images/agentql-screenshot-audit.png"
          width={800}
          height={500}
          className="shadow-lg"
        />
      </div>
    </section>
  );
}
