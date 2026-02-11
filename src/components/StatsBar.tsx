import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Cost Audits", sub: "Assisted" },
  { value: "70+", label: "GST Returns", sub: "Filed Monthly" },
  { value: "₹100Cr+", label: "Financial Data", sub: "Analyzed" },
  { value: "SaaS", label: "Financial Dashboards", sub: "Built for Businesses" },
];

const StatsBar = () => (
  <section className="py-12 section-alt border-y border-border">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold golden-text">{s.value}</p>
            <p className="text-sm font-semibold mt-1">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default StatsBar;
