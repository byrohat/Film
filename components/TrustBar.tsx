const items = [
  "Russian & English Training",
  "Global Education",
  "Academic Guidance",
  "Student Support",
  "Career Opportunities",
];

export default function TrustBar() {
  return (
    <section aria-label="What GAN stands for" className="border-y border-white/10 bg-navy-900">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-sm font-medium tracking-wide text-white/70 sm:gap-x-8">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-gold-500 sm:block" aria-hidden="true" />}
              <span className={i === 0 ? "text-white" : undefined}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center font-display text-sm italic text-white/40">
          Connecting Students. Connecting Universities. Connecting Opportunities.
        </p>
      </div>
    </section>
  );
}
