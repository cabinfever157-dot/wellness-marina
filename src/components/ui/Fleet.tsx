"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fleetItems = [
  {
    name: "Primary Care & Diagnostics",
    description: "Two exam rooms, chronic disease management, blood draws, EKGs, and telehealth hub on the upper deck.",
    href: "/fleet/primary-care",
    image: "/images/3.png",
    tag: "Healthcare",
    tagColor: "bg-blue-600/90 text-white shadow-blue-500/50 shadow-lg",
  },
  {
    name: "Oncology Boat",
    description: "Cancer screenings, early detection, telehealth consultations, and low-acuity infusion care with NorthStar Healthcare.",
    href: "/fleet/oncology",
    image: "/images/4.png",
    tag: "Specialty Care",
    tagColor: "bg-purple-600/90 text-white shadow-purple-500/50 shadow-lg",
  },
  {
    name: "Dermatology Boat",
    description: "Clinical skin cancer screenings and biopsies on the main deck, medical aesthetics on the second floor.",
    href: "/fleet/dermatology",
    image: "/images/5.png",
    tag: "Dual-Purpose",
    tagColor: "bg-emerald-600/90 text-white shadow-emerald-500/50 shadow-lg",
  },
  {
    name: "Vision Care Boat",
    description: "Fully-equipped optometry clinic with digital retinal imaging and diabetic retinopathy screening.",
    href: "/fleet/vision-care",
    image: "/images/6.png",
    tag: "Healthcare",
    tagColor: "bg-blue-600/90 text-white shadow-blue-500/50 shadow-lg",
  },
  {
    name: "Culinary Boat",
    description: "Triple-purpose: community nutrition classes, waterfront restaurant, and private Chef's Table dining.",
    href: "/fleet/culinary",
    image: "/images/7.png",
    tag: "Lifestyle",
    tagColor: "bg-amber-600/90 text-black shadow-amber-400/50 shadow-lg",
  },
  {
    name: "Studio Boat",
    description: "Professional podcast studio, video production suite, and social media workspace for community storytelling.",
    href: "/fleet/studio",
    image: "/images/8.png",
    tag: "Creative",
    tagColor: "bg-pink-600/90 text-white shadow-pink-500/50 shadow-lg",
  },
];

const Fleet = () => {
  return (
    <div className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]/50" />
          <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">
            The Fleet
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Eight Boats. One Marina.</h2>
        <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
          Each vessel is a purpose-built, multi-story platform — from clinical healthcare to culinary experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleetItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={item.href} className="group block h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-full transition-all duration-500 hover:border-[#FFD700]/30 hover:shadow-2xl hover:shadow-[#FFD700]/5">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${item.tagColor} shadow-lg`}>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                      {item.name}
                    </h3>
                    <svg
                      className="w-5 h-5 text-slate-500 mt-1 transition-all duration-300 group-hover:text-[#FFD700] group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Additional Boats Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-slate-400 text-sm">
          Plus Vision Wear Boutique and Live-Work Vision Care boats.{" "}
          <Link href="/fleet" className="text-[#FFD700] hover:underline cursor-pointer">
            View the complete fleet →
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Fleet;
