import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function CommunitiesPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/2.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">For Communities</span>
              <div className="h-px w-8 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Transform Your Town</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              We partner with mayors, city managers, and economic development directors to activate your community&apos;s natural and cultural assets.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="bg-[#FFD700] text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Phase 1</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3 text-glow-subtle">The Vision Plan</h2>
                
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow text-glow-black">
                  A comprehensive 60-90 day discovery process designed to unearth your community&apos;s true potential, bypass consulting theories, and deliver a deployable roadmap.
                </p>
                <ul className="space-y-4 text-white text-glow-black-light">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Community asset assessment & gap analysis.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Crafting a compelling destination story.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Selection of 3-5 high-impact anchor concepts.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Production-quality community film.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Opportunity Zone (OZ) investor narrative creation.</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-blue-400/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="bg-blue-600 text-white shadow-blue-500/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Phase 2</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3 text-glow-subtle">The Community Platform</h2>
                
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow text-glow-black">
                  A fully branded digital destination that acts as your modern economic development infrastructure, replacing outdated methods with a national marketing engine.
                </p>
                <ul className="space-y-4 text-white text-glow-black-light">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Replaces or enhances existing economic development departments.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> National digital marketing campaigns to attract remote workers.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Turnkey investor attraction infrastructure.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Grant support documentation and alignment.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Predictable, SaaS-adjacent recurring support.</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stage 3 */}
        <FadeIn delay={0.3}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[250px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/3.png')" }}
                />
                
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-emerald-600 text-white shadow-emerald-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Phase 3</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3 text-glow-subtle">Physical Activation</h2>
                <p className="text-white text-lg leading-relaxed text-glow-black">
                  Deploying physical assets — Innovation Hub boats for waterfronts, or modular studio spaces for inland communities — to anchor your community&apos;s new vision and draw visitors, residents, and investment.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Marina Models Section */}
        <FadeIn delay={0.35}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">Marina Models</span>
              <div className="h-px w-12 bg-[#FFD700]/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Scalable. Flexible. Designed for Every Waterfront.</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Newvion Wellness Marina is built as a modular system that can be deployed across a range of waterfront communities — from small pilot locations to full destination-scale developments. Each marina is tailored to its market, with the ability to scale, phase, and evolve over time.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Small Marina */}
          <FadeIn delay={0.38}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="bg-white/20 text-white shadow-white/20 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Small Marina</span>
                <h3 className="text-2xl font-bold text-[#FFD700] mt-4 mb-2 text-glow-gold-subtle">Curated Foundation Model</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed text-glow-black-light">A carefully curated mix of core boats designed to establish a strong, welcoming waterfront experience.</p>
                <div className="space-y-3 text-white text-sm text-glow-black-light">
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Coffee / Café</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Pilates or Fitness</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Spa / Recovery</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Culinary or Food Boat</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Select Retail or Discovery</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Medium Marina */}
          <FadeIn delay={0.42}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="bg-[#FFD700]/90 text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Medium Marina</span>
                <h3 className="text-2xl font-bold text-[#FFD700] mt-4 mb-2 text-glow-gold-subtle">Connected Community Model</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed text-glow-black-light">A connected system of boats creating a full-day destination blending wellness, culinary, lifestyle, and creative experiences.</p>
                <div className="space-y-3 text-white text-sm text-glow-black-light">
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Expanded Wellness (Pilates, Spa, Fitness)</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Culinary + Coffee</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Retail + Marketplace</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Creative (Music, Art, Media)</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Office / Co-Working</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Large Marina */}
          <FadeIn delay={0.46}>
            <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="bg-[#FFD700] text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Large Marina</span>
                <h3 className="text-2xl font-bold text-[#FFD700] mt-4 mb-2 text-glow-gold-subtle">Fully Connected Destination</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed text-glow-black-light">A fully connected waterfront district designed as a regional or national destination.</p>
                <div className="space-y-3 text-white text-sm text-glow-black-light">
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Full Wellness & Lifestyle Ecosystem</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Expanded Culinary + Food Experiences</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Retail District on the Water</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Creative + Discovery Programming</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Office / Innovation + Media</div>
                  <div className="flex items-center gap-2"><span className="text-[#FFD700]">✦</span> Hospitality (Hotel & Live-Work Boats)</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Designed for Flexibility */}
        <FadeIn delay={0.5}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-md p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-3 text-glow-subtle">Designed for Flexibility</h3>
            <p className="text-white/80 leading-relaxed text-glow-black-light">
              Every Newvion Wellness Marina is designed through a detailed market and feasibility study. Boat types, program mix, phasing strategy, and operator opportunities are curated based on each community&apos;s needs. Each marina is a curated and connected environment, designed to reflect the character, needs, and opportunity of its community while operating within a proven, scalable system.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#FFD700]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 text-glow-subtle">Ready to Activate Your Waterfront?</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8 text-glow-black">
                Join pioneering communities like Moore Haven, FL and Allegan, MI in deploying the Newvion model. Stop studying and start building.
              </p>
              <Link href="/" className="inline-block bg-[#FFD700] text-[#0d1b3e] font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 cursor-pointer">
                Request a Vision Plan
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
