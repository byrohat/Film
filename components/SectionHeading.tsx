import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  id,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] ${
          tone === "dark" ? "text-royal-600" : "text-gold-400"
        }`}
      >
        <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-5 font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-navy-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "dark" ? "text-slate-text" : "text-white/70"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
