import { motion } from "framer-motion";

const timeline = [
  {
    role: "Financial Analyst",
    company: "Ascendancy Business Solutions",
    period: "Current",
    metrics: ["8+ global entities managed", "70% faster reporting", "KPI dashboards for leadership", "Multi-currency reconciliation"],
  },
  {
    role: "Articleship Training",
    company: "CMA Practical Training",
    period: "2022 – 2024",
    metrics: ["12+ cost audits completed", "₹100Cr+ financial exposure", "GST/HST compliance", "Stock & concurrent audits"],
  },
];

const Experience = () => (
  <section id="experience" className="py-28 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">Career</p>
        <h2 className="text-4xl md:text-[44px]">Experience</h2>
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
              <h3 className="text-lg text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{item.role}</h3>
              <span className="text-xs text-accent font-medium">{item.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{item.company}</p>

            <div className="grid grid-cols-2 gap-2">
              {item.metrics.map((m) => (
                <div key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent/60 mt-0.5 text-xs">▸</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
