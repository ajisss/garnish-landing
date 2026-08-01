import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsGarnish from "./components/WhatIsGarnish";
import ForWho from "./components/ForWho";
import ProofBar from "./components/ProofBar";
import Problem from "./components/Problem";
import BeforeAfter from "./components/BeforeAfter";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsGarnish />
        <div className="border-t border-zinc-100" />
        <ForWho />
        <div className="border-t border-zinc-100" />
        <Problem />
        <div className="border-t border-zinc-100" />
        <BeforeAfter />
        <div className="border-t border-zinc-100" />
        <HowItWorks />
        <div className="border-t border-zinc-100" />
        <Features />
        <div className="border-t border-zinc-100" />
        <Pricing />
        <div className="border-t border-zinc-100" />
        <FAQ />
        <div className="border-t border-zinc-100" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
