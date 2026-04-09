import { motion } from "framer-motion";

const timeline = [
  {
    role: "Financial Reporting Analyst – FP&A",
    company: "Ascendancy Consultants & Advisors Pvt. Ltd.",
    period: "Current",
    metrics: [
      "Managed end-to-end month-end close for 8+ international clients",
      "Built dashboards tracking EBITDA, burn rate, and runway, reducing reporting time by 70%",
      "Developed 3-scenario forecasting models for strategic planning",
      "Corrected 3,000+ transaction misclassifications, improving reporting accuracy",
      "Led ERP migration with 100% reconciliation accuracy",
    ],
  },
  {
    role: "Article Assistant – Cost Audit",
    company: "S.S. Puranik & Associates",
    period: "2024 – 2025",
    metrics: [
      "Built cost models for INR 100+ Cr manufacturing clients",
      "Supported tariff determination for power sector entities",
      "Managed GST & TDS compliance for 70+ clients",
      "Conducted audits across manufacturing and trading entities",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">Career</p>
        <h2 className="text-3xl md:text-4xl">Experience</h2>
      </motion.div>

      <div className="max-w-3xl space-y-0 relative">
        <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative pl-12 pb-14 last:pb-0"
          >
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center shadow-sm">
              <div className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-accent" : "bg-muted-foreground/30"}`} />
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-1">
              <h3 className="text-lg text-foreground font-semibold">{item.role}</h3>
              <span className="text-xs text-accent font-semibold">{item.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{item.company}</p>

            <ul className="space-y-2">
              {item.metrics.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent/50 mt-0.5 text-xs">→</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
