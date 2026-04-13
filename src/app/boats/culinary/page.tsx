import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function CulinaryPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/7.png')",  }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-400/50" />
              <span className="text-amber-400 text-xs font-medium tracking-[0.2em] uppercase">The Most Versatile Vessel</span>
              <div className="h-px w-8 bg-amber-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Culinary Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Food is the most powerful community connector. A triple-purpose model combining chronic disease nutrition education, waterfront dining, and premium private dining.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        {/* Triple Purpose Model */}
        <FadeIn>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-400/50" />
              <span className="text-amber-400 text-xs font-medium tracking-[0.3em] uppercase">Triple Purpose Model</span>
              <div className="h-px w-8 bg-amber-400/50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three Streams. One Mission.</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Three distinct revenue and mission streams operate simultaneously across the boat&apos;s floors — making it the most financially sustainable vessel in the marina.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🍳",
                title: "Community Kitchen",
                desc: "Group nutrition classes qualifying for RHTP and HRSA grant funding as a chronic disease intervention platform.",
                color: "border-amber-500/30",
                bgColor: "bg-amber-500/5",
              },
              {
                icon: "🍽️",
                title: "Waterfront Restaurant",
                desc: "Daily dining revenue that sustains the boat&apos;s healthcare mission when cooking classes are not in session.",
                color: "border-amber-500/30",
                bgColor: "bg-amber-500/5",
              },
              {
                icon: "🥂",
                title: "Chef's Table & Private Dining",
                desc: "Premium destination dining revenue that directly funds the clinical nutrition programs on board.",
                color: "border-amber-500/30",
                bgColor: "bg-amber-500/5",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border ${item.color} ${item.bgColor} backdrop-blur-md p-8 text-center group hover:bg-amber-500/10 transition-all duration-500`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Main Deck */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/8.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-amber-600 text-black shadow-amber-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Main Deck — Community Kitchen & Casual Dining</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Where Education Meets Experience</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  The heart of the Culinary Boat — designed to seamlessly convert from a cooking class environment to a restaurant service, with an open commercial demonstration kitchen that is fully equipped for both.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Open commercial demonstration kitchen, fully equipped for classes and restaurant service.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Flexible group class and dining seating for 14 to 18 people.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Built-in telehealth station within the teaching space, allowing a dietitian to connect live during nutrition classes.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Locally sourced ingredient station celebrating partnerships with local farms.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Full service and prep area with ADA-compliant restroom.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Second Floor */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/7.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-[#FFD700] text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Second Floor — Chef's Table & Nutrition Care</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Premium Dining Meets Clinical Care</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  An elevated level balancing premium, intimate dining with personalized clinical care — with a private staircase granting direct access to the rooftop pavilion.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Intimate Chef&apos;s Table seating 6 to 8 guests.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Private dining room for 10 to 14 — farm-to-table dinners, corporate retreats, special occasions.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Wine and beverage service, tasting menus, cooking demonstrations, and local farm dinner series.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Two private dietitian consultation rooms for one-on-one chronic disease counseling.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Telehealth dietitian station, university clinical nutrition intern workstation, and nutrition research station for measuring community health outcomes.</li>
                  <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✦</span> Private staircase to the rooftop pavilion — private dining guests move outside without passing through the main deck.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Rooftop Pavilion */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10">
            <div className="text-center mb-8">
                  <span className="bg-amber-600 text-black shadow-amber-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Rooftop Pavilion</span>
              <h2 className="text-3xl font-bold text-white mt-4 mb-4">Where the Marina Comes Alive</h2>
              <p className="text-white text-lg max-w-2xl mx-auto">
                Accessible from both the main deck and the second floor, the rooftop is an open-air terrace for outdoor waterfront dining, weekly farm-to-table community markets, cooking demonstrations, food festivals, and seasonal community dining events.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Impact */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Impact & Partnerships</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">4-8</div>
                <div className="text-white text-sm">Permanent Direct Jobs Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">Significant</div>
                <div className="text-white text-sm">Annual Healthcare Savings from Chronic Disease Prevention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">Local Farms</div>
                <div className="text-white text-sm">Partnered for USDA Rural Development qualification</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-r from-[#0d1b3e] via-[#162a5c]/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Taste the Difference</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                From community nutrition classes to waterfront fine dining — experience food as medicine on the water.
              </p>
              <Link href="/#boats" className="inline-block bg-amber-500 text-[#0d1b3e] font-bold text-lg px-8 py-4 rounded-full hover:bg-amber-400 transition-colors duration-300 cursor-pointer">
                Reserve a Table
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
