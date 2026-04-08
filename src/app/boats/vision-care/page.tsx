import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function VisionCarePage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/6.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 via-[#0d1b3e]/30 to-[#0d1b3e]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400/50" />
              <span className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase">Vision Care</span>
              <div className="h-px w-8 bg-blue-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Vision Care Boat</h1>
            <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
              A fully-equipped optometry clinic with digital retinal imaging and diabetic retinopathy screening — working in tandem with the adjacent Vision Wear Boutique Boat.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 space-y-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/6.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b3e]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d1b3e]/40" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Complete Optometry Clinic</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Bringing essential eye care to communities where vision providers are scarce — zero local vision care providers in Glades County.
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Two fully-equipped exam lanes.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Digital retinal imaging technology.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Diabetic retinopathy screening.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Comprehensive eye exams and prescriptions.</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✦</span> Adjacent Vision Wear Boutique Boat for retail fulfillment.</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Live-Work Vision Care Boat</h2>
            <p className="text-white text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
              For practitioners seeking to live and work on the water — the Live-Work Vision Care Boat features a full optometry clinic on the main deck and a private, turnkey waterfront residence on the upper deck. Explicitly positioned for E-2 Treaty Investors.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="p-4 rounded-xl bg-blue-500/10 inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Main Deck — Clinic</h3>
                <p className="text-white/70 text-sm">Full optometry practice with all equipment and exam lanes.</p>
              </div>
              <div className="text-center">
                <div className="p-4 rounded-xl bg-[#FFD700]/10 inline-block mb-4">
                  <svg className="w-8 h-8 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Upper Deck — Residence</h3>
                <p className="text-white/70 text-sm">Private, turnkey waterfront living for the practitioner.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-gradient-to-r from-[#0d1b3e] via-slate-800/50 to-[#0d1b3e] p-12 text-center shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">See Clearly. Live Well.</h2>
              <p className="text-xl text-white max-w-2xl mx-auto mb-8">
                Access comprehensive eye care and diabetic retinopathy screening — all on the water, close to home.
              </p>
              <Link href="/" className="inline-block bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
                Learn About Access
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
