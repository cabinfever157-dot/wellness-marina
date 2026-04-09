import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function VisionWearBoutiquePage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/6.png')", filter: "brightness(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-400/50" />
              <span className="text-amber-400 text-xs font-medium tracking-[0.2em] uppercase">Retail Boat Concept</span>
              <div className="h-px w-8 bg-amber-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Vision Wear Boutique Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              A curated optical boutique on the dock — prescription frames, fashion eyewear, performance sunglasses, and readers.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/6.png')" }} />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-amber-600 text-black shadow-amber-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">The Boutique</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Curated Optical Retail</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  A single-floor, fully accessible optical boutique designed for the marina dock with a unique open-deck rooftop for testing sunglasses in natural marine light.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Curated selection of prescription frames and fashion eyewear.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Performance sunglasses and readers.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Frame fitting services and prescription lens coordination with regional labs.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Rooftop deck for testing sunglasses in natural waterfront light.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Business Model</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">Premium</div>
                <div className="text-white text-sm">Base Boat</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">Custom</div>
                <div className="text-white text-sm">Fit-Out Options</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">E-2 Qualified</div>
                <div className="text-white text-sm">Treaty Investor Eligible</div>
              </div>
            </div>
            <p className="text-white text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              Fully commercially sustainable from opening day with no grant dependency. Revenue from built-in patient referrals from the adjacent Vision Care Boat, walk-in impulse sales from hotel guests, fishing guides, and the local community.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Open Your Optical Boutique</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Bring premium eyewear and vision care to a waterfront community.
              </p>
              <Link href="/" className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-amber-400 transition-colors duration-300 cursor-pointer">
                Learn About Opportunities
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}