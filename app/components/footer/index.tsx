"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <footer className="bg-[#0c1525] border-t border-white/10">
      <div className="h-[3px] bg-[#DA1D3A]" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Brand */}
        <div>
          <Image src="/logo/logoWhite.png" alt="GritTemplate" width={120} height={36} priority style={{ objectFit: "contain", height: "36px", width: "auto" }} className="mb-5" />
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            The city's leading sports & school registration experts. Connecting athletes, schools, and leagues since 2018.
          </p>
          <div className="flex gap-3">
            {[
              { name: "Instagram", href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { name: "Twitter",   href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { name: "Facebook",  href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              { name: "YouTube",   href: "#", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
            ].map(({ name, href, svg }) => (
              <a key={name} href={href} aria-label={name} className="w-9 h-9 bg-white/8 border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all duration-200">
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <h4 className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#DA1D3A] inline-block" /> Services
          </h4>
          <ul className="flex flex-col gap-3">
            {["Tournaments", "Leagues", "School Programs", "Elite Events", "Team Registration", "Playoffs"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/60 text-sm hover:text-[#DA1D3A] transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#DA1D3A] transition-all duration-200 inline-block" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact + Newsletter */}
        <div>
          <h4 className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#DA1D3A] inline-block" /> Get in touch
          </h4>
          <ul className="flex flex-col gap-4 mb-8">
            {[
              { icon: "✉", text: "hello@grittemplate.com", href: "mailto:hello@grittemplate.com" },
              { icon: "✆", text: "+1 (234) 567-890",       href: "tel:+1234567890" },
              { icon: "⊙", text: "123 Sports Ave, City, State 00000", href: "#" },
            ].map(({ icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="text-[#DA1D3A] text-xs mt-0.5">{icon}</span>
                <a href={href} className="text-white/60 text-sm hover:text-white transition-colors">{text}</a>
              </li>
            ))}
          </ul>

          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Newsletter</p>
          {subscribed ? (
            <div className="bg-[#DA1D3A]/10 border border-[#DA1D3A]/20 px-4 py-3">
              <p className="text-[#DA1D3A] text-xs font-medium">You're subscribed!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/8 border border-white/20 px-3 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#DA1D3A]/50 transition-colors min-w-0" />
              <button type="submit" className="bg-[#DA1D3A] text-white text-xs font-medium px-3 py-2 hover:bg-red-700 transition-colors shrink-0 uppercase">
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2026 GritTemplate II. All rights reserved.</span>
          <span>Built & Developed by <span className="text-white/60">GritTemplate</span></span>
          <a href="#contact" className="text-[#DA1D3A]/60 hover:text-[#DA1D3A] transition-colors">Register Now →</a>
        </div>
      </div>
    </footer>
  );
}