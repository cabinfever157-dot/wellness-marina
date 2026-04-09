"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/ui/Hero";
import IntroSequence from "@/components/ui/IntroSequence";
import AudienceGrid from "@/components/ui/AudienceGrid";
import ThreePillars from "@/components/ui/ThreePillars";
import Boats from "@/components/ui/Boats";
import MissionReveal from "@/components/ui/MissionReveal";
import DigitalEcosystem from "@/components/ui/DigitalEcosystem";
import ProofOfConcept from "@/components/ui/ProofOfConcept";
import FinalCTA from "@/components/ui/FinalCTA";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("introShown");
    if (hasSeenIntro) {
      setShowIntro(false);
      setShowHomepage(true);
    }
  }, []);

  useEffect(() => {
    if (showIntro) {
      // Total intro duration: 5s animations + 1.5s fade out = 6.5s
      const timer = setTimeout(() => {
        setShowHomepage(true);
        setTimeout(() => {
          setShowIntro(false);
          sessionStorage.setItem("introShown", "true");
        }, 1500); // Match exit transition
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroSequence />}
      </AnimatePresence>
      
      <AnimatePresence>
        {showHomepage && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative min-h-screen"
          >
            <Hero />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AudienceGrid />
              <ThreePillars />
              <div id="boats">
                <Boats />
              </div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <MissionReveal />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DigitalEcosystem />
              <ProofOfConcept />
            </div>
            <FinalCTA />
            <div className="h-16" />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}