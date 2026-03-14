"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 500, suffix: "+",    label: "Athletes registered", icon: "👥" },
  { num: 12,  suffix: "",     label: "Sports offered",      icon: "🏆" },
  { num: 8,   suffix: " yrs", label: "Years running",       icon: "⚡" },
  { num: 50,  suffix: "+",    label: "Partner schools",     icon: "🏫" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ num, suffix, label, icon, active }: { num: number; suffix: string; label: string; icon: string; active: boolean }) {
  const count = useCountUp(num, 2000, active);
  return (
    <div className="text-center py-10 px-6 border border-white/20 hover:border-[#DA1D3A]/50 transition-colors group relative overflow-hidden">
      <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-all duration-300" />
      <span className="text-3xl mb-5 block">{icon}</span>
      <p className="font-display text-6xl md:text-7xl text-white leading-none mb-4">
        {active ? count : 0}{suffix}
      </p>
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-[1px] bg-[#DA1D3A]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A]" />
        <div className="w-6 h-[1px] bg-[#DA1D3A]" />
      </div>
      <p className="text-white/70 text-xs uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url(/background/about.jpg)" }} />
      <div className="absolute inset-0 bg-[#0d1220]/60" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#DA1D3A]" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#DA1D3A]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.3em] uppercase">By the numbers</p>
            <div className="h-[1px] w-12 bg-[#DA1D3A]" />
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,90px)] uppercase leading-[0.92]">
            Our <span className="text-[#DA1D3A]">Results</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => <StatCard key={s.label} {...s} active={active} />)}
        </div>
      </div>
    </section>
  );
}
