import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function DermatologyPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/5.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-400/50" />
              <span className="text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase">Dual-Purpose Model</span>
              <div className="h-px w-8 bg-emerald-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Dermatology Boat</h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
              Clinical dermatology funded by a second-floor medical aesthetics and skin wellness spa — healthcare sustained by resort revenue.
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
                  style={{ backgroundImage: "url('/images/5.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Main Deck — Clinical Dermatology</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Skin Cancer Screening & Care</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Essential dermatological services for rural communities where access to skin specialists is virtually non-existent.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Clinical skin cancer screenings.</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Biopsies and lesion removal.</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Teledermatology consultations.</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Chronic skin condition management.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/6.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-[#FFD700]/20 text-[#FFD700] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Second Floor — Medical Aesthetics</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Revenue-Generating Wellness Spa</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A medical aesthetics and skin wellness spa for resort guests — the revenue from which sustains the clinical dermatology services below.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Medical-grade skincare treatments.</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Anti-aging and cosmetic procedures.</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Wellness spa services for marina visitors.</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-3 mt-1">✦</span> Revenue directly funds clinical care on the main deck.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Clinical Care Meets Wellness</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Where essential skin cancer screening is funded by premium wellness experiences — a sustainable model for rural healthcare.
              </p>
              <Link href="/" className="inline-block bg-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors duration-300 cursor-pointer">
                Learn About Access
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
