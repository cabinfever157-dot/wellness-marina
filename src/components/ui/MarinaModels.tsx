"use client";

import { motion } from "framer-motion";

const marinaModels = [
  {
    tier: "Small Marina",
    title: "Curated Foundation Model",
    description:
      "A carefully curated mix of core boats designed to establish a strong, welcoming waterfront experience.",
    items: [
      "Coffee / Café",
      "Pilates or Fitness",
      "Spa / Recovery",
      "Culinary or Food Boat",
      "Select Retail or Discovery Boats",
    ],
    badgeClass: "bg-[#FFD700]/60 text-[#020C1B] shadow-[#FFD700]/40 shadow-lg text-glow-gold-subtle",
  },
  {
    tier: "Medium Marina",
    title: "Connected Community Model",
    description:
      "A connected system of boats creating a full-day destination blending wellness, culinary, lifestyle, and creative experiences.",
    items: [
      "Expanded Wellness (Pilates, Spa, Fitness)",
      "Culinary + Coffee",
      "Retail + Marketplace",
      "Creative (Music, Art, Media)",
      "Office / Co-Working",
    ],
    badgeClass: "bg-[#FFD700]/90 text-black shadow-[#FFD700]/50 shadow-lg",
  },
  {
    tier: "Large Marina",
    title: "Fully Connected Destination Model",
    description:
      "A fully connected waterfront district designed as a regional or national destination.",
    items: [
      "Full Wellness & Lifestyle Ecosystem",
      "Expanded Culinary + Food Experiences",
      "Retail District on the Water",
      "Creative + Discovery Programming",
      "Office / Innovation + Media",
      "Hospitality (Hotel & Live-Work Boats)",
    ],
    badgeClass: "bg-[#D4AF37] text-[#020C1B] shadow-[#D4AF37]/60 shadow-lg",
  },
];

const MarinaModels = () => {
  return (
    <div className="relative py-32 pt-44 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFD700]/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
              Marina Models
            </span>
            <div className="h-px w-12 bg-[#FFD700]/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow-subtle">
            Scalable. Flexible.<br />Designed for Every Waterfront.
          </h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed text-glow-black">
            Newvion Wellness Marina is built as a modular system that can be deployed across a range of waterfront communities — from small pilot locations to full destination-scale developments. Each marina is tailored to its market, with the ability to scale, phase, and evolve over time through a series of curated and connected models.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {marinaModels.map((model, index) => (
            <motion.div
              key={model.tier}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.28] backdrop-blur-md p-10 h-full flex flex-col group hover:border-[#FFD700]/30 transition-all duration-700">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <span className={`${model.badgeClass} px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase w-fit`}>
                    {model.tier}
                  </span>
                  <h3 className="text-2xl font-bold text-[#FFD700] mt-5 mb-3 text-glow-gold-subtle">{model.title}</h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed flex-1 text-glow-black-light">{model.description}</p>
                  <div className="space-y-3">
                    {model.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-white text-sm text-glow-black-light">
                        <span className="text-[#FFD700]">✦</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.28] backdrop-blur-md p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-glow-subtle">Designed for Flexibility</h3>
            <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed mb-4 text-glow-black">
              Every Newvion Wellness Marina is designed through a detailed market and feasibility study. Boat types, program mix, phasing strategy, and operator opportunities are curated based on each community&apos;s needs.
            </p>
            <p className="text-white/70 text-base max-w-4xl mx-auto leading-relaxed text-glow-black-light italic">
              Each Newvion marina is a curated and connected environment, designed to reflect the character, needs, and opportunity of its community while operating within a proven, scalable system.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-8 bg-[#FFD700]/30" />
              <span className="text-[#FFD700] font-semibold text-sm tracking-wider uppercase text-glow-gold-subtle">Scalable by Design</span>
              <div className="h-px w-8 bg-[#FFD700]/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarinaModels;