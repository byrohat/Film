import { LogoMark } from "./Logo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconCap, IconGlobe, IconPlane, IconUsers } from "./icons";

const pillars = [
  { icon: IconGlobe, label: "Global Reach", text: "A perspective that goes beyond borders." },
  { icon: IconCap, label: "Academic Guidance", text: "Informed advice for every academic decision." },
  { icon: IconUsers, label: "Student Support", text: "A dedicated point of contact throughout." },
  { icon: IconPlane, label: "International Opportunities", text: "Pathways to education around the world." },
];

const orbit = [
  { label: "Students", angle: -90 },
  { label: "Languages", angle: -18 },
  { label: "Institutions", angle: 54 },
  { label: "Careers", angle: 126 },
  { label: "Guidance", angle: 198 },
];

function AboutVisual() {
  const r = 34;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2.5rem] bg-navy-900" />
      <div className="bg-grid absolute inset-0 rounded-[2.5rem] opacity-70" aria-hidden="true" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-royal-400/30" aria-hidden="true" />
      <div className="absolute inset-[30%] rounded-full border border-white/10" aria-hidden="true" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {orbit.map(({ angle }) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1="50"
              y1="50"
              x2={50 + r * Math.cos(rad)}
              y2={50 + r * Math.sin(rad)}
              stroke="#5b86f2"
              strokeOpacity=".35"
              strokeWidth=".35"
              strokeDasharray="1 1.2"
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-800 shadow-[0_0_60px_rgba(47,99,232,0.45)] ring-1 ring-white/10">
        <LogoMark className="h-14 w-14 text-royal-400" />
      </div>

      {orbit.map(({ label, angle }) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <span
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-navy-800/90 px-3 py-1.5 text-xs font-medium text-white/85 shadow-lg backdrop-blur"
            style={{ left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%` }}
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold-500 align-middle" aria-hidden="true" />
            {label}
          </span>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow="About GAN"
            title="Global Education Without Borders."
            description="Global Academic Network helps students navigate international education with confidence. From academic guidance to university opportunities, GAN provides personalized support designed around each student’s goals."
          />
          <Reveal delay={100}>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-text">
              With private Russian and English training at the core of our work, we help students build the language
              foundation that international education demands — and then guide them toward the right next step.
            </p>
          </Reveal>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy-900/8 bg-navy-900/8 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, label, text }, i) => (
              <Reveal key={label} delay={i * 80} className="bg-white p-6">
                <dt className="flex items-center gap-3 font-semibold text-navy-900">
                  <Icon className="h-5 w-5 text-royal-600" />
                  {label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-text">{text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={150}>
          <AboutVisual />
        </Reveal>
      </div>
    </section>
  );
}
