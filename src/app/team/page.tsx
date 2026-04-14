import TeamSection from "@/components/ui/TeamSection";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/blur-bg.png')" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#D4AF37]/50" />
              <span className="text-[#D4AF37] text-xs font-medium tracking-[0.3em] uppercase">The Visionaries</span>
              <div className="h-px w-12 bg-[#D4AF37]/50" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">The Team</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Leadership, partnerships, and expertise driving the Wellness Marina vision
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <TeamSection />
      </div>
    </main>
  );
}
