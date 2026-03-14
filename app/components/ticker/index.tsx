const items = [
  "🏆 Tournaments",
  "⚽ Football League",
  "🏀 Basketball League",
  "🏐 Volleyball League",
  "🎾 Tennis Program",
  "🏫 School Programs",
  "🏅 Elite Competitions",
  "👕 Team Registration",
  "📊 Live Standings",
  "🥇 Season Playoffs",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#DA1D3A] py-3 overflow-hidden border-y border-red-800">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-8 font-display text-white text-sm uppercase tracking-widest whitespace-nowrap">
            {item}
            <span className="text-red-300 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
