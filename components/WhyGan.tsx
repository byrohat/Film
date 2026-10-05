import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconGlobe, IconShield, IconTarget, IconTrend } from "./icons";

const reasons = [
  {
    icon: IconGlobe,
    title: "Global Perspective",
    text: "A broader view of international education opportunities.",
  },
  {
    icon: IconTarget,
    title: "Personalized Guidance",
    text: "Every student has different goals. Our approach is tailored accordingly.",
  },
  {
    icon: IconShield,
    title: "Trusted Support",
    text: "Clear, professional and student-focused guidance.",
  },
  {
    icon: IconTrend,
    title: "Future Focused",
    text: "We don’t only focus on the next step. We focus on where that step leads.",
  },
];

export default function WhyGan() {
  return (
    <section id="why-gan" aria-labelledby="why-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="why-title"
              align="left"
              eyebrow="Why GAN"
              title="Why Choose GAN?"
              description="A consulting partner that combines language expertise with a global academic outlook."
            />
            <Reveal delay={100}>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 active:translate-y-0"
              >
                Talk to an advisor
              </a>
            </Reveal>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 90} className={i % 2 === 1 ? "sm:translate-y-10" : undefined}>
                <article className="group h-full rounded-3xl border border-navy-900/8 bg-gradient-to-b from-mist to-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm text-navy-900/25">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-navy-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-text">{text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
