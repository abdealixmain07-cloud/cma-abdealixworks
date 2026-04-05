import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AutomationWorkflow from "@/components/AutomationWorkflow";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AutomationWorkflow />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <div className="mobile-sticky-cta md:hidden">
        <a
          href="#contact"
          className="block w-full text-center bg-foreground text-background py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Index;
