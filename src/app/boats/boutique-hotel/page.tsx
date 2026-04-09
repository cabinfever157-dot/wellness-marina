import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function BoutiqueHotelPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/boutique_hotel_final.png')", filter: "brightness(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-purple-400/50" />
              <span className="text-purple-400 text-xs font-medium tracking-[0.2em] uppercase">Managed by Lum'ais</span>
              <div className="h-px w-8 bg-purple-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Boutique Hotel & Wellness Retreat Boats</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              A boutique waterfront resort experience — authentic, unhurried wellness with unique marina views, managed entirely by Lum&apos;ais.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden rounded-l-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1177737915?title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d1b3e]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Waterfront Resort Experience</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Hotel furnishings, spa treatment rooms, and specialized wellness equipment — designed to feel like an authentic, unhurried wellness destination with unique marina views.
                </p>
                <ul className="space-y-3 text-white">
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
                <div className="text-3xl font-bold text-purple-400 mb-2">Vessel</div>
                <div className="text-white/70 text-sm">Physical Boat Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Premium</div>
                <div className="text-white/70 text-sm">Equipment & Fit-Out</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Lum'ais</div>
                <div className="text-white/70 text-sm">Full Hospitality Management</div>
              </div>
            </div>
            <p className="text-white text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              These boats generate direct daily revenue through nightly rates, wellness retreat packages, corporate event bookings, and spa programming fees — a critical piece of the marina&apos;s long-term sustainability without endless grant dependency.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Escape to the Marina</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
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
