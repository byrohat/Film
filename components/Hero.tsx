import HeroVisual from "./HeroVisual";
import { IconArrowRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pt-36 lg:pb-28 lg:pt-44"
    >
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full bg-royal-600/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-[-20%] left-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="max-w-2xl">
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
            Private Russian &amp; English Training
            <span className="text-white/30" aria-hidden="true">|</span>
            Academic Consulting
          </p>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]"
          >
            Your Global Academic Journey <span className="italic text-gold-400">Starts Here.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
            Global Academic Network connects students with international education opportunities and provides
            trusted academic guidance every step of the way — starting with the languages that open doors.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-semibold text-navy-950 shadow-xl shadow-gold-500/20 transition-all hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0"
            >
              Start Your Journey
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#languages"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 active:translate-y-0"
            >
              Explore Our Services
            </a>
          </div>

          <p className="mt-10 text-sm tracking-wide text-white/45">
            Global education. Academic guidance. Better opportunities.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
