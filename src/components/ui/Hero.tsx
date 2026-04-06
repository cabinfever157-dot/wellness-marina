"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden"
    >
      {/* Full-bleed Hero Image with Parallax */}
      <motion.div
        style={{ y: mounted ? y : 0 }}
        className="absolute inset-[-5%] w-[110%] h-[110%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/1.png')" }}
        />
      </motion.div>

      {/* Cinematic gradient overlays — NB Co style */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-[#020C1B]/40 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020C1B]/30 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold text-[#D4AF37] tracking-[0.3em] uppercase mb-6"
        >
          Moore Haven, Florida — April 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight max-w-5xl"
        >
          Rural Waterfront
          <br />
          <span className="text-gradient-gold italic pr-4">Reimagined</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-stone mt-6 max-w-xl leading-relaxed"
        >
          A permanent mixed-use wellness destination built entirely on the water.
          Healthcare, resort hospitality, and community — where rural meets extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="/communities"
            className="group relative inline-flex items-center gap-2 bg-[#D4AF37] text-[#020C1B] font-semibold px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 duration-500 cursor-pointer"
          >
            <span className="relative z-10">Explore the Marina</span>
            <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="/boats"
            className="group inline-flex items-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-500 cursor-pointer"
          >
            View the Boats
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-8 md:gap-16 mt-12 pt-8 border-t border-white/10"
        >
          {[
            { value: "11+", label: "Purpose-Built Boats" },
            { value: "$4M", label: "RHTP Grant Funding" },
            { value: "15M+", label: "Wellness Consumers" },
            { value: "Apr '26", label: "Pilot Launch" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-3xl font-bold text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-xs text-stone mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
