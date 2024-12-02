import { cn } from "@/lib/utils";

interface NewsletterSubscribeProps {
  className?: string;
}

export function NewsletterSubscribe({ className }: NewsletterSubscribeProps) {
  return (
    <section className={cn("container", className)}>
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="max-w-3xl text-balance text-center font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl sm:leading-tight">
          Ready to feel like an insider?
        </h2>
        <p className="max-w-xl text-center text-lg text-primary-foreground/80">
          We&apos;re researching dev tools and hanging with developers every day. We know what
          developers need.
        </p>
        <p className="max-w-xl text-center text-base italic text-primary-foreground/80">
          Join the newsletter and receive dev tool trends and tricks in your inbox.
        </p>
        <div className="grid max-w-xl gap-x-4 text-center" />
        <embed className="max-w-xl" />
      </div>
    </section>
  );
}
