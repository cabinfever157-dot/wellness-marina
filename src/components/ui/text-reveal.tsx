"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function TextReveal({ children, className }: { children: string; className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const words = children.split(" ")

  return (
    <div ref={sectionRef} className={`relative py-40 overflow-hidden ${className || ""}`}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
            const y = useTransform(scrollYProgress, [start, end], [20, 0])
            return (
              <motion.span
                key={i}
                style={{ opacity, y }}
                className="text-white inline-block"
              >
                {word}
              </motion.span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
