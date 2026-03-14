"use client";

import { useState } from "react";

const testimonials = [
  { name: "Jamie K.",  since: "Member since 2022", quote: "Best decision I made. I moved to the city knowing nobody — now my whole social life revolves around this league.", rating: 5 },
  { name: "Rania L.",  since: "Member since 2023", quote: "Super welcoming, even for a total beginner. The skill matching is spot on — I never felt out of my depth.", rating: 5 },
  { name: "Marco S.",  since: "Member since 2021", quote: "We won the championship last season. The playoffs atmosphere is unreal. Already signed up for the next one.", rating: 5 },
  { name: "Chris P.",  since: "Member since 2023", quote: "The school program got my kids into sports properly. The coaching staff are amazing and very professional.", rating: 5 },
  { name: "Nina R.",   since: "Member since 2022", quote: "From zero to competing in tournaments in just one season. GritTemplate changed how I approach sports entirely.", rating: 5 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#141c2e]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DA1D3A]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.3em] uppercase">From our athletes</p>
            <div className="h-[1px] w-12 bg-[#DA1D3A]" />
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,90px)] uppercase leading-[0.92]">
            <span className="text-white/40">From </span>Zero
            <span className="text-[#DA1D3A]"> To </span>Hero
          </h2>
        </div>

        {/* Active card */}
        <div className="bg-[#1e2a42] border border-[#DA1D3A]/40 p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-4 right-6 font-display text-8xl text-white/[0.06] leading-none select-none">"</div>
          <div className="flex gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, j) => (
              <span key={j} className="text-[#DA1D3A] text-lg">★</span>
            ))}
          </div>
          <p className="text-white text-lg leading-relaxed italic mb-8">
            "{current.quote}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#DA1D3A]/30 flex items-center justify-center text-[#DA1D3A] text-sm font-bold flex-shrink-0">
              {current.name[0]}
            </div>
            <div>
              <p className="font-medium text-white text-sm">{current.name}</p>
              <p className="text-white/60 text-xs">{current.since}</p>
            </div>
          </div>
        </div>

        {/* Mini preview cards */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {testimonials.map(({ name, quote, rating }, i) => (
            <div
              key={name}
              onClick={() => setActive(i)}
              className={`cursor-pointer border p-4 transition-all duration-300 ${
                i === active
                  ? "border-[#DA1D3A]/60 bg-[#1e2a42]"
                  : "border-white/15 bg-[#1a2235] hover:border-white/35"
              }`}
            >
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: rating }).map((_, j) => (
                  <span key={j} className={`text-xs ${i === active ? "text-[#DA1D3A]" : "text-white/40"}`}>★</span>
                ))}
              </div>
              <p className="text-white/70 text-xs line-clamp-2 mb-3">{quote}</p>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i === active ? "bg-[#DA1D3A]/30 text-[#DA1D3A]" : "bg-white/15 text-white/55"}`}>
                  {name[0]}
                </div>
                <p className="text-white/60 text-xs truncate">{name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows + dots */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#DA1D3A] hover:text-[#DA1D3A] transition-colors"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${i === active ? "w-6 h-2 bg-[#DA1D3A]" : "w-2 h-2 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#DA1D3A] hover:text-[#DA1D3A] transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}