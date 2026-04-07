"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroSequenceProps {
  videoId: string;
  onComplete: () => void;
}

export function IntroSequence({ videoId, onComplete }: IntroSequenceProps) {
  const [showText, setShowText] = useState(true);
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
          className="fixed inset-0 z-[100] bg-[#0d1b3e] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3, ease: "easeInOut" } }}
        >
          {/* Video Layer - Fade in from start */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-full h-full" style={{ transform: 'scale(1.1)' }}>
              <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: '177.77vh', height: '100vh', minWidth: '100vw', minHeight: '56.25vw' }}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl px-8 w-full h-full">
            {/* Mission Text */}
            <motion.div
              animate={{ y: showLogo ? -80 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ opacity: showText ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  Rural Waterfront
                  <br />
                  <span className="text-[#FFD700] italic">Reimagined</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: showText ? 1 : 0,
                  y: showLogo ? -60 : 0
                }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="mt-16 text-center"
              >
                <div className="text-lg md:text-xl lg:text-2xl text-white/80 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Designed for Living Well
                </div>
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={
                showLogo
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 50, filter: "blur(8px)" }
              }
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mt-48"
            >
              <Image
                src="/images/logo.png"
                alt="Newvion"
                width={440}
                height={180}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
