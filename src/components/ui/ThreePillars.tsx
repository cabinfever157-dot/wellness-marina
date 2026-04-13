"use client";

import { motion } from "framer-motion";

const ThreePillars = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/2 rounded-full blur-[150px]" />

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
        <h2 className="text-4xl md:text-6xl font-bold text-white">Experience the Wellness Connected Marina.</h2>
        <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
          Every boat, every space, every experience is built around wellness, lifestyle, and connection.
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-12"
        >
          <img
            src="/images/dock.jpg"
            alt="Dock at Wellness Marina"
            className="w-full max-h-[600px] rounded-[25%] object-contain object-center"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ThreePillars;