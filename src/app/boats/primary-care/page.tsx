import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function PrimaryCarePage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/3.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400/50" />
              <span className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase">Healthcare Anchor</span>
              <div className="h-px w-8 bg-blue-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Primary Care & Diagnostics Boat</h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
              The clinical foundation of the marina — bringing essential preventative and routine healthcare directly to the dock.
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
                  style={{ backgroundImage: "url('/images/3.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Main Deck — Clinical Services</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Full-Service Primary Care</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A complete primary care clinic eliminating transportation barriers for rural residents who would otherwise go without.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Two fully-equipped exam rooms.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Chronic disease management (diabetes, hypertension, heart disease).</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Blood draws and lab services on-site.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> EKGs and cardiac diagnostics.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Routine physicals and preventative screenings.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-[#FFD700]/20 text-[#FFD700] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">Upper Deck — Telehealth & Education</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Telehealth Hub & Health Education</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  The upper deck extends care beyond the exam room with a telehealth hub connecting patients to specialists nationwide, and a health education classroom for community wellness programming.
                </p>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/4.png')" }}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Healthcare at the Dock</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Access primary care, diagnostics, and telehealth — all on the water, eliminating the barriers that keep rural communities from getting the care they need.
              </p>
              <Link href="/" className="inline-block bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
                Learn About Access
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
