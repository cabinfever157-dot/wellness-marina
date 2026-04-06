"use client";

import { useState, useEffect } from "react";
import { IntroSequence } from "./IntroSequence";

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenIntro = document.cookie.includes("rhtp_intro_seen=true");
    if (hasSeenIntro) {
      setIntroComplete(true);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (introComplete) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  const handleIntroComplete = () => {
    document.cookie = "rhtp_intro_seen=true; max-age=86400; path=/";
    setIntroComplete(true);
  };

  return (
    <>
      {!introComplete && (
        <IntroSequence
          videoId="q2uPQl9Izq4"
          onComplete={handleIntroComplete}
        />
      )}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
