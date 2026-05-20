import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 mt-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, deployed on Vercel.
        </p>
        <div className="flex gap-5 text-sm">
          <Link href={`mailto:${siteConfig.email}`} className="text-ink/70 hover:text-ink">
            Email
          </Link>
          <Link href={siteConfig.social.linkedin} className="text-ink/70 hover:text-ink">
            LinkedIn
          </Link>
          <Link href={siteConfig.social.github} className="text-ink/70 hover:text-ink">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
