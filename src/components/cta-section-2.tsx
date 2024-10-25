import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CtaSection2() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 sm:gap-10 bg-accent py-16">
        <embed />
        <h3 className="font-bold uppercase text-background">Wanna know the industry secrets?</h3>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance sm:leading-tight text-center text-primary-foreground max-w-2xl">
          Stay Sharp on Developer Growth
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Join the Dev Builders Club newsletter and receive content on developer tool traction in
          your inbox.
        </p>
        <form className="flex flex-col gap-2">
          <div>
            <Input type="email" placeholder="What's your email?" className="bg-foreground" />
          </div>
          <Button variant="outline" className="mt-2">
            Join the List
          </Button>
        </form>
      </div>
    </section>
  );
}
