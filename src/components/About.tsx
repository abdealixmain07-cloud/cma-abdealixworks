import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-32 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[800px] mx-auto"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">About</p>
        <h2 className="text-4xl md:text-[44px] mb-12">About Me</h2>

        <div className="space-y-6 text-muted-foreground leading-[1.8] text-base">
          <p>
            Cost and Management Accountant with a structured foundation in financial reporting, budgeting, and performance analysis.
          </p>
          <p>
            Strong exposure to IND AS, financial modelling, and valuation frameworks supporting data-driven decisions.
          </p>
          <p>
            I believe disciplined cost structures enable sustainable expansion — while unmanaged spending quietly restricts scale.
          </p>
          <p>
            My focus is improving margin visibility, strengthening financial controls, and supporting revenue growth through structured insights.
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
