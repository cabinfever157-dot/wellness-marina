"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function LuxuryBackground() {
  const [mounted, setMounted] = useState(false);

  const springX = useSpring(0, { stiffness: 40, damping: 30 });
  const springY = useSpring(0, { stiffness: 40, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
      const moveAmount = 40;
      springX.set(normalizedX * -moveAmount);
      springY.set(normalizedY * -moveAmount);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, springX, springY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-[-5%] w-[110%] h-[110%]"
      >
        {/* The Blurred Marina Background - fully visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/blur-bg.png')",
            filter: "blur(30px) saturate(1.3) brightness(1.1)"
          }}
        />
        
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/70 via-[#0d1b3e]/30 to-[#0d1b3e]/70" />
      </motion.div>
    </div>
  );
}
