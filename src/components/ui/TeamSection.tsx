"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    bio: "Leading healthcare innovation with 20+ years of experience in rural health infrastructure and community wellness programs.",
    initials: "SM",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Marcus Chen",
    role: "Chief Executive Officer",
    bio: "Visionary entrepreneur with a passion for rural development and sustainable waterfront transformation.",
    initials: "MC",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Dr. Priya Patel",
    role: "Chief Wellness Officer",
    bio: "Integrating traditional and modern wellness practices to create holistic health experiences on the water.",
    initials: "PP",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "James Rodriguez",
    role: "Chief Technology Officer",
    bio: "Building the digital infrastructure that connects rural communities to premium healthcare and lifestyle services.",
    initials: "JR",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Dr. Elena Kowalski",
    role: "Chief Operations Officer",
    bio: "Operations expert ensuring seamless execution of our marina development and community partnership programs.",
    initials: "EK",
    color: "from-rose-500 to-red-600",
  },
];

const TeamSection = () => {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Visionaries</h2>
        <p className="text-white max-w-xl mx-auto">
          A multidisciplinary team united by a shared vision of transforming rural waterfront into thriving wellness destinations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="relative rounded-3xl border border-white/5 bg-white/[0.30] backdrop-blur-sm p-8 transition-all duration-700 hover:border-[#D4AF37]/20 hover:bg-white/[0.15] hover:shadow-2xl hover:shadow-[#D4AF37]/5">
              {/* Ambient glow on hover */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`} />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 scale-110`} />
                    <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-xl`}>
                      <span className="text-3xl font-bold text-white">{member.initials}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] text-sm font-medium tracking-wide mb-4">
                    {member.role}
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent transition-all duration-700" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-20"
      >
        <p className="text-white mb-6">Interested in joining our team?</p>
        <a
          href="/communities"
          className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:underline cursor-pointer"
        >
          View career opportunities
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default TeamSection;
