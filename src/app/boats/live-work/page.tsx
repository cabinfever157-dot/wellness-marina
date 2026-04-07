import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function LiveWorkPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/5.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-400/50" />
              <span className="text-teal-400 text-xs font-medium tracking-[0.2em] uppercase">E-2 Treaty Investor</span>
              <div className="h-px w-8 bg-teal-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Live-Work Boat</h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
              A turnkey combination of a clinical practice and a private waterfront residence — the ideal E-2 Treaty Investor qualifying asset.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/5.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-teal-600 text-white shadow-teal-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Main Deck — Clinical Suite</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Your Practice on the Water</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A fully equipped clinical suite — for example, two examination lanes, retinal imaging, and telehealth stations for vision care — operated by a licensed practitioner.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Fully equipped clinical practice.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Immediate patient pipeline from Rural Connect coalition.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Partnerships with local FQHCs and community health organizations.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Built-in audience through the Newvion ecosystem.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/6.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-[#FFD700] text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Upper Deck — Private Residence</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Your Waterfront Home</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A complete, private waterfront residence with a private entrance, kitchen, bedroom, and direct access to a private rooftop terrace for outdoor living.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Private entrance separate from the clinical suite.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Full kitchen and bedroom.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Private rooftop terrace for outdoor living.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Turnkey waterfront lifestyle for the practitioner.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">E-2 Treaty Investor Pathway</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">Premium</div>
                <div className="text-slate-400 text-sm">Boat Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">Flexible</div>
                <div className="text-slate-400 text-sm">Equipment & Fit-Out</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">E-2 Visa</div>
                <div className="text-slate-400 text-sm">US Residency via Active Business</div>
              </div>
            </div>
            <p className="text-slate-300 text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              International professionals — optometrists, therapists, chefs — seeking US residency through active business ownership. The Live-Work boat satisfies the &quot;active business&quot; requirement while providing a turnkey practice and home.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Live. Work. Thrive.</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Build your rural practice while enjoying a waterfront quality of life — all in one turnkey boat.
              </p>
              <Link href="/" className="inline-block bg-teal-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-teal-400 transition-colors duration-300 cursor-pointer">
                Explore E-2 Opportunities
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
