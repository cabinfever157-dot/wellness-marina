"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const bentoCards = [
  {
    title: "For Communities",
    subtitle: "Transform Your Town",
    description: "Activate waterfront assets with our 3-stage development model — from Vision Plan to physical deployment.",
    href: "/communities",
    image: "/images/2.jpg",
    span: "col-span-1 md:col-span-2 row-span-2",
    accent: "from-[#FFD700]/20 to-transparent",
    accentBorder: "border-[#FFD700]/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "For Entrepreneurs",
    subtitle: "Launch Your Business",
    description: "Turnkey live-work boats from $350K.",
    href: "/entrepreneurs",
    image: "/images/7.png",
    span: "col-span-1",
    accent: "from-teal-500/20 to-transparent",
    accentBorder: "border-teal-500/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "For Investors",
    subtitle: "Untapped Markets",
    description: "OZ tax benefits + E-2 Treaty.",
    href: "/investors",
    image: "/images/5.png",
    span: "col-span-1",
    accent: "from-purple-500/20 to-transparent",
    accentBorder: "border-purple-500/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "For Sponsors",
    subtitle: "Reach New Audiences",
    description: "Connect with rural communities through health, wellness & lifestyle partnerships.",
    href: "/sponsors",
    image: "/images/8.png",
    span: "col-span-1 md:col-span-2",
    accent: "from-blue-500/20 to-transparent",
    accentBorder: "border-blue-500/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const AudienceGrid = () => {
  return (
    <div className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]/50" />
          <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
            Your Pathway In
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">Four Audiences.<br className="md:hidden" /> One Platform.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 max-w-7xl mx-auto px-4">
        {bentoCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`${card.span} relative overflow-hidden rounded-2xl border ${card.accentBorder} bg-white/[0.03] backdrop-blur-sm group cursor-pointer`}
          >
            <Link href={card.href} className="absolute inset-0 z-20" />

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('${card.image}')`,
                filter: "brightness(1.2) saturate(1.3)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/80 via-[#0d1b3e]/40 to-[#0d1b3e]/20" />
            <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm w-fit mb-4 transition-all duration-500 group-hover:bg-[#FFD700]/20 group-hover:scale-110">
                <div className="text-[#FFD700]">{card.icon}</div>
              </div>
              <span className="text-[#FFD700]/90 text-xs font-semibold tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{card.subtitle}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 group-hover:text-[#FFD700] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{card.title}</h3>
              <p className="text-white/80 text-sm mt-2 max-w-md leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{card.description}</p>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
              <svg className="w-6 h-6 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AudienceGrid;
