import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function CtaSection3() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-primary px-3 py-0.5 text-foreground hover:bg-primary/80">
        <span className="text-sm text-background">
          <Link href="https://blt4.dev/consult">Start with a Strategy Consult</Link>
        </span>
        <ArrowRight size={16} className="text-background" />
      </div>
      <h2 className="max-w-3xl text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
        Turn Developer Insights into Growth
      </h2>
      <p className="max-w-2xl text-balance text-center text-lg text-muted-foreground">
        Technical founders build amazing tools. Yet most struggle with three key challenges:
        reaching the right developers, understanding their needs, and building effective
        distribution channels.
      </p>
      <p className="max-w-2xl text-balance text-center text-lg text-muted-foreground">
        We combine deep market research, developer ecosystem expertise, and proven strategic
        frameworks to help you:
      </p>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <Check size={24} className="size-5 text-primary" />
          <span className="text-muted-foreground">
            Find the developers who are willing and able to buy your tool
          </span>
        </li>
        <li className="flex items-center gap-2">
          <Check size={24} className="size-5 text-primary" />
          <span className="text-muted-foreground">
            Build distribution channels that reach them efficiently
          </span>
        </li>
        <li className="flex items-center gap-2">
          <Check size={24} className="size-5 text-primary" />
          <span className="text-muted-foreground">
            Create a clear path to sustainable developer growth
          </span>
        </li>
      </ul>
      <p className="max-w-2xl text-balance text-center text-lg text-muted-foreground">
        Skip the generic advice. Get focused strategy and practical insights to scale your dev tool
        effectively.
      </p>
    </section>
  );
}
