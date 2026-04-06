"use client"

import React, { memo } from "react"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FFD700", "#FFA500", "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFD700"],
    speed = 1,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    }

    return (
      <span
        className={`relative inline-block bg-[length:200%_auto] bg-clip-text text-transparent animate-aurora ${className}`}
        style={gradientStyle}
      >
        {children}
      </span>
    )
  }
)

AuroraText.displayName = "AuroraText"
