"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";

const VIMEO_ID = "1182746149";

const PodcastPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const readyRef = useRef(false);

  const postToPlayer = (method: string, value?: any) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(JSON.stringify({ method, value }), "*");
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://player.vimeo.com") return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data.event === "loaded" && !readyRef.current) {
          readyRef.current = true;
          postToPlayer("addEventListener", "play");
          postToPlayer("addEventListener", "pause");
          postToPlayer("addEventListener", "timeupdate");
          postToPlayer("addEventListener", "ended");
          postToPlayer("getDuration");
        }
        if (data.event === "play") setPlaying(true);
        if (data.event === "pause") setPlaying(false);
        if (data.event === "timeupdate" && data.data) {
          if (duration > 0) setProgress(data.data.seconds / duration * 100);
        }
        if (data.method === "getDuration" && data.value) {
          setDuration(data.value);
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [duration]);

  const togglePlay = () => {
    if (playing) {
      postToPlayer("pause");
      setPlaying(false);
    } else {
      postToPlayer("play");
      setPlaying(true);
    }
  };

  const seekTo = (pct: number) => {
    if (!duration) return;
    postToPlayer("seekTo", pct / 100 * duration);
    setProgress(pct);
  };

  return (
    <div className="group block relative overflow-hidden rounded-3xl">
      <ShineBorder borderWidth={2} duration={10} shineColor={["#D4AF37", "#E5C158", "#0A192F"]} />
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a1628]/90 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row gap-0">
          <div className="relative w-full md:w-1/2 overflow-hidden">
            <img
              src="/images/Newvion_Podcast.jpg"
              alt="Newvion Podcast"
              className="w-full h-auto object-cover"
            />

          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="absolute -inset-2 bg-white/30 rounded-full blur-md" />
                <img
                  src="/images/logo.png"
                  alt="Newvion"
                  className="relative h-7 w-auto"
                />
              </div>
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.25em] uppercase text-glow-gold-subtle">Podcast</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-glow-subtle">
              The Newvion Podcast
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 text-glow-black-light">
              Amplifying rural voices — conversations on health, wellness, community, and the waterfront lifestyle that connects them all.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-[#D4AF37] hover:bg-[#E5C158] rounded-full flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                {playing ? (
                  <svg className="w-4 h-4 text-[#020C1B]" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#020C1B] ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <div
                className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  seekTo((e.clientX - rect.left) / rect.width * 100);
                }}
              >
                <div className="h-full bg-[#D4AF37] rounded-full transition-all duration-200" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
        {/* Hidden Vimeo iframe for audio */}
        <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${VIMEO_ID}?title=0&byline=0&portrait=0&transparent=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const ecosystemSections = [
  {
    title: "Healthcare is the Anchor",
    content: "Primary care, dental, mental health, pharmacy, and preventive services are delivered directly within the marina through partnerships with regional healthcare providers and FQHCs. Care is offered on a sliding scale or subsidized basis, ensuring access for those who need it most. Healthcare becomes part of daily life—not something delayed until crisis.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.977-2.95l.26-1.477m0 0a4.5 4.5 0 00-1.624-3.648 4.5 4.5 0 01.924-3.607m0 0a4.5 4.5 0 00-1.924-3.607 4.5 4.5 0 01-.924-3.607m0 0l.26-1.477m-2.977 2.95l-.26-1.477" />
      </svg>
    ),
    color: "teal",
  },
  {
    title: "The Resort is the Draw",
    content: "Hospitality, culinary, arts, and outdoor experiences create a true waterfront wellness destination, attracting visitors from across the region. Visitor-driven revenue helps fund and expand the healthcare mission, making the model financially sustainable.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    color: "amber",
  },
  {
    title: "A Connected Community Experience",
    content: "",
    items: [
      { label: "Food & Culinary", desc: "Nutrition, local farms, and dining" },
      { label: "Arts & Culture", desc: "Music, art, and community identity" },
      { label: "Retail & Business", desc: "Opportunities for local entrepreneurs" },
      { label: "Learning & Discovery", desc: "Universities, workforce, and education" },
      { label: "Hospitality & Recreation", desc: "Experiences that energize the community" },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "gold",
  },
  {
    title: "Tourism & Economic Impact",
    subtitle: "A New Waterfront Destination",
    content: "Newvion Wellness Marina is a curated destination combining wellness, culinary, lifestyle, and cultural experiences — a place people choose to visit, stay, and return to.",
    visitItems: [
      "Culinary experiences & chef-led events",
      "Wellness & fitness programming",
      "Music, art, & cultural events",
      "Rooftop & social gatherings",
    ],
    stats: [
      { metric: "Annual Visitors", value: "25K–75K+" },
      { metric: "Visitor Spending", value: "$2M–$8M+" },
      { metric: "Jobs Created", value: "25–75+" },
      { metric: "Overnight Stays", value: "5K–15K+/yr" },
      { metric: "Business Impact", value: "Significant uplift" },
      { metric: "Tax Revenue", value: "Increased base" },
    ],
    extensions: [
      { label: "Extended Stay & Hospitality", desc: "Hotel boats and live-work residences support overnight stays, weekend travel, and multi-day retreats." },
      { label: "Year-Round Activity", desc: "Daily, weekly, and seasonal programming ensures consistent visitor engagement throughout the year." },
    ],
    communityBenefit: "Newvion drives visitor traffic, supports local businesses, creates jobs, and enhances the identity of the waterfront — transforming it into a destination with new reasons to visit, stay, and return.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-6.75v4.5m4.5-4.5v4.5m4.5-4.5v4.5m4.5-4.5v4.5M3.75 6.75h16.5M12 3v3.75m0 0h.008v.008H12V6.75zm0 0H7.5m4.5 0h4.5" />
      </svg>
    ),
    color: "gold",
  },
  {
    title: "Examining the Evolving Landscape of the Global Wellness Market",
    content: "The evolving landscape of the global wellness market, highlighting a transition toward science-backed solutions and holistic health. Research from McKinsey and Morgan Health emphasizes how consumers are prioritizing clinical efficacy and accountable care, utilizing biomonitoring wearables and at-home diagnostics to manage their well-being. In the hospitality sector, boutique hotels are responding to these shifts by integrating personalized wellness itineraries, biophilic design, and nutritional programming into the guest experience. Additionally, reports on experiential trends suggest that future luxury value will be defined by exclusive access and community-focused initiatives. Collectively, the texts illustrate a future where technology, sustainability, and medical credibility converge to meet the sophisticated demands of health-conscious consumers.",
    vimeoId: "1182814075",
    color: "gold",
  },
];

