import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import FinanceTools from "@/components/FinanceTools";
import Portfolio from "@/components/Portfolio";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import AutomationWorkflow from "@/components/AutomationWorkflow";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      <Navbar />
      <Hero />
      <WhatIDo />
      <FinanceTools />
      <Portfolio />
      <CaseStudy />
      <Experience />
      <AutomationWorkflow />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <div className="mobile-sticky-cta md:hidden">
        <a
          href="#contact"
          className="block w-full text-center bg-foreground text-background py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Index;
