"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroSequenceProps {
  onSkip?: () => void;
}

export default function IntroSequence({ onSkip }: IntroSequenceProps) {
  const [phase, setPhase] = useState<"video" | "text" | "logo">("video");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("text"), 2000),
      setTimeout(() => setPhase("logo"), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("introShown", "true");
    onSkip?.();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] bg-black overflow-hidden"
    >
      {/* Video - always playing */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay - 67% opacity */}
      <div className="absolute inset-0 bg-black/67 z-10" />

      {/* Skip Intro Button - bottom right */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-30 px-5 py-2.5 text-sm font-medium tracking-wider uppercase text-white/70 hover:text-white border border-white/20 hover:border-white/50 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
      >
        Skip Intro
      </button>

      {/* Text 1 - FIXED at TOP, NEVER moves */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20 w-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: phase !== "video" ? 1 : 0, y: phase !== "video" ? 0 : 200 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-12 bg-gradient-to-r from-white/10 via-white/8 to-white/10 blur-3xl rounded-full" />
            <div className="absolute -inset-8 bg-gradient-to-r from-white/12 via-white/10 to-white/12 blur-2xl rounded-full" />
            <div className="absolute -inset-4 bg-gradient-to-r from-white/15 via-white/12 to-white/15 blur-xl rounded-full" />
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-white/15 to-white/20 blur-lg rounded-full" />
            
            <h1 className="relative z-10 text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              Wellness Marina
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Logo - FIXED at BOTTOM, NEVER moves */}
      <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.7 }}
          animate={{ opacity: phase === "logo" ? 1 : 0, y: phase === "logo" ? 0 : 100, scale: phase === "logo" ? 1 : 0.7 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-600/8 via-yellow-400/6 to-amber-600/8 blur-3xl rounded-full" />
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-yellow-300/8 to-amber-500/10 blur-2xl rounded-full" />
            
            <img 
              src="/images/logo.png" 
              alt="Newvion" 
              className="relative z-10 h-40 md:h-56 w-auto drop-shadow-[0_0_5px_rgba(251,191,36,0.8)] drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}