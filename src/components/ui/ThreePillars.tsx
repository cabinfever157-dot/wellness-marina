"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Wellness",
    description: "Permanent, grant-funded healthcare infrastructure delivered directly to the dock — primary care, mental health, chronic disease management, and specialty care.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    glowColor: "bg-teal-500/5",
  },
  {
    title: "Lifestyle",
    description: "Resort hospitality, culinary experiences, arts, and outdoor adventure that draw wellness travelers and stimulate the local economy.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    glowColor: "bg-amber-500/5",
  },
  {
    title: "Connection",
    description: "Shared spaces — rooftop pavilions, farmers markets, and community classes — that foster relationships and social health on the water.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "text-[#FFD700]",
    bgColor: "bg-[#FFD700]/10",
    borderColor: "border-[#FFD700]/20",
    glowColor: "bg-[#FFD700]/5",
  },
];

const ThreePillars = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]/50" />
          <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
            Designed for Living Well
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">Three Pillars.<br className="md:hidden" /> One Marina.</h2>
        <p className="text-lg text-white/40 mt-4 max-w-2xl mx-auto">
          Every boat, every space, every experience is built around wellness, lifestyle, and connection.
        </p>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Connector line between pillars */}
            {index < 2 && (
              <div className="hidden md:block absolute top-16 -right-4 w-8 h-px bg-gradient-to-r from-white/10 to-transparent z-20" />
            )}

            <div className={`relative rounded-3xl border ${pillar.borderColor} bg-white/[0.02] backdrop-blur-sm p-10 h-full transition-all duration-700 group-hover:bg-white/[0.05] group-hover:shadow-2xl`}>
              {/* Hover glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${pillar.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className={`p-4 rounded-2xl ${pillar.bgColor} ${pillar.color} inline-block mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                  {pillar.icon}
                </div>
                <h3 className={`text-3xl font-bold ${pillar.color} mb-6`}>{pillar.title}</h3>
                <p className="text-white/50 leading-relaxed text-lg">{pillar.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThreePillars;