const colorMap: Record<string, string> = {
  teal: "text-teal-400",
  amber: "text-amber-400",
  gold: "text-[#FFD700]",
};

const WellnessEcosystem = () => {
  return (
    <div className="relative py-32 pt-44 overflow-hidden">
      {/* Background with glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FFD700]/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] text-xs font-medium tracking-[0.3em] uppercase">
              The Model
            </span>
            <div className="h-px w-12 bg-[#FFD700]/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Wellness Ecosystem
          </h2>
          <p className="text-lg text-white mt-6 max-w-4xl mx-auto leading-relaxed">
            The Newvion Wellness Marina is built around one simple idea: Living Well. It is not a traditional resort and not a standalone healthcare facility. It is a community-first wellness ecosystem—bringing together healthcare, lifestyle, and economic development into one integrated waterfront destination designed for rural communities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mt-10"
          >
            <img
              src="/images/dock.jpg"
              alt="Dock at Wellness Marina"
              className="w-full max-h-[600px] rounded-[25%] object-contain object-center"
            />
          </motion.div>
        </motion.div>

        {/* Podcast Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <PodcastPlayer />
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8">
          {ecosystemSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="rounded-[20%] border border-white/10 bg-white/[0.28] backdrop-blur-md overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Icon / Mic Section */}
                  <div className="lg:col-span-1 lg:row-span-2 p-4 flex items-center justify-center bg-[#0a1628]/80">
                    {"vimeoId" in section ? (
                      <div className={`p-4 rounded-2xl bg-[#FFD700]/20 text-[#FFD700]`}>
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                    ) : (
                      <div className={`p-4 rounded-2xl ${section.color === 'teal' ? 'bg-teal-500/20' : section.color === 'amber' ? 'bg-amber-500/20' : 'bg-[#FFD700]/20'} ${colorMap[section.color]}`}>
                        {section.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-4 p-8 lg:p-12">
                    <h3 className={`text-2xl md:text-3xl font-bold ${colorMap[section.color]} mb-6 text-glow-subtle`}>
                      {"vimeoId" in section ? (
                        <>
                          Examining the Evolving Landscape of<br />the Global Wellness Market
                        </>
                      ) : (
                        section.title
                      )}
                    </h3>

                    {"vimeoId" in section && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-6"
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/20 border border-white/10 max-w-[508px] w-full">
                          <div className="aspect-[16/9]">
                            <iframe
                              src={`https://player.vimeo.com/video/${section.vimeoId}?title=0&byline=0&portrait=0`}
                              className="w-full h-full"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {"subtitle" in section && section.subtitle && (
                      <p className="text-white/70 text-sm font-medium tracking-[0.15em] uppercase mb-4 text-glow-black-light">{section.subtitle}</p>
                    )}
                    {section.content && (
                      <p className="text-white text-lg leading-relaxed mb-6 text-glow-black">
                        {section.content}
                      </p>
                    )}
                    
                    {"visitItems" in section && (
                      <div className="mb-6">
                        <h4 className="text-[#FFD700]/80 text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-glow-gold-subtle">Why People Visit</h4>
                        <ul className="space-y-2">
                          {(section.visitItems as string[]).map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-white/80 text-base leading-relaxed text-glow-black">
                              <span className="text-[#FFD700] mt-1 shrink-0">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {"extensions" in section && (
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {(section.extensions as {label: string; desc: string}[]).map((ext) => (
                          <div key={ext.label} className="p-4 rounded-2xl border border-white/10 bg-white/[0.25] hover:bg-white/[0.30] transition-all duration-300">
                            <div className="text-[#FFD700] font-semibold mb-1 text-glow-subtle">{ext.label}</div>
                            <div className="text-white text-sm text-glow-subtle">{ext.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {"stats" in section && (
                      <div className="mb-6">
                        <h4 className="text-[#FFD700]/80 text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-glow-gold-subtle">Projected Economic Impact (Per Marina)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {(section.stats as {metric: string; value: string}[]).map((s) => (
                            <div key={s.metric} className="p-3 rounded-xl border border-[#FFD700]/20 bg-[#FFD700]/5">
                              <div className="text-[#FFD700] text-xl md:text-2xl font-bold text-glow-gold-subtle">{s.value}</div>
                              <div className="text-white/60 text-xs mt-1 text-glow-black-light">{s.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {"communityBenefit" in section && (
                      <p className="text-white/80 text-base leading-relaxed mb-2 text-glow-black italic border-l-2 border-[#FFD700]/40 pl-4">
                        {String(section.communityBenefit)}
                      </p>
                    )}
                    
                    {section.items && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.items.map((item) => (
                          <div
                            key={item.label}
                            className="p-4 rounded-2xl border border-white/10 bg-white/[0.25] hover:bg-white/[0.30] transition-all duration-300"
                          >
                            <div className="text-[#FFD700] font-semibold mb-1 text-glow-subtle">{item.label}</div>
                            <div className="text-white text-sm text-glow-subtle">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powered by Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="rounded-[20%] border border-[#FFD700]/30 bg-[#FFD700]/10 backdrop-blur-md p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-glow-subtle">
              Powered by Partnerships
            </h3>
            <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-6 text-glow-black">
              Universities, regional planning organizations, and healthcare providers work together to deliver care, training, and long-term community impact. This is more than a destination—it is a platform for rural health access and community revitalization.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#FFD700]/30" />
              <span className="text-[#FFD700] font-semibold text-lg text-glow-gold">Living Well — The Outcome</span>
              <div className="h-px w-8 bg-[#FFD700]/30" />
            </div>
            <p className="text-white mt-4 text-sm text-glow-black-light">
              Healthcare is the anchor. The resort is the draw. Living well is the outcome.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WellnessEcosystem;