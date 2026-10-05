import DottedMap from "dotted-map";

// Decorative dotted world map, computed at build time.
// Hub positions are abstract and intentionally unlabeled — they do not
// represent real institutions or live data.
const map = new DottedMap({ height: 44, grid: "diagonal" });
const points = map.getPoints();
const { width, height } = map.image;

const hubTargets: [number, number][] = [
  [0.22, 0.32],
  [0.3, 0.72],
  [0.5, 0.28],
  [0.6, 0.22],
  [0.53, 0.6],
  [0.72, 0.4],
  [0.86, 0.78],
];

const hubs = hubTargets.map(([fx, fy]) => {
  const tx = fx * width;
  const ty = fy * height;
  return points.reduce((best, p) =>
    (p.x - tx) ** 2 + (p.y - ty) ** 2 < (best.x - tx) ** 2 + (best.y - ty) ** 2 ? p : best,
  );
});

const links: [number, number][] = [
  [0, 2],
  [2, 3],
  [3, 5],
  [0, 1],
  [2, 4],
  [5, 6],
  [1, 4],
  [3, 4],
];

function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.3;
  return `M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`;
}

export default function WorldMap() {
  return (
    <svg
      viewBox={`-1 -6 ${width + 2} ${height + 8}`}
      className="h-auto w-full"
      role="img"
      aria-label="Decorative world map with connected network points"
    >
      <defs>
        <linearGradient id="mapArc" x1="0" x2="1">
          <stop offset="0%" stopColor="#5b86f2" />
          <stop offset="100%" stopColor="#d8b977" />
        </linearGradient>
      </defs>
      <g fill="#5b86f2" fillOpacity=".28">
        {points.map((p) => (
          <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r=".26" />
        ))}
      </g>
      <g fill="none" stroke="url(#mapArc)" strokeWidth=".18" strokeLinecap="round" strokeOpacity=".9">
        {links.map(([a, b]) => (
          <path key={`${a}-${b}`} d={arc(hubs[a], hubs[b])} />
        ))}
      </g>
      {hubs.map((h, i) => (
        <g key={`${h.x}-${h.y}`}>
          <circle cx={h.x} cy={h.y} r="1.4" fill="#5b86f2" fillOpacity=".2" className="animate-pulse-soft" style={{ animationDelay: `${i * 450}ms` }} />
          <circle cx={h.x} cy={h.y} r=".55" fill={i === 2 ? "#c9a45c" : "#ffffff"} />
        </g>
      ))}
    </svg>
  );
}
