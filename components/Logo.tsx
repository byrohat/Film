type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.6" />
      <ellipse cx="24" cy="24" rx="7.5" ry="17" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.4" />
      <path d="M7.5 18.5h33M7.5 29.5h33" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.3" />
      <path
        d="M12.5 13.5 24 24l12.5-8.5M24 24l-8 12.5M24 24l11 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12.5" cy="13.5" r="2.6" fill="currentColor" />
      <circle cx="36.5" cy="15.5" r="2.6" fill="currentColor" />
      <circle cx="16" cy="36.5" r="2.6" fill="currentColor" />
      <circle cx="35" cy="34" r="2.6" fill="currentColor" />
      <circle cx="24" cy="24" r="3.6" fill="#c9a45c" />
    </svg>
  );
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy-900";
  const sub = variant === "light" ? "text-white/60" : "text-slate-text";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`h-10 w-10 shrink-0 ${variant === "light" ? "text-royal-400" : "text-royal-600"}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl font-semibold tracking-[0.08em] ${text}`}>GAN</span>
        <span className={`mt-1 text-[0.58rem] font-semibold tracking-[0.28em] ${sub}`}>
          GLOBAL ACADEMIC NETWORK
        </span>
      </span>
    </span>
  );
}
