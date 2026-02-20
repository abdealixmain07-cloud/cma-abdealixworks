import { motion } from "framer-motion";

const columns = [
  {
    title: "Finance & Accounting",
    items: ["IND AS", "Budgeting & Cost Control", "Financial Reporting", "Working Capital Monitoring", "Variance Analysis"],
  },
  {
    title: "Financial Modelling & Valuation",
    items: ["3-Statement Modelling", "DCF Valuation", "Scenario Analysis", "Forecasting"],
  },
  {
    title: "Reporting & Analytics",
    items: ["Excel (Advanced)", "Power BI", "Dashboard Design", "Management Reporting"],
  },
  {
    title: "Automation & Tools",
    items: ["ChatGPT", "Claude", "NotebookLM", "Canva", "Gamma"],
  },
];

const Skills = () => (
  <section id="skills" className="py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Expertise</p>
        <h2 className="text-3xl md:text-4xl">Skills</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl">
        {columns.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08 }}
          >
            <h3 className="text-sm font-semibold mb-5 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
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
        className="mt-14 flex flex-wrap gap-3 max-w-5xl"
      >
        <span className="text-xs font-medium border border-border rounded-md px-4 py-2">CMA (Cost and Management Accountant)</span>
        <span className="text-xs font-medium border border-border rounded-md px-4 py-2">Financial Analyst</span>
      </motion.div>
    </div>
  </section>
);

export default Skills;
