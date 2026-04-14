import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function OncologyPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Oncology_Boat.png')",  }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-purple-400/50" />
              <span className="text-purple-400 text-xs font-medium tracking-[0.2em] uppercase">Specialty Care</span>
              <div className="h-px w-8 bg-purple-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Oncology Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Early detection, screening, and survivorship support — bringing specialized cancer care to communities that need it most.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/Oncology_Boat.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4 text-glow-subtle">Comprehensive Cancer Support</h2>
                <p className="text-white text-lg leading-relaxed mb-6 text-glow-black">
                  Bringing oncology services to rural waterfronts.
                </p>
                <ul className="space-y-3 text-white text-glow-black-light">
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
          <div className="hidden">
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
<h2 className="text-3xl font-bold text-white mb-4 text-glow-subtle">Early Detection Saves Lives</h2>
               <p className="text-xl text-white max-w-2xl mx-auto mb-8 text-glow-black">
                Access cancer screenings, survivorship support, and oncology care — all on the water, close to home.
              </p>
              <Link href="/#boats" className="inline-block bg-purple-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-purple-400 transition-colors duration-300 cursor-pointer">
                Learn About Access
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
