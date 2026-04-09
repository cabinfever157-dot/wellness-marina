"use client";

import { motion } from "framer-motion";

const ecosystemSections = [
  {
    title: "Healthcare is the Anchor",
    content: "Primary care, dental, mental health, pharmacy, and preventive services are delivered directly within the marina through partnerships with regional healthcare providers and FQHCs. Care is offered on a sliding scale or subsidized basis, ensuring access for those who need it most. Healthcare becomes part of daily life—not something delayed until crisis.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.977-2.95l.26-1.477m0 0a4.5 4.5 0 00-1.624-3.648 4.5 4.5 0 01.924-3.607m0 0a4.5 4.5 0 00-1.924-3.607 4.5 4.5 0 01-.924-3.607m0 0l.26-1.477m-2.977 2.95l-.26-1.477" />
      </svg>
    ),
    color: "teal",
  },
  {
    title: "The Resort is the Draw",
    content: "Hospitality, culinary, arts, and outdoor experiences create a true waterfront wellness destination, attracting visitors from across the region. Visitor-driven revenue helps fund and expand the healthcare mission, making the model financially sustainable.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    color: "amber",
  },
  {
    title: "A Connected Community Experience",
    content: "",
    items: [
      { label: "Food & Culinary", desc: "Nutrition, local farms, and dining" },
      { label: "Arts & Culture", desc: "Music, art, and community identity" },
      { label: "Retail & Business", desc: "Opportunities for local entrepreneurs" },
      { label: "Learning & Discovery", desc: "Universities, workforce, and education" },
      { label: "Hospitality & Recreation", desc: "Experiences that energize the community" },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "gold",
  },
];

const colorMap: Record<string, string> = {
  teal: "text-teal-400",
  amber: "text-amber-400",
  gold: "text-[#FFD700]",
};

const WellnessEcosystem = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background with glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FFD700]/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
              The Model
            </span>
            <div className="h-px w-12 bg-[#FFD700]/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Wellness Ecosystem
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Living Well — A Rural Community Platform
          </p>
          <p className="text-lg text-white mt-6 max-w-4xl mx-auto leading-relaxed">
            The Newvion Wellness Marina is built around one simple idea: Living Well. It is not a traditional resort and not a standalone healthcare facility. It is a community-first wellness ecosystem—bringing together healthcare, lifestyle, and economic development into one integrated waterfront destination designed for rural communities.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8">
          {ecosystemSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="rounded-[20%] border border-white/10 bg-white/[0.08] backdrop-blur-md overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Icon Section */}
                  <div className="lg:col-span-1 p-8 flex items-center justify-center bg-white/[0.03]">
                    <div className={`p-4 rounded-2xl ${section.color === 'teal' ? 'bg-teal-500/20' : section.color === 'amber' ? 'bg-amber-500/20' : 'bg-[#FFD700]/20'} ${colorMap[section.color]}`}>
                      {section.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-4 p-8 lg:p-12">
                    <h3 className={`text-2xl md:text-3xl font-bold ${colorMap[section.color]} mb-6`}>
                      {section.title}
                    </h3>
                    
                    {section.content && (
                      <p className="text-white text-lg leading-relaxed mb-6">
                        {section.content}
                      </p>
                    )}
                    
                    {section.items && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.items.map((item) => (
                          <div
                            key={item.label}
                            className="p-4 rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition-all duration-300"
                          >
                            <div className="text-[#FFD700] font-semibold mb-1">{item.label}</div>
                            <div className="text-white text-sm">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powered by Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="rounded-[20%] border border-[#FFD700]/30 bg-[#FFD700]/10 backdrop-blur-md p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Powered by Partnerships
            </h3>
            <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Universities, regional planning organizations, and healthcare providers work together to deliver care, training, and long-term community impact. This is more than a destination—it is a platform for rural health access and community revitalization.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#FFD700]/30" />
              <span className="text-[#FFD700] font-semibold text-lg">Living Well — The Outcome</span>
              <div className="h-px w-8 bg-[#FFD700]/30" />
            </div>
            <p className="text-white mt-4 text-sm">
              Healthcare is the anchor. The resort is the draw. Living well is the outcome.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WellnessEcosystem;