"use client";

import { motion, AnimatePresence } from "framer-motion";
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

  const showText1 = phase !== "video";
  const showText2 = phase === "text2" || phase === "logo" || phase === "hold";
  const showLogo = phase === "logo" || phase === "hold";
  const isFading = phase === "fade";

  return (
    <AnimatePresence>
      {!isFading && (
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

          {/* Text 1 - "Rural Waterfront" - Single animation, stays in place */}
          {showText1 && (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-20 flex items-center justify-center pt-[5vh]"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white text-center">
                Rural Waterfront
              </h1>
            </motion.div>
          )}

          {/* Text 2 - "Reimagined" - Animates in, stays in place */}
          {showText2 && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-20 flex items-center justify-center pt-[18vh]"
            >
              <p className="text-xl md:text-3xl lg:text-4xl text-white/80 font-display italic text-center px-4">
                Reimagined
              </p>
            </motion.div>
          )}

          {/* Logo - Centered with glow, animates in, stays in place */}
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-20 flex items-center justify-center pt-[35vh]"
            >
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]/20 rounded-full blur-3xl" />
                <img 
                  src="/images/logo.png" 
                  alt="Newvion" 
                  className="relative z-10 h-20 md:h-28 w-auto"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
