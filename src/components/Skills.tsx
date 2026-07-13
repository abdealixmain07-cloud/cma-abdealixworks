import { motion } from "framer-motion";
import { LineChart, Wrench, Sparkles, Award } from "lucide-react";

const categories = [
  {
    icon: LineChart,
    title: "Core Finance",
    items: ["Financial Reporting & Close", "FP&A & Forecasting", "Financial Modelling (DCF, 3-Statement)", "Cost & Margin Analysis"],
  },
  {
    icon: Wrench,
    title: "Tools & Systems",
    items: ["Excel (Advanced, Power Query, VBA)", "PowerPoint Presentations", "Power BI", "QuickBooks · Xero · Zoho · Tally"],
  },
  {
    icon: Sparkles,
    title: "Analytical Strengths",
    items: ["Variance Analysis", "Scenario Modeling", "KPI Design", "Financial Data Structuring"],
  },
  {
    icon: Award,
    title: "Credentials",
    items: ["CMA — ICMAI", "Financial Analyst", "8+ International Clients", "UAE Compliance Aware"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">Expertise</p>
        <h2 className="text-3xl md:text-4xl">Skills & Credentials</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {categories.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.5 }}
            className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
              <col.icon className="w-4 h-4 text-accent" strokeWidth={1.8} />
            </div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide text-foreground">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-snug">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
