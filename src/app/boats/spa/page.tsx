import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function SpaBoatPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/2.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-rose-400/50" />
              <span className="text-rose-400 text-xs font-medium tracking-[0.2em] uppercase">Wellness on the Water</span>
              <div className="h-px w-8 bg-rose-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Spa Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Luxury spa treatments and relaxation therapies with stunning waterfront views — your sanctuary on the marina.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/2.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Luxury Spa Experience</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Indulge in premium spa treatments while enjoying the serene ambiance of being on the water. Our spa boat offers a unique escape from everyday life.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-rose-400 mr-3 mt-1">✦</span> Massage therapy — Swedish, deep tissue, and hot stone.</li>
                  <li className="flex items-start"><span className="text-rose-400 mr-3 mt-1">✦</span> Hydrotherapy pools and steam rooms.</li>
                  <li className="flex items-start"><span className="text-rose-400 mr-3 mt-1">✦</span> Relaxation lounges with panoramic marina views.</li>
                  <li className="flex items-start"><span className="text-rose-400 mr-3 mt-1">✦</span> Signature facials and skincare treatments.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Spa Boat Details</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-rose-400 mb-2">3 Floors</div>
                <div className="text-white/70 text-sm">Treatment & Relaxation Spaces</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-400 mb-2">Rooftop Deck</div>
                <div className="text-white/70 text-sm">Open-Air Relaxation Lounge</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-400 mb-2">Daily</div>
                <div className="text-white/70 text-sm">Spa Services Available</div>
              </div>
            </div>
            <p className="text-white text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              Whether you seek therapeutic relaxation, a romantic escape, or a restorative wellness retreat, the Spa Boat delivers an unforgettable experience on the water.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Book Your Spa Experience</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Escape to tranquility on the water — treatments available daily.
              </p>
              <Link href="/" className="inline-block bg-rose-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-rose-400 transition-colors duration-300 cursor-pointer">
                Learn About Wellness
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
