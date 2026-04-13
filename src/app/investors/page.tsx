import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function InvestorsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/5.png')" }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">For Investors</span>
              <div className="h-px w-8 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Discover Untapped Markets</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Opportunity Zone capital available nationally. We provide the de-risked, place-based vehicles to capture tax-advantaged returns.
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
                <h2 className="text-3xl font-bold text-white mb-3">Rural OZ Business Funds</h2>
                <div className="text-[#FFD700] text-2xl font-light mb-6">Tax-Advantaged Returns</div>
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow">
                  Themed, grouped Opportunity Zone funds targeting designated rural waterfronts and inland hubs. Move away from speculative real estate and into active, operating businesses.
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Massive federal tax benefits for accredited investors and family offices.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Deferral of capital gains and elimination of tax on new gains (10+ year hold).</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Direct investment into high-impact, revenue-generating boat deployments.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Immediate capital deployment via turnkey boat assets.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Predictable recurring platform revenue backing the ecosystem.</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-3">E-2 Treaty Investor Visas</h2>
                <div className="text-[#FFD700] text-2xl font-light mb-6">US Residency via Investment</div>
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow">
                  A seamless pathway for international capital (Canada, UK, Germany, Japan, etc.) seeking US residency through direct business investment in a supported ecosystem.
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Turnkey boat concepts satisfy the &quot;active business&quot; requirement.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Newvion acts as the operational support system and brand licensor.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Removes the friction of starting an unproven concept in a new country.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Integrates the investor into a national network of like-minded operators.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Built-in audience through the Newvion Community Platform.</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Investment Opportunities */}
        <FadeIn delay={0.3}>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-10 shadow-2xl h-full flex flex-col justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#FFD700]/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-3">Direct Equity & Seed</h2>
                <p className="text-lg text-white mb-6">
                  Newvion Boat Co. is actively raising seed capital to fund the deployment of its Moore Haven pilot boats. Gain direct equity participation in the platform operations.
                </p>
                <Link href="/" className="inline-block bg-white text-[#0d1b3e] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer self-start">
                  Request Prospectus
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col justify-center group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-3">Rural OZ Investment Summit</h2>
                <p className="text-lg text-white mb-6">
                  Join our premium, exclusive sessions for family offices and institutional capital. Gain direct access to high-quality rural OZ deal flow and 1:1 introductions to pre-qualified municipal leaders.
                </p>
                <div className="text-2xl font-light text-white mb-6">Limited Seating (15-40 Capacity)</div>
                <Link href="/" className="inline-block border border-[#FFD700] text-[#FFD700] font-bold text-lg px-8 py-3 rounded-full hover:bg-[#FFD700] hover:text-[#0d1b3e] transition-colors cursor-pointer self-start">
                  Reserve Your Seat
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Three-Engine Model */}
        <FadeIn delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[250px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/three_engine_model.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">The Three-Engine Economic Model</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] font-bold text-sm">1</div>
                    <div>
                      <h3 className="text-white font-semibold">Grant Funding</h3>
                      <p className="text-white text-sm">Federal RHTP, HRSA, USDA Rural Development — non-dilutive capital</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] font-bold text-sm">2</div>
                    <div>
                      <h3 className="text-white font-semibold">Resort Revenue</h3>
                      <p className="text-white text-sm">15M+ drive market generating commercial revenue from hospitality</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] font-bold text-sm">3</div>
                    <div>
                      <h3 className="text-white font-semibold">Investment Returns</h3>
                      <p className="text-white text-sm">OZ tax-free appreciation + E-2 turnkey businesses + Boat Fund</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
