"use client";

import { Marquee } from "./marquee";

const stats = [
  { value: "83%", label: "Cite Transport as Barrier to Care" },
  { value: "0", label: "Local Dental / Dermatology / Vision Providers" },
  { value: "40-75", label: "Permanent Jobs Created Per Marina" },
  { value: "$3M-$12M", label: "Annual Healthcare Savings" },
  { value: "15M+", label: "Wellness Consumers in Drive Market" },
  { value: "Qualified", label: "Opportunity Zone" },
];

const partners = [
  "Mentavi Health",
  "NorthStar Healthcare",
  "Hendry Regional Medical Center",
  "Florida Gulf Coast University",
  "Glades County",
  "City of Moore Haven",
  "SWFRPC",
  "East Coast Houseboats",
];

export default function StatsMarquee() {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Stats Row */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#FFD700]/30" />
          <span className="text-[#FFD700]/60 text-xs font-medium tracking-[0.3em] uppercase">
            The Impact
          </span>
          <div className="h-px w-8 bg-[#FFD700]/30" />
        </div>
        <Marquee pauseOnHover className="[--duration:30s]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/5 bg-white/[0.30] backdrop-blur-sm mx-2"
            >
              <div className="text-2xl font-bold text-[#FFD700] whitespace-nowrap">{stat.value}</div>
              <div className="text-xs text-white max-w-[160px] leading-tight">{stat.label}</div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Partners Row */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-white/10" />
          <span className="text-white text-xs font-medium tracking-[0.3em] uppercase">
            Strategic Partners
          </span>
          <div className="h-px w-8 bg-white/10" />
        </div>
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {partners.map((partner) => (
            <div
              key={partner}
              className="px-8 py-3 rounded-full border border-white/5 text-white text-sm font-medium whitespace-nowrap mx-2 hover:text-white hover:border-white/10 transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
