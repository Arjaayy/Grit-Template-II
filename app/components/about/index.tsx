export default function About() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#DA1D3A]/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#DA1D3A]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#DA1D3A]" />
          <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.3em] uppercase">Who we are</p>
          <div className="h-[1px] w-12 bg-[#DA1D3A]" />
        </div>

        <h2 className="font-display text-[clamp(48px,8vw,90px)] uppercase leading-[0.92] mb-8">
          About <span className="text-[#DA1D3A]">GritTemplate</span>
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
          <span className="text-[#DA1D3A] font-medium">Sports & school registration experts</span> with over 8 years of experience connecting athletes, schools, and leagues across the city.
        </p>
        <p className="text-white/70 text-base leading-relaxed mb-12 max-w-2xl mx-auto">
          Successfully registered <span className="text-white/80 font-medium">500+ athletes</span> across 12 sports — known for efficiency, community building, and elite-level program management.
        </p>

        {/* Mini stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { num: "500+", label: "Athletes registered" },
            { num: "12",   label: "Sports offered" },
            { num: "8",    label: "Years running" },
            { num: "50+",  label: "Partner schools" },
          ].map(({ num, label }) => (
            <div key={label} className="bg-white/8 border border-white/20 p-5 hover:border-[#DA1D3A]/40 transition-colors group">
              <p className="font-display text-4xl text-[#DA1D3A] mb-1">{num}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
