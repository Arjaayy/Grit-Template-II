import Image from "next/image";

const services = [
  {
    title: "Tournaments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholders/tournament.jpg",
    badge: "Most popular",
  },
  {
    title: "Leagues",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholders/leagues.jpg",
    badge: "",
  },
  {
    title: "School Programs",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/placeholders/Events.jpg",
    badge: "New",
  },
  {
    title: "Elite Events",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/placeholders/elite.jpg",
    badge: "",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0f1728]">
      {/* Red glow top right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DA1D3A]/10 blur-[100px] rounded-full pointer-events-none" />
      {/* Red glow bottom left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#DA1D3A]/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-medium tracking-[0.3em] uppercase">What we offer</p>
            <div className="h-[1px] w-12 bg-[#DA1D3A]" />
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,90px)] uppercase leading-[0.92]">
            Our <span className="text-[#DA1D3A]">Services</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map(({ title, desc, image, badge }) => (
            <div key={title} className="group relative overflow-hidden cursor-pointer border border-white/10 hover:border-[#DA1D3A]/50 transition-all duration-300" style={{ minHeight: "300px" }}>
              {/* Background image */}
              <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1728] via-[#0f1728]/65 to-[#0f1728]/15 group-hover:from-[#0f1728] group-hover:via-[#0f1728]/50 group-hover:to-transparent transition-all duration-500" />

              {/* Red accent border bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Badge */}
              {badge && (
                <div className="absolute top-4 right-4 bg-[#DA1D3A] text-white text-xs font-medium px-3 py-1 uppercase tracking-wider z-10">
                  {badge}
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="font-display text-4xl uppercase text-white mb-3 group-hover:text-[#DA1D3A] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#DA1D3A] text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}