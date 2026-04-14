import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import Header from "@/components/ui/Header";
import { LuxuryBackground } from "@/components/layout/LuxuryBackground";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newvion Wellness Marina",
  description: "Rural waterfront reimagined. Designed for Living Well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.className, playfair.className, "font-sans", geist.variable)}>
      <body className="min-h-full antialiased text-text selection:bg-gold/30 selection:text-gold overflow-x-hidden">
        {/* Grain texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-[99] opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <LuxuryBackground />
        <Header />
        {children}
        <footer className="relative z-10 py-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <a
              href="https://advancedai-solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-white/80 transition-colors"
            >
              &copy; {new Date().getFullYear()} Advanced A.I. Solutions. Redefining what&apos;s possible
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
