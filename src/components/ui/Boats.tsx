"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { boatCategories } from "@/content/boat-categories";

const Boats = () => {
  return (
    <div className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]/50" />
          <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
            The Boats
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          The Wellness Connected Marina.
        </h2>
        <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
          Each vessel is a purpose-built, multi-story platform — from clinical
          healthcare to culinary experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px] max-w-7xl mx-auto px-4">
        {boatCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"}
          >
            <Link
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black block h-full"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300 text-glow-black">
                  {category.title}
                </h3>
                <p className="text-white text-lg max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-glow-black">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#FFD700] text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 text-glow-gold-subtle">
                  <span>{category.boats.length} Vessel{category.boats.length > 1 ? "s" : ""}</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Boats;