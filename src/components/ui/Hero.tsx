"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        {/* Cinematic Video Background - removed opacity animation */}
        <motion.div
          className="absolute inset-[-5%] w-[110%] h-[110%]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/1.png')" }}
          />
        </motion.div>

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-[#020C1B]/40 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020C1B]/30 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Left Column - Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-bold text-[#D4AF37] tracking-[0.3em] uppercase mb-16"
              >
                Moore Haven, Florida — April 2026
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight max-w-5xl text-white"
              >
                Rural Waterfront
                <br />
                <span className="text-gradient-gold italic pr-4">Reimagined</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-white mt-6 max-w-xl leading-relaxed"
              >
                A mixed-use wellness destination built entirely on the water.
                Healthcare, hospitality, community, a place where people gather, heal, create and connect — designed for living well.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <button
                  onClick={() => setShowVideo(true)}
                  className="group relative inline-flex items-center gap-2 bg-[#D4AF37] text-[#020C1B] font-semibold px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 duration-500 cursor-pointer"
                >
                  <span className="relative z-10">Explore the Marina</span>
                  <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                <a
                  href="/Newvion_Wellness_Marina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-500 cursor-pointer"
                >
                  The Vision
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
                  { value: "11+", label: "Curated Boats" },
                  { value: "100", label: "Wellness Consumers" },
                  { value: "Apr '26", label: "Pilot Launch" },
                ].map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="text-3xl font-bold text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white mt-1 tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Vimeo Video Embed */}
            <div className="hidden lg:block -mt-[100%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/20 border border-white/10 w-[75%] ml-auto"
              >
                <div className="aspect-[16/9]">
                  <iframe
                    src="https://player.vimeo.com/video/1181596648?title=0&byline=0&portrait=0"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            onClick={() => setShowVideo(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-[#D4AF37]/20 rounded-3xl blur-xl" />
              
              {/* Video wrapper */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/20 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none" />
                <div className="aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/1174564693?title=0&byline=0&portrait=0&autoplay=1"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-center"
              >
                <p className="text-white text-sm tracking-wide">The Newvion Wellness Marina Vision</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;