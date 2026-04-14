"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const managementStructure = [
  {
    name: "Newvion LLC",
    desc: "Day-to-day management under management services contract",
  },
  {
    name: "Lum'ais",
    desc: "Resort management and wellness operations partner — Hotel & Retreat Boats, Wellness Retreat Boats, and spa and wellness programming",
  },
  {
    name: "Advanced AI Solutions",
    desc: "Targeted marketing, data strategy, and national/international buyer identification",
  },
  {
    name: "East Coast Houseboats LLC",
    desc: "Equity manufacturing partner, exclusive 5-year manufacturing rights",
  },
  {
    name: "Rural Connect Coalition",
    desc: "Local city, county, university, and healthcare partners supporting each marina deployment",
  },
];

const leadershipTeam = [
  {
    name: "Bob Dykstra",
    role: "Founder & CEO",
    bio: "Destination development model and national growth strategy. Foundational roles at Celebration Village at Disney and RDV Sportsplex.",
    initials: "BD",
    color: "from-[#D4AF37] to-[#E5C158]",
  },
  {
    name: "Greg Tron",
    role: "AI Solutions",
    bio: "Translates community and demographic data into compelling destination stories and development roadmaps.",
    initials: "GT",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Brent Hawkins",
    role: "Targeted Marketing",
    bio: "Converts deployments into nationally visible opportunities, building investor and operator pipelines from day one.",
    initials: "BH",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Patrick Sughroue",
    role: "Legal Counsel",
    bio: "Integrated legal architecture for public-private partnerships, Opportunity Zone fund structuring, and international visa compliance.",
    initials: "PS",
    color: "from-purple-500 to-purple-700",
  },
];

const lumaisLeadership = [
  {
    name: "Eric Watson",
    role: "Managing Partner & Chief Growth Officer",
    bio: "25+ years of development and operations leadership in hospitality and wellness. Built two hospitality companies from the ground up to $100MM+ in annual revenue. Six-time winner of Canada's Best Managed Companies and Hotel Company of the Year.",
    initials: "EW",
    color: "from-[#D4AF37] to-[#E5C158]",
  },
  {
    name: "Hank Van Weelden",
    role: "Managing Partner & Chief Operating Officer",
    bio: "Founded, developed, built, and operated one of North America's most successful Nordic spas — opening in 8 months and exiting at a strong multiple within 2.5 years. Former CEO of a leading Canadian modular construction company with 850 employees.",
    initials: "HV",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Marlea Sleeman",
    role: "Managing Partner & Chief Executive Officer",
    bio: "25+ years of development and operations leadership in Canada and the US. Led previous company to an 80x increase in valuation. YPO member and Harvard Business School President's Program graduate.",
    initials: "MS",
    color: "from-rose-500 to-rose-700",
  },
];

const PartnerNetworkSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", organization: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", organization: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/30 transition-all";
  const labelClass = "block text-white/80 text-sm font-medium mb-2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#FFD700]/50" />
          <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">Network</span>
          <div className="h-px w-12 bg-[#FFD700]/50" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-subtle">Our Partner Network</h2>
      </div>

      <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/[0.28] backdrop-blur-md p-8 md:p-12">
        <p className="text-white text-lg leading-relaxed text-center text-glow-black mb-8">
          We are actively building our partner network. If you are interested in partnering with Newvion Wellness Marina, we would love to hear from you.
        </p>

        {status === "sent" ? (
          <div className="text-center py-6">
            <div className="text-[#FFD700] text-4xl mb-3 text-glow-gold-subtle">✓</div>
            <p className="text-white text-lg font-medium text-glow-subtle">Thank you for your interest!</p>
            <p className="text-white/70 mt-2 text-glow-black-light">We will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClass}>Name *</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className={inputClass}
                placeholder="you@organization.com"
              />
            </div>
            <div>
              <label className={labelClass}>Organization</label>
              <input
                type="text"
                value={formState.organization}
                onChange={(e) => setFormState((s) => ({ ...s, organization: e.target.value }))}
                className={inputClass}
                placeholder="Organization name (optional)"
              />
            </div>
            <div>
              <label className={labelClass}>Message *</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your organization and how you'd like to partner..."
              />
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#FFD700] text-[#020C1B] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#E5C158] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "sending" ? "Sending..." : "Contact Us"}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <div className="py-16 space-y-24">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed text-glow-black">
          Newvion Wellness Marina is managed by Newvion LLC under a management services structure. The leadership team brings together expertise in rural economic development, boat concept design, healthcare innovation, marketing, investment strategy, and legal architecture — anchored by a world-class resort management and wellness operations partnership with Lum&apos;ais that brings the hospitality excellence and proven thermal spa and wellness expertise the Wellness Marina destination experience demands.
        </p>
      </motion.div>

      {/* Management Structure */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">Structure</span>
            <div className="h-px w-12 bg-[#FFD700]/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-subtle">Management Structure</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {managementStructure.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.28] backdrop-blur-md p-6 hover:border-[#FFD700]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] mt-0.5 shrink-0">✦</span>
                <div>
                  <strong className="text-white text-lg text-glow-subtle">{item.name}</strong>
                  <span className="text-white/60 mx-2">—</span>
                  <span className="text-white/80 text-glow-black">{item.desc}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership Team */}
      <div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">Leadership</span>
            <div className="h-px w-12 bg-[#FFD700]/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glow-subtle">Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative rounded-3xl border border-white/5 bg-white/[0.30] backdrop-blur-sm p-8 transition-all duration-700 hover:border-[#D4AF37]/20 hover:bg-white/[0.15] hover:shadow-2xl hover:shadow-[#D4AF37]/5 h-full">
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`} />
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 scale-110`} />
                      <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-xl`}>
                        <span className="text-3xl font-bold text-white">{member.initials}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-2 text-glow-subtle">
                      {member.name}
                    </h3>
                    <p className="text-[#FFD700] text-sm font-medium tracking-wide mb-4 text-glow-gold-subtle">
                      {member.role}
                    </p>
                    <p className="text-white text-sm leading-relaxed text-glow-black">
                      {member.bio}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lum'ais Partnership */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/[0.28] backdrop-blur-md p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#FFD700]/50" />
                <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">Partner</span>
                <div className="h-px w-12 bg-[#FFD700]/50" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow-subtle">Lum&apos;ais</h2>
              <p className="text-[#FFD700] text-lg font-medium text-glow-gold-subtle">Resort Management & Wellness Operations Partner</p>
            </div>

            <div className="space-y-6 text-white leading-relaxed text-lg text-glow-black">
              <p>
                Lum&apos;ais is a premier wellness hospitality development and operations company whose mission — illuminating the path to wellness and sparking a movement towards healthier, more joyful lives for all — aligns perfectly with the Newvion Wellness Marina vision. Lum&apos;ais brings the proven operational expertise, wellness hospitality systems, and world-class resort management capability that transforms the Wellness Marina from a compelling concept into a destination that guests return to repeatedly.
              </p>
              <p>
                As the Wellness Marina&apos;s resort management and operations partner, Lum&apos;ais is responsible for the Hotel & Retreat Boats, Wellness Retreat Boats, and all spa and wellness programming across the marina — bringing a level of hospitality excellence and wellness expertise that no other rural waterfront destination in America can match.
              </p>
              <p className="text-white/80 text-base border-l-2 border-[#FFD700]/40 pl-4 italic text-glow-black-light">
                The Lum&apos;ais partnership brings the Newvion Wellness Marina an immediately credible, operationally proven wellness hospitality capability — giving investors, grant funders, and marina partners confidence that the destination experience will be delivered at the highest possible standard from day one.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white text-center mb-8 text-glow-subtle">Lum&apos;ais Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {lumaisLeadership.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="rounded-2xl border border-white/5 bg-white/[0.30] backdrop-blur-sm p-6 transition-all duration-700 hover:border-[#D4AF37]/20 hover:bg-white/[0.15] h-full">
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 scale-110`} />
                          <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-xl`}>
                            <span className="text-2xl font-bold text-white">{member.initials}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-1 text-glow-subtle">
                          {member.name}
                        </h4>
                        <p className="text-[#FFD700] text-sm font-medium tracking-wide mb-3">
                          {member.role}
                        </p>
                        <p className="text-white text-sm leading-relaxed text-glow-black">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Building Our Partner Network */}
      <PartnerNetworkSection />
    </div>
  );
};

export default TeamSection;