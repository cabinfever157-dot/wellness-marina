import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function OncologyPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/4.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-purple-400/50" />
              <span className="text-purple-400 text-xs font-medium tracking-[0.2em] uppercase">Specialty Care</span>
              <div className="h-px w-8 bg-purple-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Oncology Boat</h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
              Early detection, screening, and survivorship support — bringing specialized cancer care to communities that need it most.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/4.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Cancer Support</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A pilot with NorthStar Healthcare and Hendry Regional Medical Center bringing oncology services to rural waterfronts.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Cancer screenings and early detection programs.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Telehealth oncology consultations.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Low-acuity infusion care.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Survivorship support and emotional care.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Oncology navigation for rural patients.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Partnership Network</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="p-4 rounded-xl bg-purple-500/10 inline-block mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">NorthStar Healthcare</h3>
                <p className="text-slate-400 text-sm">Specialized oncology expertise and clinical protocols.</p>
              </div>
              <div className="text-center">
                <div className="p-4 rounded-xl bg-blue-500/10 inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hendry Regional Medical Center</h3>
                <p className="text-slate-400 text-sm">Local hospital partnership for referrals and coordinated care.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Early Detection Saves Lives</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Access cancer screenings, survivorship support, and oncology care — all on the water, close to home.
              </p>
              <Link href="/" className="inline-block bg-purple-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-purple-400 transition-colors duration-300 cursor-pointer">
                Learn About Access
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
