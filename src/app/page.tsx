"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("introShown");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introShown", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      <main className="relative min-h-screen">
        {/* Hero bleeds edge-to-edge */}
        <Hero />
        {/* Constrained content sections */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AudienceGrid />
          <ThreePillars />
          <div id="boats">
            <Boats />
          </div>
        </div>
        {/* Full-width mission reveal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MissionReveal />
        </div>
        {/* Back to constrained */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DigitalEcosystem />
          <ProofOfConcept />
        </div>
        {/* Final CTA */}
        <FinalCTA />
        {/* Footer spacer */}
        <div className="h-16" />
      </main>
    </>
  );
}
