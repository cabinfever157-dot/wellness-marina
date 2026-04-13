import Boats from "@/components/ui/Boats";

export default function BoatsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/1.png')" }}
        />
        <div className="absolute inset-0 bg-[#020C1B]/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] text-xs font-medium tracking-[0.2em] uppercase">Designed for Living Well</span>
              <div className="h-px w-8 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">The Boats</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              Purpose-built, multi-story vessels — from clinical healthcare to culinary experiences, all designed for living well.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Boats />
      </div>
    </main>
  );
}
