import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">About</p>
        <h2 className="text-3xl md:text-4xl mb-10">About Me</h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed">
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
          <p className="text-foreground font-medium">
            Finance should protect profitability and unlock scalable opportunity.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
