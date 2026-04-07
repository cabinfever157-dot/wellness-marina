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
      setTimeout(() => setPhase("text1"), 800),
      setTimeout(() => setPhase("text2"), 1800),
      setTimeout(() => setPhase("logo"), 2800),
      setTimeout(() => setPhase("hold"), 3800),
      setTimeout(() => setPhase("fade"), 5500),
      setTimeout(() => onComplete(), 6500),
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
      {/* Video - Fades in first */}
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
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[#020C1B] z-10"
      />

      {/* Text 1 - "Rural Waterfront" - Animates to final position once */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={phase !== "video" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 flex items-center justify-center pt-[3vh]"
      >
        <div className="relative">
          {/* Glow behind text */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-white/[0.03] rounded-full blur-3xl" />
          <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white text-center">
            Rural Waterfront
          </h1>
        </div>
      </motion.div>

      {/* Text 2 - "Reimagined" - Animates to final position once */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={phase === "text2" || phase === "logo" || phase === "hold" || phase === "fade" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 flex items-center justify-center pt-[13vh]"
      >
        <div className="relative">
          {/* Glow behind text */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-white/[0.02] rounded-full blur-3xl" />
          <p className="relative z-10 text-xl md:text-3xl lg:text-4xl text-white/80 font-display italic text-center px-4">
            Reimagined
          </p>
        </div>
      </motion.div>

      {/* Logo - Centered with glow */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={phase === "logo" || phase === "hold" || phase === "fade" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 flex items-center justify-center pt-[19vh]"
      >
        <div className="relative">
          {/* Glow effect behind logo */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-gradient-to-r from-[#D4AF37]/25 to-[#D4AF37]/15 rounded-full blur-3xl" />
          <img 
            src="/images/logo.png" 
            alt="Newvion" 
            className="relative z-10 h-20 md:h-28 w-auto"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroSequence;
