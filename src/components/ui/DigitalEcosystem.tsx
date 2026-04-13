"use client";

import { motion } from "framer-motion";

const DigitalEcosystem = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/[0.02] to-transparent" />

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
            Digital Ecosystem
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">Beyond the Water</h2>
        <p className="text-lg text-white mt-4 max-w-3xl mx-auto">
          A national digital platform connecting rural communities to premium experiences.
        </p>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#FFD700]/10 bg-white/[0.30] backdrop-blur-sm p-10 h-full group hover:border-[#FFD700]/30 transition-all duration-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#FFD700]/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#FFD700] text-glow-black-light">Newvion Club</h3>
              </div>
              <blockquote className="text-white text-lg leading-relaxed italic mb-4 text-glow-black-light">
                &ldquo;Think American Express Centurion for the rural American experience.&rdquo;
              </blockquote>
              <p className="text-white leading-relaxed text-glow-black-light">
                A premium lifestyle membership providing access to live programming, culinary salons, wellness classes, and online concerts.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white text-glow-black-light">
                <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                <span>Digital-first, expanding to physical city events</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/10 bg-white/[0.30] backdrop-blur-sm p-10 h-full group hover:border-blue-500/30 transition-all duration-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-blue-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-400 text-glow-black-light">Rural Health Studios</h3>
              </div>
              <p className="text-white text-lg leading-relaxed mb-4 text-glow-black-light">
                Health and wellness programming for underserved communities.
              </p>
              <p className="text-white leading-relaxed text-glow-black-light">
                Newvion Connect is a digital platform that brings people together through place-based experiences — live and on-demand classes, wellness programs, and community gatherings hosted by trusted creators. It extends the marina's reach beyond the water with a shared community calendar, livestream access, on-demand content library, and partner storytelling.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-white text-glow-black-light">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>Coalition-driven, grant-funded, community-first</span>
                </div>
                <a
                  href="https://newvion.com/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Explore Newvion Connect
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalEcosystem;
