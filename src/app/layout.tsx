import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col overflow-hidden ${caveat.variable}`}>
        <Nav />
        <div className="flex-1 overflow-y-auto relative z-10 w-full scroll-smooth">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
