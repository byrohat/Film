import { IconCap, IconChat } from "./icons";

// Decorative globe: meridians, connection arcs and network nodes.
const nodes = [
  { x: 150, y: 170 },
  { x: 262, y: 128 },
  { x: 352, y: 196 },
  { x: 198, y: 290 },
  { x: 318, y: 318 },
  { x: 120, y: 262 },
];

const arcs = [
  "M150 170 Q206 110 262 128",
  "M262 128 Q330 140 352 196",
  "M150 170 Q160 250 198 290",
  "M198 290 Q262 340 318 318",
  "M352 196 Q360 270 318 318",
  "M120 262 Q190 210 262 128",
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[8%] rounded-full bg-royal-500/25 blur-3xl" aria-hidden="true" />

      <svg viewBox="0 0 480 480" className="relative h-full w-full" role="img" aria-label="Illustration of a globe connected by an academic network">
        <defs>
          <radialGradient id="globeFill" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#1d3a75" />
            <stop offset="60%" stopColor="#0d1f3d" />
            <stop offset="100%" stopColor="#060f22" />
          </radialGradient>
          <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5b86f2" />
            <stop offset="100%" stopColor="#d8b977" />
          </linearGradient>
          <clipPath id="globeClip">
            <circle cx="240" cy="240" r="170" />
          </clipPath>
        </defs>

        <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
          <circle cx="240" cy="240" r="222" stroke="#5b86f2" strokeOpacity=".18" strokeDasharray="2 8" fill="none" />
        </g>
        <circle cx="240" cy="240" r="198" stroke="#ffffff" strokeOpacity=".06" fill="none" />

        <circle cx="240" cy="240" r="170" fill="url(#globeFill)" stroke="#5b86f2" strokeOpacity=".5" />

        <g clipPath="url(#globeClip)" stroke="#5b86f2" strokeOpacity=".22" fill="none" strokeWidth="1">
          {[40, 80, 120, 160].map((rx) => (
            <ellipse key={rx} cx="240" cy="240" rx={rx} ry="170" />
          ))}
          {[-120, -60, 0, 60, 120].map((dy) => (
            <ellipse key={dy} cx="240" cy={240 + dy} rx={Math.sqrt(170 * 170 - dy * dy)} ry={10 + Math.abs(dy) / 12} />
          ))}
        </g>

        <g fill="none" stroke="url(#arcStroke)" strokeWidth="1.6" strokeLinecap="round">
          {arcs.map((d, i) => (
            <path key={d} d={d} className="arc-draw" style={{ animationDelay: `${300 + i * 220}ms` }} />
          ))}
        </g>

        {nodes.map((n, i) => (
          <g key={`${n.x}-${n.y}`}>
            <circle cx={n.x} cy={n.y} r="10" fill="#5b86f2" fillOpacity=".18" className="animate-pulse-soft" style={{ animationDelay: `${i * 400}ms` }} />
            <circle cx={n.x} cy={n.y} r="4" fill={i === 1 ? "#c9a45c" : "#ffffff"} />
          </g>
        ))}

        <ellipse cx="240" cy="430" rx="120" ry="10" fill="#000" fillOpacity=".25" />
      </svg>

      <div className="absolute left-0 top-[14%] animate-float rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 shadow-2xl backdrop-blur-md sm:-left-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-royal-500/20 text-royal-400">
            <IconChat className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Private lessons</p>
            <p className="text-sm font-semibold text-white">
              English <span className="text-gold-400">·</span> Русский
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-[12%] right-0 animate-float rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 shadow-2xl backdrop-blur-md sm:-right-2"
        style={{ animationDelay: "-4s" }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
            <IconCap className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Academic guidance</p>
            <p className="text-sm font-semibold text-white">Every step of the way</p>
          </div>
        </div>
      </div>
    </div>
  );
}
