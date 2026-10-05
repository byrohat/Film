import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WorldMap from "./WorldMap";

export default function GlobalNetwork() {
  return (
    <section aria-labelledby="network-title" className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-600/15 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="network-title"
          tone="light"
          eyebrow="Global Network"
          title="A Network Built Around Opportunity."
          description="GAN brings students, academic institutions and international opportunities closer together through a connected global education network."
        />
        <Reveal delay={150} className="mt-14">
          <WorldMap />
        </Reveal>
      </div>
    </section>
  );
}
