"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const markets = [
  {
    name: "Moore Haven, Florida",
    role: "Flagship Anchor Market",
    description: "Our founding waterfront deployment at Moore Haven City Marina on the Caloosahatchee River. A fully scaled marina creates 40-75 permanent jobs and generates $3M-$12M in annual healthcare savings.",
    image: "/images/MooreHaven.png",
    stats: [
      { value: "83%", label: "Transport Barrier to Care" },
      { value: "0", label: "Local Dental/Derm/Vision" },
      { value: "OZ", label: "Qualified Opportunity Zone" },
    ],
  },
  {
    name: "Allegan, Michigan",
    role: "Inland Proof of Concept",
    description: "On the Kalamazoo River — proving our model is geography-agnostic. Modular studio hubs execute the same vision, backed by major regional health and civic partners.",
    image: "/images/Allegan, Michigan.png",
    stats: [
      { value: "Inland", label: "Geography-Agnostic" },
      { value: "Modular", label: "Studio Hub Model" },
      { value: "Regional", label: "Health Partners" },
    ],
  },
];

const ProofOfConcept = () => {
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
            Active Markets
          </span>
          <div className="h-px w-8 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white">From Conversation<br className="md:hidden" /> to Commitment</h2>
        <p className="text-lg text-white mt-4 max-w-3xl mx-auto">
          Grounded in executable, investable reality. We deploy in active markets, proving the model with physical assets.
        </p>
      </motion.div>

      <div className="space-y-8 max-w-7xl mx-auto px-4">
        {markets.map((market, index) => (
          <motion.div
            key={market.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.10] backdrop-blur-sm group hover:border-white/10 transition-all duration-700">
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-72 lg:h-[400px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${market.image}')`,
                    }}
                  />
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <span className="text-[#FFD700] text-xs font-semibold tracking-wider uppercase">{market.role}</span>
                    <h3 className="text-3xl font-bold text-white mt-1">{market.name}</h3>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="hidden lg:block mb-2">
                    <span className="text-[#FFD700] text-xs font-semibold tracking-wider uppercase">{market.role}</span>
                    <h3 className="text-3xl font-bold text-white mt-1">{market.name}</h3>
                  </div>

                  <p className="text-white/60 text-lg leading-relaxed mt-4 lg:mt-6">
                    {market.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5">
                    {market.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-[#FFD700]">{stat.value}</div>
                        <div className="text-xs text-white/30 mt-1 leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/communities"
            className="group relative inline-flex items-center gap-3 bg-[#FFD700] text-[#0d1b3e] font-bold text-lg px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD700]/30 cursor-pointer"
          >
            <span className="relative z-10">Start Your Vision Plan</span>
            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <Link
            href="/investors"
            className="inline-flex items-center gap-3 border border-white/15 text-white font-medium text-lg px-10 py-5 rounded-full hover:border-[#FFD700]/40 hover:bg-white/5 transition-all duration-500 cursor-pointer"
          >
            Investor Prospectus
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProofOfConcept;
