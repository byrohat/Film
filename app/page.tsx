import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Languages from "@/components/Languages";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyGan from "@/components/WhyGan";
import GlobalNetwork from "@/components/GlobalNetwork";
import HowItWorks from "@/components/HowItWorks";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Languages />
        <About />
        <Services />
        <WhyGan />
        <GlobalNetwork />
        <HowItWorks />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
