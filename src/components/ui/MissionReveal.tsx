"use client"

import { motion } from "framer-motion"

export default function MissionReveal() {
  return (
    <section className="relative py-32 px-6 lg:px-12">
      {/* Subtle 10% glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-white/5 via-[#D4AF37]/8 to-white/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Gold label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-6"
        >
          Our Mission
        </motion.p>

        {/* Cinematic heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
        >
          Designed for <span className="text-gradient-gold italic">Living Well</span>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-8 origin-left"
        />

        {/* Mission statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-stone leading-relaxed max-w-3xl"
        >
          Newvion is the origination engine that connects towns to capital, audience, and vision. We identify overlooked rural waterfront and countryside communities and provide them with the infrastructure to attract capital, audiences, and businesses. From conversation to executable reality.
        </motion.p>
      </div>
    </section>
  )
}
