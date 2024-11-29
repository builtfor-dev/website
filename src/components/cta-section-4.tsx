import { Badge } from "@/components/ui/badge";

export function CtaSection4() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance sm:leading-tight text-center text-primary-foreground max-w-3xl">
          Ready to feel like an insider?
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          We&apos;re researching dev tools and hanging with developers every day. We know what
          developers need and how they want it.
        </p>
        <p className="max-w-xl text-primary-foreground/80 text-center italic text-base">
          Join the newsletter and receive dev tool trends and tricks in your inbox.
        </p>
        <div className="max-w-xl text-center gap-x-4 grid" />
        <Badge>Subscription Form Here</Badge>
      </div>
    </section>
  );
}
