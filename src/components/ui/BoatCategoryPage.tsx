"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BoatItem } from "@/content/boat-categories";

interface BoatCategoryPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  boats: BoatItem[];
}

const BoatCategoryPage = ({
  title,
  subtitle,
  heroImage,
  boats,
}: BoatCategoryPageProps) => {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">
                Designed for Living Well
              </span>
              <div className="h-px w-8 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {title}
            </h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boats.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={item.href} className="group block h-full">
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.30] backdrop-blur-sm h-full transition-all duration-700 hover:border-[#FFD700]/20 hover:shadow-2xl hover:shadow-[#FFD700]/5 group-hover:bg-white/[0.35]">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        filter: "brightness(1.15) saturate(1.2)",
                      }}
                    />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 text-glow-subtle">
                        {item.name}
                      </h3>
                      <svg
                        className="w-5 h-5 text-white/20 mt-1 transition-all duration-300 group-hover:text-[#FFD700] group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                    <p className="text-white mt-3 text-sm leading-relaxed group-hover:text-white/60 transition-colors text-glow-black-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/0 to-transparent group-hover:via-[#FFD700]/50 transition-all duration-700" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/#boats"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to All Categories
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BoatCategoryPage;