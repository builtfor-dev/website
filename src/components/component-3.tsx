import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function Component3() {
  return (
    <section id="difference" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">What People Think</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          How We&apos;re Different
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        We asked people what our difference factor was. This is what they said.
      </p>
      <div className="columns-1 gap-7 md:columns-2 lg:columns-3">
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Tessa&apos;s passion for the DevRel work was very much a differentiating factor.
              In our conversations, her enthusiasm for a good Dev Experience and DevRel function
              stood out. It gave us confidence that she&apos;s not only skilled at her craft but
              also cares deeply about the quality of her work.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/1659540882319.jpeg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Fiona</p>
                <p className="mt-1 leading-none text-muted-foreground">TinyFish, AgentQL</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;The first thing that comes to mind about Tessa is that she deeply understands
              the wants and needs of the developer audience and is able to empathize with them and
              advocate for them with internal teams. To say another way, she&apos;s great at
              ensuring the teams that build products for developers do so in a way that is
              developer-friendly and gets at the core of the problem they’re trying to solve. As a
              bonus, I think she&apos;s great at putting all of this into detailed strategy,
              documents, and plans that are easy to follow and help rally a team behind her to
              solve.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/1556339398235.jpeg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Alston Cheek</p>
                <p className="mt-1 leading-none text-muted-foreground">Snapchat / SnapAR</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Tessa&apos;s difference factor is that she shows up with empathy and
              understanding while knowing her shit really really well.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/1643990966833.jpeg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Stephen Goldberg</p>
                <p className="mt-1 leading-none text-muted-foreground">CEO @ HarperDB</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Dogged persistence is what I think separates Tessa from everybody else. The
              difference is, when she&apos;s on the trail for her client, she&apos;s going to run as
              hard as she can. She&apos;ll break every barrier and push through every issue to
              deliver for them. This level of partnership is unlike anything they&apos;ve ever
              experienced. If I were talking to them, I&apos;d say, &quot;Listen, there will be many
              people who can do this. here&apos;s the difference you&apos;re going to see from
              Tessa: dogged pursuit.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/1729375432408.jpeg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Chris Lema</p>
                <p className="mt-1 leading-none text-muted-foreground">CEO @ MotivationsAI</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;..the first thing that comes to mind is that Tessa inspires better than pretty
              much anyone I know. A combination of her energy, her optimistic outlook and technical
              depth make her really effective and inspiring people to see what is possible or what
              could be accomplished by working together with her.”
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/1729613523229.jpeg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Matt Cano</p>
                <p className="mt-1 leading-none text-muted-foreground">
                  Dev Partnerships @ Snapchat / SnapAR
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground">
              &quot;Tessa’s coaching has turbocharged my growth in DevRel leadership, leveling up my
              skills 10x. Her insights have been a game-changer, sharpening my strategic thinking,
              communication style, and my ability to build solid stakeholder relationships—boosting
              the value and impact of my DevRel team.&quot;
            </p>
            <div className="flex items-center gap-4 w-full pt-4">
              <div className="relative size-10">
                <Image
                  alt="Picture"
                  src="/images/1647977064715.jpeg"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">John Vajda</p>
                <p className="mt-1 leading-none text-muted-foreground">Head of DX @ Deepgram</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
