import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCard3Props {
  name: string;
  username: string;
  image: string;
  text: string;
  className?: string;
}

export function TestimonialCard3({
  name,
  username,
  image,
  text,
  className,
}: TestimonialCard3Props) {
  return (
    <Card className={cn("shadow-lg", className)}>
      <CardContent className="flex flex-col items-start gap-5 p-7">
        <div className="flex items-center gap-4">
          <div className="relative size-10">
            <Image alt="Picture" src={image} fill className="rounded-full object-cover" />
          </div>
          <div>
            <p className="font-semibold leading-none text-foreground">{name}</p>
            <p className="mt-1 leading-none text-muted-foreground">@{username}</p>
          </div>
        </div>
        <p className="text-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
