"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [phase, setPhase] = useState<"video" | "text1" | "text2" | "logo" | "hold" | "fade">("video");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("text1"), 1000),
      setTimeout(() => setPhase("text2"), 2200),
      setTimeout(() => setPhase("logo"), 3400),
      setTimeout(() => setPhase("hold"), 4400),
      setTimeout(() => setPhase("fade"), 6400),
      setTimeout(() => onComplete(), 7400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] bg-[#020C1B] overflow-hidden"
    >
      {/* Video - ONLY the video fades in, nothing else */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020C1B]/60 z-10" />

      {/* All content container - centered, stacked vertically with proper spacing */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-[15vh]">
        
        {/* Text 1 - "Rural Waterfront" - Slides up, positioned in upper 3/4 */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={phase !== "video" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glow behind text */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-white/[0.03] rounded-full blur-3xl" />
          <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white text-center">
            Rural Waterfront
          </h1>
        </motion.div>

        {/* Spacer - AT LEAST 1 inch gap (mt-6 ≈ 24px, user wants more) */}
        <div className="h-16" />

        {/* Text 2 - "Reimagined" - Slides in under Text 1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={phase === "text2" || phase === "logo" || phase === "hold" || phase === "fade" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glow behind text */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-20 bg-white/[0.02] rounded-full blur-3xl" />
          <p className="relative z-10 text-xl md:text-3xl lg:text-4xl text-white/80 font-display italic text-center px-4">
            Reimagined
          </p>
        </motion.div>

        {/* Spacer - AT LEAST 2 inches gap (h-12 ≈ 48px) */}
        <div className="h-16" />

        {/* Logo - Slides in, AT LEAST 2 inches from tagline */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={phase === "logo" || phase === "hold" || phase === "fade" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glow effect behind logo */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-gradient-to-r from-[#D4AF37]/25 to-[#D4AF37]/15 rounded-full blur-3xl" />
          <img 
            src="/images/logo.png" 
            alt="Newvion" 
            className="relative z-10 h-20 md:h-28 w-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSequence;
