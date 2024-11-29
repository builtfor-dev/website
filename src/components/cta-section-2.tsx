import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

export function CtaSection2() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-10 pb-28 pt-14">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-secondary text-center">Case Study</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-left">
          What the Client Says
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance text-center max-w-xl">
        &quot;Tessa&apos;s passion for the DevRel work was very much a differentiating factor. In
        our conversations, her enthusiasm for a good Dev Experience and DevRel function stood out.
        It gave us confidence that she&apos;s not only skilled at her craft but also cares deeply
        about the quality of her work.&quot;&lt;br&gt;
      </p>
      <Avatar>
        <AvatarImage
          alt="avatar"
          src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/1659540882319_e26b0df1-ed9b-4ebd-835e-142c7903980d.jpeg"
          className="object-cover"
        />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
      <Label>Fiona Hui Li, GTM at AgentQL</Label>
      <p className="text-lg text-muted-foreground text-balance text-center max-w-xl">
        &quot;Your advice, guidance and ongoing assistance leading up to this launch has been
        invaluable. Some of the things that came about from our conversations include, yes, shipping
        a playground! It&apos;s been such a pleasure to work with you.&quot;&lt;br&gt;
      </p>
    </section>
  );
}
