import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function MentalHealthPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Mental_Health.png')",  }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-400/50" />
              <span className="text-teal-400 text-xs font-medium tracking-[0.2em] uppercase">Powered by Mentavi Health</span>
              <div className="h-px w-8 bg-teal-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Mental Health Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              A sanctuary on the water — bridging critical care gaps with evidence-based mental health diagnosis and treatment in a stigma-free environment.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        {/* Mentavi Partnership */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-white/25 backdrop-blur-md p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-teal-600 text-white shadow-teal-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Powered by Mentavi Health</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Grand Rapids-Based, Serving 40+ States</h2>
                <p className="text-white text-lg leading-relaxed">
                  Founded in 2018 as ADHD Online, Mentavi Health provides evidence-based mental health diagnosis and treatment across the country. The Mental Health Boat serves as a physical extension of Mentavi&apos;s digital platform, bringing their established network of clinicians directly into rural community spaces that pure home-based telehealth cannot effectively reach.
                </p>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/Mental_Health.png')" }}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Main Deck - Private Clinical Care */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/Confidential_Compassionate_Care.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-teal-600 text-white shadow-teal-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Main Deck — Private Clinical Care</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Confidential, Compassionate Care</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Three private, soundproofed counseling rooms designed for complete confidentiality, with a discreet private check-in area that eliminates the need for an open waiting room.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Individual therapy with doctorate-level psychologists.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Medical treatment visits for ADHD, anxiety, and depression.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Diagnostic evaluations covering up to 29 mental health conditions.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Soundproofed rooms for complete privacy.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> No traditional waiting room — discreet private check-in.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Upper Deck - Community & Employer Wellness */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/Mental_Wellness_3.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white shadow-blue-400/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Upper Deck — Community & Employer Wellness</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Wellness Hub</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  A preventative wellness floor offering screening, coaching, and employer benefit programming — making mental health care accessible before it becomes a crisis.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Mentavi Mental Wellness Snapshot — screening across 15 clinically validated conditions.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Mental wellness coaching and sleep coaching.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Employer benefit mental health programming.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Support services for university students.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mentavi Services */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Mentavi Health Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Individual Therapy", desc: "Doctorate-level psychologists providing evidence-based treatment for a wide range of conditions." },
                { title: "Medical Treatment", desc: "Clinical care for ADHD, anxiety, depression, and diagnostic evaluations covering up to 29 mental health conditions." },
                { title: "Wellness Programs", desc: "Mental Wellness Snapshot screening across 15 conditions, sleep coaching, employer benefits, and university student support." },
              ].map((service) => (
                <div key={service.title} className="rounded-xl border border-teal-500/10 bg-teal-500/5 p-6 text-center hover:bg-teal-500/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">{service.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Rooftop Pavilion */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/25 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/Mental_Wellness_4.png')" }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-[#FFD700] text-black shadow-[#FFD700]/50 shadow-lg px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">Rooftop Pavilion</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">The Most Important Feature</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  An open-air waterfront deck that allows people to gather in a welcoming environment — meaning they never have to walk directly through a clinical door to begin their wellness journey.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Yoga and mindfulness programming.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Peer support groups.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Community wellness events.</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1">✦</span> Stigma-free gathering space overlooking the marina.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Design Philosophy */}
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-white/25 backdrop-blur-md p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Designed to Destigmatize</h2>
                <p className="text-white text-lg leading-relaxed">
                  Every design choice on the Mental Health Boat is purposefully crafted to remove the stigma of seeking help. From soundproofed rooms to the absence of a traditional waiting area, the boat creates a calming, private environment where rural residents can access the care they need without judgment.
                </p>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/Mental_Wellness_5.png')" }}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Additional Gallery */}
        <FadeIn>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Mental_Wellness_6.png')" }}
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Mental_Health.png')" }}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Wellness Starts Here</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Access evidence-based mental health care in a welcoming, stigma-free environment on the water.
              </p>
              <Link href="/#boats" className="inline-block bg-teal-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-teal-400 transition-colors duration-300 cursor-pointer">
                Learn About Access
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
