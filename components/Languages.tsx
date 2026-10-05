import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowRight, IconCheck, IconClipboard, IconCompass, IconTarget } from "./icons";

const programs = [
  {
    lang: "English",
    native: "English",
    glyph: "EN",
    tagline: "The language of global academia and international careers.",
    points: [
      "One-to-one private lessons tailored to your level",
      "Academic English for studying abroad",
      "Exam-oriented preparation and practice",
      "Business and professional communication",
    ],
  },
  {
    lang: "Russian",
    native: "Русский язык",
    glyph: "RU",
    tagline: "A gateway to education, culture and opportunity across Eurasia.",
    points: [
      "One-to-one private lessons from beginner to advanced",
      "Russian for academic and university life",
      "Grammar, speaking and writing — built step by step",
      "Practical Russian for everyday and professional use",
    ],
  },
];

const consulting = [
  {
    icon: IconTarget,
    title: "Level Assessment",
    text: "A clear picture of where you are today and what you need next.",
  },
  {
    icon: IconClipboard,
    title: "Personal Learning Plan",
    text: "A structured roadmap built around your goals, schedule and pace.",
  },
  {
    icon: IconCompass,
    title: "Language Consulting",
    text: "Guidance on language requirements for your academic and career path.",
  },
];

export default function Languages() {
  return (
    <section id="languages" aria-labelledby="languages-title" className="relative bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="languages-title"
          eyebrow="Featured Programs"
          title="Private Russian & English Language Training."
          description="Language is the first step of every global journey. GAN offers private, personalized Russian and English training and language consulting — designed to prepare you for international education and beyond."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.lang} delay={i * 120} as="article">
              <div className="group relative h-full overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/10 transition-transform duration-500 hover:-translate-y-1 sm:p-10">
                <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-royal-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
                <span
                  className="pointer-events-none absolute -bottom-8 right-4 select-none font-display text-[9rem] font-semibold leading-none text-white/[0.04] sm:text-[11rem]"
                  aria-hidden="true"
                >
                  {p.glyph}
                </span>

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/40 bg-gold-500/10 font-display text-xl font-semibold text-gold-400">
                      {p.glyph}
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
                      Private · 1:1
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-3xl font-medium">
                    Private {p.lang} Training
                  </h3>
                  <p className="mt-1 text-sm tracking-wide text-gold-400" lang={p.lang === "Russian" ? "ru" : "en"}>
                    {p.native}
                  </p>
                  <p className="mt-4 max-w-md leading-relaxed text-white/70">{p.tagline}</p>

                  <ul className="mt-8 space-y-3.5">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[0.95rem] text-white/85">
                        <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold-400"
                  >
                    Request {p.lang} lessons
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 grid gap-8 rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_2.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-royal-600">Language Consulting</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-navy-900">
                More than lessons — a plan.
              </h3>
            </div>
            <ul className="grid gap-6 sm:grid-cols-3">
              {consulting.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-100 text-royal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-semibold text-navy-900">{title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-text">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
