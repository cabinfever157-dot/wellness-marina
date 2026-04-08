import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/ui/Header";
import { LuxuryBackground } from "@/components/layout/LuxuryBackground";
import "./globals.css";

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
    <html lang="en" className={`${inter.className} ${playfair.className}`}>
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
      </body>
    </html>
  );
}
