import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/8.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">For Sponsors</span>
              <div className="h-px w-8 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Reach Authentic Rural Markets</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Community-embedded rural market access that traditional advertising cannot replicate. Each sponsored boat is both a revenue-generating asset and a branded partnership vehicle.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-3">Physical Boat Naming Rights</h2>
                <div className="text-[#FFD700] text-2xl font-light mb-6">Build Offsets Available</div>
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow">
                  National and regional brands can sponsor individual live-work boat concepts, securing naming rights, co-branding, and product placement, while actively funding health and economic development.
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Pharmacy & Healthcare:</strong> Perrigo, Bayer, CVS Health, regional health systems.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Dental:</strong> Colgate, Aspen Dental, equipment brands.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Culinary:</strong> Food/beverage brands, kitchen equipment, regional grocers.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Pilates & Wellness:</strong> Athletic apparel, fitness equipment, spa brands.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Creator & Podcast:</strong> Technology, microphone, and camera companies.</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-3">Digital Ecosystem Sponsorships</h2>
                <div className="text-[#FFD700] text-2xl font-light mb-6">Tiered Sponsorship Options</div>
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow">
                  Directly fund access to critical health content for underserved populations through our Rural Connect platform. 83% of rural residents cite transportation as a barrier to care.
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Community Champion:</strong> 416 free memberships + content series naming rights.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Health Partner:</strong> 166 free memberships + primary logo placement.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Program Supporter:</strong> 83 free memberships + featured local listing.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Event Sponsor:</strong> Underwrites one live community health event.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> <strong>Webinar Underwriting:</strong> Brand in front of a national audience of city managers.</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Impact Stats */}
        <FadeIn delay={0.3}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "83%", label: "Cite Transport as Barrier to Care" },
                { value: "15M+", label: "People in Drive Market" },
                { value: "RHTP", label: "Grant Proposal" },
                { value: "7", label: "Specialized Healthcare Boats" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD700]">{stat.value}</div>
                  <div className="text-sm text-white mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#FFD700]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Align With Impact</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Move beyond standard CSR initiatives. Integrate your brand directly into the physical and digital infrastructure transforming America&apos;s rural waterfronts.
              </p>
              <Link href="/" className="inline-block bg-[#FFD700] text-[#0d1b3e] font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 cursor-pointer">
                Download Sponsorship Deck
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
