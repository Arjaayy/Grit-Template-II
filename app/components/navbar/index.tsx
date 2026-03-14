"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Results",      href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0d1220]/98 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-4"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo/logoWhite.png" alt="GritTemplate" width={120} height={36} priority style={{ objectFit: "contain", height: "36px", width: "auto" }} />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-white/80 font-medium tracking-widest uppercase">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-white transition-colors relative group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-[#DA1D3A] transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden lg:flex items-center gap-2 bg-[#DA1D3A] text-white text-sm font-medium px-6 py-2.5 hover:bg-red-700 transition-colors uppercase tracking-wider">
          Register Now →
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#080b14]/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-white/80 text-sm uppercase tracking-widest hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="bg-[#DA1D3A] text-white font-medium px-4 py-3 text-center uppercase tracking-wider text-sm" onClick={() => setMenuOpen(false)}>
            Register Now →
          </a>
        </div>
      )}
    </header>
  );
}
