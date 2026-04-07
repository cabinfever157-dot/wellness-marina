"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [phase, setPhase] = useState<"logo" | "text" | "video" | "fade">("logo");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("text"), 1500),
      setTimeout(() => setPhase("video"), 3000),
      setTimeout(() => setPhase("fade"), 5000),
      setTimeout(() => onComplete(), 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "fade" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[300] bg-[#020C1B]"
        >
          {/* Video Background - Fades in during video phase only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "video" ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <iframe
              src="https://player.vimeo.com/video/1174564693?background=1&autoplay=1&loop=1&byline=0&title=0"
              className="absolute inset-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="autoplay; fullscreen"
            />
          </motion.div>

          {/* Dark overlay for text legibility - stronger during logo/text phases */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "video" ? 0.5 : 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[#020C1B]/80 z-10"
          />

          {/* Phase 1: Logo - Centered, no overlap with text */}
          <AnimatePresence>
            {(phase === "logo") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-20 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                  >
                    <span className="text-gradient-gold">Newvion</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-sm md:text-lg text-white/60 tracking-[0.4em] uppercase mt-4"
                  >
                    Wellness Marina
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2 & 3: Headline Text - Appears BELOW logo area, never overlaps */}
          <AnimatePresence>
            {(phase === "text" || phase === "video") && (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-30 flex items-end justify-center pb-24 md:pb-32 px-4"
              >
                <div className="text-center max-w-5xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[0.95] tracking-tight text-white">
                    Rural Waterfront
                    <br />
                    <span className="text-gradient-gold italic">Reimagined</span>
                  </h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base md:text-xl text-white/70 mt-6 max-w-2xl mx-auto"
                  >
                    Healthcare, hospitality, community — designed for living well.
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
