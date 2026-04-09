import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[700px]"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">About</p>
        <h2 className="text-3xl md:text-4xl mb-10">About Me</h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
          <p>
            I'm a CMA-qualified finance professional specializing in financial reporting, FP&A, and international accounting.
          </p>
          <p>
            My work focuses on building structured financial systems—turning unorganized financial data into accurate, decision-ready insights.
          </p>
          <p>
            I've worked across SaaS, gaming, manufacturing, and trust accounting environments, managing global clients and delivering financial clarity where it matters most: decision-making.
          </p>
          <p>
            I'm particularly interested in roles where finance, systems, and strategy intersect.
          </p>
          <p className="text-foreground font-semibold text-base border-l-2 border-accent pl-5 mt-8">
            I build financial systems that improve reporting accuracy, reduce manual effort, and enable better business decisions.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
