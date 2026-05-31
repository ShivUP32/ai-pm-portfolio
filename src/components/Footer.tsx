import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16 relative z-10">
      <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-white/50 tracking-widest font-mono">
          © {new Date().getFullYear()} SHIVAM SINGH
        </p>
        <div className="flex gap-5 text-sm">
          <Link href={`mailto:${siteConfig.email}`} className="text-white/50 hover:text-white transition-colors">
            Email
          </Link>
          <Link href={siteConfig.social.linkedin} className="text-white/50 hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href={siteConfig.social.github} className="text-white/50 hover:text-white transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
