import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function WellnessRetreatPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/Wellness_Retreat_Boat.png')", filter: "brightness(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-400/50" />
              <span className="text-teal-400 text-xs font-medium tracking-[0.2em] uppercase">Wellness Retreat</span>
              <div className="h-px w-8 bg-teal-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Wellness Retreat Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Immersive wellness programming — yoga, mindfulness, nutrition education, and spa treatments — all on the water, managed by Lum&apos;ais.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/3.png')" }} />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Immersive Wellness Programming</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  A dedicated wellness space offering curated retreat experiences — from weekend mindfulness intensives to week-long health transformation programs.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Yoga and mindfulness programming on the rooftop pavilion.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Nutrition education and chronic disease wellness classes.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Spa treatments and therapeutic wellness services.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Corporate wellness retreats and team-building programs.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Sustaining the Mission</h2>
            <p className="text-white text-center max-w-3xl mx-auto leading-relaxed">
              The Wellness Retreat Boat is a critical revenue engine — generating direct daily income from retreat packages, spa fees, and corporate bookings. This revenue sustains the clinical healthcare mission, ensuring the marina&apos;s long-term sustainability without endless grant dependency.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">Retreats</div>
                <div className="text-white text-sm">Weekend & week-long programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">Corporate</div>
                <div className="text-white text-sm">Team-building & wellness days</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">Spa</div>
                <div className="text-white text-sm">Therapeutic & wellness services</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Transform on the Water</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Join a wellness retreat that combines clinical expertise with the healing power of the waterfront.
              </p>
              <Link href="/" className="inline-block bg-teal-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-teal-400 transition-colors duration-300 cursor-pointer">
                Explore Retreats
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
