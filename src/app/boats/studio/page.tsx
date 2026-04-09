import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function StudioPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/studio_boat.png')", filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-pink-400/50" />
              <span className="text-pink-400 text-xs font-medium tracking-[0.2em] uppercase">The Voice of Rural Communities</span>
              <div className="h-px w-8 bg-pink-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">The Innovation Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              A professional digital media hub for podcasting, video production, and community storytelling — amplifying rural voices through the Rural Connect platform.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        {/* Production Facilities */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/studio_boat.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-pink-600 text-white shadow-pink-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Production Facilities</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Professional Content Creation</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  The Innovation Boat provides local entrepreneurs, small businesses, and community storytellers with professional content creation tools they typically cannot access.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Professional podcast and audio recording studio.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Video and film production suite.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Workspaces for social media and digital content creation.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Podcast table, interview lounge, and reception desk.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Light hospitality prep area.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Rooftop Pavilion */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/8.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-[#FFD700] text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Rooftop Pavilion</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Open-Air Broadcast Space</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  A unique open-air broadcast and filming space with the marina as a living backdrop — serving as a community gathering space for live recordings, small business showcases, and events.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Open-air broadcast and filming with marina views.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Live recordings and community events.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Small business showcases.</li>
                  <li className="flex items-start"><span className="text-pink-400 mr-3 mt-1">✦</span> Community gathering and storytelling space.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Digital Hub Role */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Marina&apos;s Digital Hub</h2>
                <p className="text-white text-lg leading-relaxed">
                  Within the marina, the Innovation Boat acts as a central digital hub that captures, produces, and distributes health, culinary, and workforce programming from the other Newvion boats — amplifying their reach through the Rural Connect platform.
                </p>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/8.png')" }}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-pink-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Amplify Your Story</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Access professional content creation tools and amplify your community&apos;s voice through the Rural Connect platform.
              </p>
              <Link href="/" className="inline-block bg-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-pink-400 transition-colors duration-300 cursor-pointer">
                Get Involved
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
