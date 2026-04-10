import { motion } from "framer-motion";

const columns = [
  {
    title: "Core Finance Skills",
    items: [
      "Financial Reporting & Close",
      "FP&A & Forecasting",
      "Financial Modelling (DCF, 3-Statement, LBO basics)",
      "Cost Analysis & Margin Optimization",
    ],
  },
  {
    title: "Tools & Systems",
    items: [
      "Excel (Advanced, Power Query, VBA)",
      "PowerPoint Presentations",
      "Power BI",
      "QuickBooks, Xero, Zoho, Tally",
    ],
  },
  {
    title: "Analytical Strengths",
    items: [
      "Variance Analysis",
      "Scenario Modeling",
      "KPI Design",
      "Financial Data Structuring",
    ],
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
        <h2 className="text-3xl md:text-4xl">Skills</h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-12 max-w-4xl">
        {columns.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold mb-6 tracking-wide text-foreground">
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-14 flex flex-wrap gap-3 max-w-4xl"
      >
        <span className="text-xs font-semibold border border-accent/20 text-accent rounded-lg px-4 py-2">CMA (Cost and Management Accountant)</span>
        <span className="text-xs font-semibold border border-accent/20 text-accent rounded-lg px-4 py-2">Financial Analyst</span>
      </motion.div>
    </div>
  </section>
);

export default Skills;
