import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", title: "Discover", text: "Tell us about your academic and language goals." },
  { n: "02", title: "Plan", text: "Explore opportunities and create the right education path." },
  { n: "03", title: "Move Forward", text: "Get the guidance and support you need to take the next step." },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="how-title" eyebrow="How It Works" title="Your Journey. Simplified." />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-royal-500/40 via-gold-500/70 to-royal-500/40 md:block"
            aria-hidden="true"
          />
          <span className="absolute bottom-6 left-7 top-7 w-px bg-gradient-to-b from-royal-500/40 via-gold-500/70 to-royal-500/40 md:hidden" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 150} className="relative flex gap-6 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-navy-900 font-display text-lg text-gold-400 shadow-lg shadow-navy-900/20">
                {s.n}
              </span>
              <div className="md:mt-7">
                <h3 className="font-display text-2xl font-medium text-navy-900">{s.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-slate-text">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
