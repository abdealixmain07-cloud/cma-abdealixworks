import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Portfolio from "@/components/Portfolio";
import InvestmentAnalysis from "@/components/InvestmentAnalysis";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import AutomationWorkflow from "@/components/AutomationWorkflow";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FinanceTools from "@/components/FinanceTools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Portfolio />
      <InvestmentAnalysis />
      <CaseStudy />
      <Experience />
      <AutomationWorkflow />
      <Skills />
      <FinanceTools />
      <About />
      <Contact />
      <Footer />
      <div className="mobile-sticky-cta md:hidden">
        <a
          href="#contact"
          className="block w-full text-center bg-foreground text-background py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Index;
