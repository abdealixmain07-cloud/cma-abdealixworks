import { motion } from "framer-motion";

const CaseStudy = () => (
  <section id="casestudy" className="py-28 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">Featured Case Study</p>
        <h2 className="text-3xl md:text-[40px] max-w-2xl">Building a Real-Time FP&A Dashboard for Multi-Entity Decision Making</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Problem</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Managing financial performance across multiple international entities lacked real-time visibility, standardized reporting, and decision-ready insights. Leadership relied on delayed and manual reports.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Solution</h3>
            <ul className="space-y-2.5">
              {[
                "Automated data flow using Power Query",
                "Tracked key KPIs: EBITDA, burn rate, margins, runway",
                "Built dynamic scenario analysis (Base / Upside / Downside)",
                "Integrated Actual vs Budget tracking",
                "Created centralized reporting for 8+ entities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "70%", label: "Reduction in reporting time" },
                { metric: "8+", label: "Entities consolidated" },
                { metric: "3x", label: "Faster strategic decisions" },
                { metric: "99.5%", label: "Reporting accuracy" },
              ].map((item) => (
                <div key={item.label} className="border border-border rounded-lg p-4 bg-secondary">
                  <p className="text-xl font-semibold text-accent" style={{ fontFamily: "'Inter', sans-serif" }}>{item.metric}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "Excel", "Power Query", "Financial Modeling"].map((tool) => (
                <span key={tool} className="text-xs border border-border rounded-md px-3 py-1.5 text-muted-foreground bg-card">{tool}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>What I'd Improve Next</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent/50">•</span>Integrate live database connections</li>
              <li className="flex items-start gap-2"><span className="text-accent/50">•</span>Build CFO-level executive summary dashboards</li>
              <li className="flex items-start gap-2"><span className="text-accent/50">•</span>Add automated anomaly detection in expense trends</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CaseStudy;
