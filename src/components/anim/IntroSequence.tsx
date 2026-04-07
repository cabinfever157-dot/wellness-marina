"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroSequenceProps {
  onComplete: () => void;
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [showLogo, setShowLogo] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 3500);
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 5500);
    const completeTimer = setTimeout(() => onComplete(), 8500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="intro-container"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3, ease: "easeInOut" } }}
        >
          {/* Video Layer - Fades in with scale */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <iframe
              src="https://player.vimeo.com/video/1180705205?background=1&autoplay=1&loop=1&byline=0&title=0"
              className="absolute inset-0 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="autoplay; fullscreen"
            />
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-20 flex flex-col items-center justify-end pb-32 max-w-4xl px-8 w-full h-full">
            {/* Main Text - Animates in with stagger */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                animate={{ y: showLogo ? -150 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  Rural Waterfront
                  <br />
                  <span className="text-[#FFD700] italic">Reimagined</span>
                </h1>
              </motion.div>
            </motion.div>

            {/* Subtitle - Animates in separately */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 text-center"
            >
              <motion.div
                animate={{ y: showLogo ? -150 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-lg md:text-xl lg:text-2xl text-white/80 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              >
                Designed for Living Well
              </motion.div>
            </motion.div>

            {/* Logo with Glow - Animates in */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              className="-mt-16"
            >
              <div className="relative">
                {/* Glow behind logo */}
                <div className="absolute inset-0 blur-3xl opacity-70 scale-110">
                  <Image
                    src="/images/logo.png"
                    alt="Newvion Glow"
                    width={440}
                    height={180}
                    className="object-contain brightness-150 sepia-[0.3]"
                    priority
                  />
                </div>
                {/* Main logo */}
                <Image
                  src="/images/logo.png"
                  alt="Newvion"
                  width={440}
                  height={180}
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
