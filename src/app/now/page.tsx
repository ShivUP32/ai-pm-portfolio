import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = { title: "Now" };

export default function NowPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <header className="mb-10">
        <p className="text-sm text-ink/50 uppercase tracking-wider mb-3">Now</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
          What I'm thinking about
        </h1>
        <p className="mt-4 text-sm text-ink/50 font-mono uppercase tracking-wider">
          Last updated · {siteConfig.now.updated}
        </p>
      </header>

      <div className="text-lg leading-relaxed text-ink/85 space-y-6">
        <p>{siteConfig.now.text}</p>
      </div>

      <p className="mt-16 text-sm text-ink/50">
        Inspired by{" "}
        <Link
          href="https://nownownow.com/about"
          className="link-underline text-ink/70"
        >
          Derek Sivers' /now page movement
        </Link>
        . This page is dated on purpose.
      </p>
    </div>
  );
}
