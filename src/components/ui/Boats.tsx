"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const boatItems = [
  {
    name: "Primary Care & Diagnostics",
    description: "Full clinic with two exam rooms, chronic disease management, blood draws, EKGs, and telehealth hub.",
    href: "/boats/primary-care",
    image: "/images/3.png",
    tag: "Healthcare",
    tagColor: "bg-blue-600/90 text-white shadow-blue-500/50 shadow-lg",
  },
  {
    name: "Mental Health Boat",
    description: "Powered by Mentavi Health. Soundproofed counseling rooms, private check-in, rooftop yoga pavilion.",
    href: "/boats/mental-health",
    image: "/images/Mental_Wellness_1.png",
    tag: "Wellness",
    tagColor: "bg-teal-600/90 text-white shadow-teal-500/50 shadow-lg",
  },
  {
    name: "Oncology Boat",
    description: "Cancer screenings, early detection, telehealth, and low-acuity infusion care with NorthStar Healthcare.",
    href: "/boats/oncology",
    image: "/images/4.png",
    tag: "Specialty Care",
    tagColor: "bg-purple-600/90 text-white shadow-purple-500/50 shadow-lg",
  },
  {
    name: "Dermatology Boat",
    description: "Skin cancer screenings on main deck, medical aesthetics and skin wellness spa on second floor.",
    href: "/boats/dermatology",
    image: "/images/5.png",
    tag: "Dual-Purpose",
    tagColor: "bg-emerald-600/90 text-white shadow-emerald-500/50 shadow-lg",
  },
  {
    name: "Vision Care Boat",
    description: "Optometry clinic with digital retinal imaging and diabetic retinopathy screening.",
    href: "/boats/vision-care",
    image: "/images/6.png",
    tag: "Healthcare",
    tagColor: "bg-blue-600/90 text-white shadow-blue-500/50 shadow-lg",
  },
  {
    name: "Vision Wear Boutique",
    description: "Curated optical boutique — prescription frames, sunglasses, readers. Rooftop deck for natural light testing.",
    href: "/boats/vision-wear-boutique",
    image: "/images/6.png",
    tag: "Retail",
    tagColor: "bg-amber-600/90 text-black shadow-amber-400/50 shadow-lg",
  },
  {
    name: "Live-Work Boat",
    description: "Clinical practice + private waterfront residence. Ideal E-2 Treaty Investor qualifying asset.",
    href: "/boats/live-work",
    image: "/images/5.png",
    tag: "E-2 Investor",
    tagColor: "bg-teal-600/90 text-white shadow-teal-500/50 shadow-lg",
  },
  {
    name: "Culinary Boat",
    description: "Triple-purpose: community nutrition classes, waterfront restaurant, and private Chef's Table.",
    href: "/boats/culinary",
    image: "/images/7.png",
    tag: "Lifestyle",
    tagColor: "bg-amber-600/90 text-black shadow-amber-400/50 shadow-lg",
  },
  {
    name: "Studio Boat",
    description: "Podcast studio, video production, social media workspace. Partnered with FGCU.",
    href: "/boats/studio",
    image: "/images/studio_boat.png",
    tag: "Creative",
    tagColor: "bg-pink-600/90 text-white shadow-pink-500/50 shadow-lg",
  },
  {
    name: "Boutique Hotel Boat",
    description: "Waterfront resort experience managed by Lum'ais. Spa, retreats, and corporate events.",
    href: "/boats/boutique-hotel",
    image: "/images/2.jpg",
    tag: "Hospitality",
    tagColor: "bg-purple-600/90 text-white shadow-purple-500/50 shadow-lg",
  },
  {
    name: "Wellness Retreat Boat",
    description: "Immersive wellness programming — yoga, mindfulness, nutrition, and spa treatments on the water.",
    href: "/boats/wellness-retreat",
    image: "/images/3.png",
    tag: "Wellness",
    tagColor: "bg-teal-600/90 text-white shadow-teal-500/50 shadow-lg",
  },
];

const Boats = () => {
  return (
    <div className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]/50" />
          <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
            The Boats
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">Eleven Boats.<br className="md:hidden" /> One Marina.</h2>
        <p className="text-lg text-white/40 mt-4 max-w-2xl mx-auto">
          Each vessel is a purpose-built, multi-story platform — from clinical healthcare to culinary experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {boatItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={item.href} className="group block h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm h-full transition-all duration-700 hover:border-[#FFD700]/20 hover:shadow-2xl hover:shadow-[#FFD700]/5 group-hover:bg-white/[0.04]">
                {/* Image — bright by default */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      filter: "brightness(1.15) saturate(1.2)",
                    }}
                  />
                  {/* Minimal gradient — only at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-transparent to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <svg
                      className="w-5 h-5 text-white/20 mt-1 transition-all duration-300 group-hover:text-[#FFD700] group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <p className="text-white/40 mt-3 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/0 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-700" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link href="/boats" className="text-[#FFD700] hover:underline cursor-pointer text-sm font-medium">
          View all 11 boats →
        </Link>
      </motion.div>
    </div>
  );
};

export default Boats;
