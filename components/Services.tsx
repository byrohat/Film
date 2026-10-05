import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  IconArrowUpRight,
  IconBook,
  IconBriefcase,
  IconCap,
  IconCompass,
  IconDocument,
  IconPlane,
  IconUsers,
} from "./icons";

const services = [
  {
    icon: IconCompass,
    title: "Academic Consulting",
    text: "Personalized academic guidance based on each student’s goals and future plans.",
  },
  {
    icon: IconCap,
    title: "University Guidance",
    text: "Support throughout the university selection and application journey.",
  },
  {
    icon: IconPlane,
    title: "International Education",
    text: "Guidance for students seeking educational opportunities abroad.",
  },
  {
    icon: IconDocument,
    title: "Application Support",
    text: "Professional assistance throughout the application process.",
  },
  {
    icon: IconUsers,
    title: "Student Advisory",
    text: "Personalized support before, during and after the education journey.",
  },
  {
    icon: IconBriefcase,
    title: "Career & Future Planning",
    text: "Helping students make informed decisions about their academic and professional future.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="What We Do"
          description="Comprehensive academic and education services designed for a global future."
        />

        <Reveal className="mt-14">
          <a
            href="#languages"
            className="group flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-royal-600 p-8 text-white shadow-xl shadow-navy-900/10 transition-transform hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-navy-950">
                <IconBook className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">Core program</p>
                <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
                  Private Russian &amp; English Training and Language Consulting
                </h3>
                <p className="mt-2 max-w-2xl text-white/70">
                  One-to-one lessons and a personal language plan — the foundation for every service below.
                </p>
              </div>
            </div>
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-full border border-white/25 transition-all group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 sm:self-center">
              <IconArrowUpRight className="h-5 w-5" />
            </span>
          </a>
        </Reveal>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100}>
              <article className="group relative h-full rounded-3xl border border-navy-900/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-royal-500/30 hover:shadow-xl hover:shadow-navy-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-100 text-royal-600 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-text">{text}</p>
                <span className="absolute right-7 top-8 h-px w-6 bg-gold-500 opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
