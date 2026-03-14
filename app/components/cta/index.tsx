"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", concern: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1D3A]/60 transition-colors";

  return (
    <section className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/background/stats.jpg)" }} />
      <div className="absolute inset-0 bg-[#0d1220]/85" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DA1D3A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">Customer Support</p>
          <h2 className="font-display text-[clamp(42px,6vw,72px)] uppercase leading-[0.92] mb-6">
            Get Help With<br /><span className="text-[#DA1D3A]">Your Registration</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
            Have a concern or question about our services, payments, registrations, or anything else? Reach out and we'll assist you promptly.
          </p>

          <div className="flex gap-4 mb-10">
            {[
              { icon: "✉", label: "Email",   href: "mailto:hello@grittemplate.com" },
              { icon: "💬", label: "Discord", href: "#" },
              { icon: "✆", label: "Phone",   href: "tel:+1234567890" },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label}
                className="w-14 h-14 bg-white/5 border border-white/15 flex items-center justify-center text-white/60 text-xl hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all duration-200">
                {icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {[
              { icon: "✉", text: "hello@grittemplate.com", href: "mailto:hello@grittemplate.com" },
              { icon: "✆", text: "+1 (234) 567-890",       href: "tel:+1234567890" },
              { icon: "⏱", text: "Mon–Fri: 9am – 6pm",    href: "#" },
            ].map(({ icon, text, href }) => (
              <div key={text} className="flex items-center gap-3 text-white/55 text-sm">
                <span className="text-[#DA1D3A]">{icon}</span>
                <a href={href} className="hover:text-white transition-colors">{text}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
          {submitted ? (
            <div className="text-center py-12">
              <p className="font-display text-5xl uppercase text-[#DA1D3A] mb-3">Message Sent!</p>
              <p className="text-white/55 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              <input required type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              <select required value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} className={inputClass} style={{ color: form.concern ? "#fff" : "rgba(255,255,255,0.3)" }}>
                <option value="" disabled>Select Concern</option>
                <option>General Inquiry</option>
                <option>Registration Issue</option>
                <option>Payment Problem</option>
                <option>Program Information</option>
                <option>Team Assignment</option>
                <option>Other</option>
              </select>
              <textarea required placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              <button type="submit" className="w-full bg-[#DA1D3A] text-white font-medium py-4 text-sm uppercase tracking-widest hover:bg-red-700 transition-colors">
                Send Message →
              </button>
              <p className="text-white/25 text-xs text-center">We typically respond within 24 hours.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}