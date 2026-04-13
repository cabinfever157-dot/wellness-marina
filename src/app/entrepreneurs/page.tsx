import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function EntrepreneursPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/7.png')" }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">For Entrepreneurs</span>
              <div className="h-px w-8 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Launch Your Business on the Water</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Turnkey live-work boats — pilates, culinary, studio & more. Bypass the crippling overhead of traditional commercial real estate.
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
                <h2 className="text-3xl font-bold text-white mb-3">Capital-Efficient Ownership</h2>
                <div className="text-[#FFD700] text-2xl font-light mb-6">Turnkey Assets</div>
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow">
                  Avoid zoning headaches, massive build-out costs, and construction delays by launching a mobile, scalable waterfront business with a standard 50&apos;-0&quot; x 15&apos;-9&quot; footprint.
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Immediate physical activation with multi-level floating assets.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Strategic manufacturing partnership with East Coast Houseboats LLC.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Favorable 3% lease financing available to qualified operators.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Modular design scales from culinary kitchens to medical clinics.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Break-even requiring only 15-20 hours of work per week.</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-3">The Complete License Package</h2>
                <div className="text-[#FFD700] text-2xl font-light mb-6">More Than Just a Boat</div>
                <p className="text-white mb-8 text-lg leading-relaxed flex-grow">
                  You aren&apos;t just buying maritime real estate — you&apos;re acquiring a proven, curated business model with an integrated digital marketing platform.
                </p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Full Newvion brand identity, logo usage, and standards guide.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Pre-configured equipment packages (e.g., Pilates studio with Technogym).</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Integrated Starlink, networking, and streaming systems.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Direct integration into the Newvion national digital marketing ecosystem.</li>
                  <li className="flex items-start"><span className="text-[#FFD700] mr-4 mt-1">✦</span> Built-in audience through the Newvion Club network.</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Boat Concepts Preview */}
        <FadeIn delay={0.3}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[250px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/4.png')" }}
                />
                
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Curating Boat Concepts. One Ecosystem.</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  From Pilates studios and culinary kitchens to podcast suites and healthcare clinics — each boat is a turnkey business designed for career reinventors, lifestyle entrepreneurs, and E-2 treaty investors.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Healthcare", "Retail", "Lifestyle", "Discovery", "Hotel"].map((cat) => (
                    <span key={cat} className="px-4 py-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium">{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#FFD700]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Anchor Your Future?</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Explore our portfolio of pre-engineered business concepts and find the perfect vessel for your entrepreneurial journey.
              </p>
              <Link href="/" className="inline-block bg-[#FFD700] text-[#0d1b3e] font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 cursor-pointer">
                Apply for a License
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
