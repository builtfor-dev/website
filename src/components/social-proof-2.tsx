import Link from "next/link";
import Image from "next/image";

export function SocialProof2() {
  return (
    <section className="container flex flex-col items-center gap-10 py-14">
      <h2 className="text-center text-lg font-semibold leading-8">
        Some Developer Programs We&apos;ve Impacted
      </h2>
      <div className="grid w-full grid-cols-4 gap-10 sm:grid-cols-6 sm:gap-12 lg:grid-cols-5">
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1">
          <Link href="https://ar.snap.com/" target="_blank">
            <Image
              alt="Snapchat AR"
              src="/images/icons8-snapchat-500.png"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1">
          <Link href="https://www.agentql.com/" target="_blank">
            <Image
              alt="AgentQL AI-Powered Data-Scraping"
              src="/images/agentql.png"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1">
          <Image
            alt="Twitter API"
            src="/images/icons8-twitter-logo-500.png"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1 sm:col-start-2">
          <Link href="https://www.harperdb.io/" target="_blank">
            <Image alt="HarperDB" src="/images/harper-db.png" fill className="object-contain" />
          </Link>
        </div>
        <div className="relative col-span-2 h-11 flex-1 sm:h-10 lg:col-span-1 col-start-2 sm:col-start-auto">
          <Link href="https://deepgram.com/" target="_blank">
            <Image alt="Company Logo" src="/images/deepgram.png" fill className="object-contain" />
          </Link>
        </div>
      </div>
    </section>
  );
}
