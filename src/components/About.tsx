import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-28 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[700px]"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">About</p>
        <h2 className="text-4xl md:text-[44px] mb-10">About Me</h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
          <p>
            Cost and Management Accountant with a structured foundation in financial reporting, budgeting, and performance analysis across multi-entity operations.
          </p>
          <p>
            I believe disciplined cost structures enable sustainable expansion — while unmanaged spending quietly restricts scale.
          </p>
          <p className="text-foreground font-medium text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Finance should protect profitability and unlock scalable opportunity.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
