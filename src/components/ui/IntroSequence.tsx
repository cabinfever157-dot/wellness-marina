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

  const showText1 = phase === "text1" || phase === "text2" || phase === "logo" || phase === "hold" || phase === "fade";
  const showText2 = phase === "text2" || phase === "logo" || phase === "hold" || phase === "fade";
  const showLogo = phase === "logo" || phase === "hold" || phase === "fade";

  return (
    <AnimatePresence>
      {phase !== "fade" && (
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

          {/* Dark overlay - fades with video */}
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[#020C1B] z-10"
          />

          {/* Text 1 - "Rural Waterfront" - Slides up, positioned in upper 3/4 */}
          <AnimatePresence>
            {showText1 ? (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-20 flex items-center justify-center pt-[10vh]"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white text-center">
                  Rural Waterfront
                </h1>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Text 2 - Tagline - Slides up under Text 1 */}
          <AnimatePresence>
            {showText2 ? (
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-20 flex items-center justify-center pt-[28vh]"
              >
                <p className="text-xl md:text-3xl lg:text-4xl text-white/80 font-display italic text-center px-4">
                  Reimagined
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Logo - Slides up under tagline */}
          <AnimatePresence>
            {showLogo ? (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-20 flex items-center justify-center pt-[45vh]"
              >
                <div className="text-center">
                  <span className="text-2xl md:text-4xl font-bold text-gradient-gold tracking-[0.3em]">
                    NEWVION
                  </span>
                  <span className="block text-xs md:text-sm text-white/60 tracking-[0.5em] mt-2">
                    WELLNESS MARINA
                  </span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
