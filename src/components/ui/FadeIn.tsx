"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 0.5 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay, duration, ease: 'easeInOut' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
