"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export function LuxuryBackground() {
  const pathname = usePathname();
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

  if (!mounted || pathname === "/") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-[-5%] w-[110%] h-[110%]"
      >
        {/* The Blurred Marina Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('/images/blur-bg.png')",
            filter: "blur(20px) saturate(1.2) brightness(0.9)"
          }}
        />
        
        {/* Dark layered gradients to let the blurred image shine through */}
        <div className="absolute inset-0 bg-[#0d1b3e]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/90 via-[#0d1b3e]/40 to-[#0d1b3e]/90" />
      </motion.div>
    </div>
  );
}
