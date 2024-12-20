import { Check, X } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Component4() {
  return (
    <section id="pricing" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Pricing</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          One-Day Dev Traction Sprint
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        Pricing that fits your funding and helps you grow.
      </p>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        <Card className="relative shadow-lg">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">Launch Pad</h4>
            <p className="mt-2 text-muted-foreground">
              For Solo Dev Tool Founders Looking to Establish Roots
            </p>
            <div className="mt-5">
              <span className="font-heading text-5xl font-semibold">$3,270</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Validated market fit hypothesis
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Prioritized use case definition
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Prospect and customer insights
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Comprehensive GTM playbook</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">90-day implementation roadmap</span>
              </li>
              <li className="flex items-center gap-3">
                <X size={15} className="text-destructive" />
                <span className="text-sm text-muted-foreground">Curated dev advisory board</span>
              </li>
              <li className="flex items-center gap-3">
                <X size={15} className="text-destructive" />
                <span className="text-sm text-muted-foreground">Storytelling workshop and pitch</span>
              </li>
              <li className="flex items-center gap-3">
                <X size={15} className="text-destructive" />
                <span className="text-sm text-muted-foreground">
                  Adoption pipeline and metrics
                </span>
              </li>
              <li className="flex items-center gap-3">
                <X size={15} className="text-destructive" />
                <span className="text-sm text-muted-foreground">Dev experience audit report</span>
              </li>
            </ul>
            <Button size="lg" asChild className="mt-10 w-full">
              <a href="https://blt4.dev/sprint" target="_blank">Get started</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="relative shadow-lg border-primary">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">Accelerate</h4>
            <p className="mt-2 text-muted-foreground">
              For Well-Funded Dev Tools Looking to Maximize Adoption
            </p>
            <div className="mt-5">
              <span className="font-heading text-5xl font-semibold">$7,920</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Validated market fit hypothesis
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Prioritized use case definition
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Prospect and customer insights
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Comprehensive GTM playbook</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">90-day implementation roadmap</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Curated dev advisory board</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Storytelling workshop and pitch</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Adoption pipeline and metrics
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Dev experience audit report</span>
              </li>
            </ul>
            <Button size="lg" asChild className="mt-10 w-full">
              <a href="https://blt4.dev/sprint" target="_blank">Get started</a>
            </Button>
          </CardContent>
          <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
            Best Results
          </span>
        </Card>
        <Card className="relative shadow-lg border-2">
          <CardContent className="flex flex-col items-start p-7">
            <h4 className="font-heading text-2xl font-semibold text-foreground">Scale Up</h4>
            <p className="mt-2 text-muted-foreground">
              For Dev Tools Looking to Grow Early Revenue and Trust
            </p>
            <div className="mt-5">
              <span className="font-heading text-5xl font-semibold">$5,280</span>
            </div>
            <ul className="space-y-2 mt-9">
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Validated market fit hypothesis
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Prioritized use case definition
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  Prospect and customer insights
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Comprehensive GTM playbook</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">90-day implementation roadmap</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Curated dev advisory board</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={15} className="text-accent" />
                <span className="text-sm text-muted-foreground">Storytelling workshop and pitch</span>
              </li>
              <li className="flex items-center gap-3">
                <X size={15} className="text-destructive" />
                <span className="text-sm text-muted-foreground">
                  Adoption pipeline and metrics
                </span>
              </li>
              <li className="flex items-center gap-3">
                <X size={15} className="text-destructive" />
                <span className="text-sm text-muted-foreground">Dev experience audit report</span>
              </li>
            </ul>
            <Button size="lg" asChild className="mt-10 w-full">
              <a href="https://blt4.dev/sprint" target="_blank">Get started</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
