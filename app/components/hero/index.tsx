export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/background/hero.jpg)" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1220]/60 via-[#0d1220]/30 to-[#0d1220]" />

      {/* Red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#DA1D3A]/25 blur-[120px] rounded-full pulse-glow pointer-events-none" />

      {/* Content — centered like dota2coaching */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="fade-up fade-up-1 inline-block text-[#DA1D3A] text-xs font-medium tracking-[0.3em] uppercase mb-6 border border-[#DA1D3A]/40 px-4 py-1.5">
          Season 2026 · Registrations open
        </p>

        <h1 className="fade-up fade-up-2 font-display text-[clamp(60px,14vw,140px)] leading-[0.9] uppercase mb-8">
          <span className="block text-white">Play.</span>
          <span className="block text-[#DA1D3A]">Compete.</span>
          <span className="block text-white">Win.</span>
        </h1>

        <p className="fade-up fade-up-3 text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the city's fastest-growing sports & school registration platform. All skill levels welcome — from first-timers to elite athletes.
        </p>

        <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-[#DA1D3A] text-white font-medium text-base px-10 py-4 hover:bg-red-700 transition-colors uppercase tracking-wider">
            Register Now →
          </a>
          <a href="#services" className="border border-white/30 text-white/70 font-medium text-base px-10 py-4 hover:border-white hover:text-white transition-colors uppercase tracking-wider">
            Our Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/25 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
