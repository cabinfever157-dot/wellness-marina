import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function BoutiqueHotelPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/2.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-purple-400/50" />
              <span className="text-purple-400 text-xs font-medium tracking-[0.2em] uppercase">Managed by Lum'ais</span>
              <div className="h-px w-8 bg-purple-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Boutique Hotel & Wellness Retreat Boats</h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
              A boutique waterfront resort experience — authentic, unhurried wellness with unique marina views, managed entirely by Lum&apos;ais.
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
                <h2 className="text-3xl font-bold text-white mb-4">Waterfront Resort Experience</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Hotel furnishings, spa treatment rooms, and specialized wellness equipment — designed to feel like an authentic, unhurried wellness destination with unique marina views.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Boutique hotel rooms with waterfront views.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Spa treatment rooms and wellness programming.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Wellness retreat packages and corporate event bookings.</li>
                  <li className="flex items-start"><span className="text-purple-400 mr-3 mt-1">✦</span> Managed entirely by Lum&apos;ais — premier wellness hospitality operator.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Engine 2: Resort & Recreation Revenue</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">$400K-$800K</div>
                <div className="text-slate-400 text-sm">Physical Boat Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">$100K-$250K</div>
                <div className="text-slate-400 text-sm">Equipment & Fit-Out</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Lum'ais</div>
                <div className="text-slate-400 text-sm">Full Hospitality Management</div>
              </div>
            </div>
            <p className="text-slate-300 text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              These boats generate direct daily revenue through nightly rates, wellness retreat packages, corporate event bookings, and spa programming fees — a critical piece of the marina&apos;s long-term sustainability without endless grant dependency.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Escape to the Marina</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Experience an authentic, unhurried waterfront wellness retreat — where healthcare meets hospitality.
              </p>
              <Link href="/" className="inline-block bg-purple-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-purple-400 transition-colors duration-300 cursor-pointer">
                Learn About Retreats
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
