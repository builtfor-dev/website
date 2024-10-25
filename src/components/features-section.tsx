import { Code, Languages, Megaphone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">what we do</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Love your product?
        </h2>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Get developers to love it too.
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance text-center max-w-2xl">
        We work with actual developers in your target audience to validate what makes your tool
        valuable, identify who needs it most, and create a clear plan to reach them. By the end,
        you&apos;ll know exactly how to tell your tool&apos;s story and get it in front of the right
        developers.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg bg-background">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2 bg-secondary-foreground">
              <Code size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Show developers your solution
              </h4>
              <p className="text-muted-foreground">
                Help developers discover your tool and see exactly how it makes their job easier.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-background">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2 bg-secondary-foreground">
              <Languages size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Speak like your developer
              </h4>
              <p className="text-muted-foreground">
                Share your tool in a way that shows you understand developers’ real-world needs.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg bg-background">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2 bg-secondary-foreground">
              <Megaphone size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Make developers tell others
              </h4>
              <p className="text-muted-foreground">
                Create such a smooth experience that developers naturally share your tool with
                others.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
