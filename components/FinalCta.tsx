import Reveal from "./Reveal";
import { IconArrowRight } from "./icons";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-white px-5 py-24 sm:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
          <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-royal-500/30 blur-[100px]" aria-hidden="true" />
          <div className="absolute -bottom-24 right-0 -z-10 h-56 w-56 rounded-full bg-gold-500/15 blur-[80px]" aria-hidden="true" />

          <h2 id="cta-title" className="mx-auto max-w-3xl font-display text-3xl font-medium leading-tight sm:text-5xl">
            Ready to Start Your Global Academic Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Let’s build the right path for your education and future — whether it starts with Russian, English or your
            next academic step.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-gold-400 active:translate-y-0"
            >
              Get Started
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/5 active:translate-y-0"
            >
              Contact GAN
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
