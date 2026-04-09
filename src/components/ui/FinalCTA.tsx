"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/80 to-[#0d1b3e]" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FFD700]/50" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FFD700]/50" />
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Ready to Build the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#4ECDC4]">
            Future of Rural America?
          </span>
        </h2>

        <p className="text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed">
          Moore Haven launches April 2026. Allegan is next. Where will the marina go after that?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/communities"
            className="group relative inline-flex items-center gap-3 bg-[#FFD700] text-[#0d1b3e] font-bold text-lg px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD700]/30 cursor-pointer"
          >
            <span className="relative z-10">Request a Vision Plan</span>
            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <Link
            href="/#boats"
            className="inline-flex items-center gap-3 border border-white/15 text-white font-medium text-lg px-12 py-6 rounded-full hover:border-[#FFD700]/40 hover:bg-white/5 transition-all duration-500 cursor-pointer"
          >
            Explore the Boats
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
