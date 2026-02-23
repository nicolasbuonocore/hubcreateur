import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import WhySection from "@/components/WhySection";
import MethodSection from "@/components/MethodSection";
import Simulator from "@/components/Simulator";
import ThumbnailCompare from "@/components/ThumbnailCompare";

import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

/* ============================================
   Page d'accueil — Hub Créateur
   Assemblage de toutes les sections
   ============================================ */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <WhySection />
        <MethodSection />
        <Simulator />
        <ThumbnailCompare />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
