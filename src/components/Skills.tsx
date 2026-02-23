import { motion } from "framer-motion";

const columns = [
  {
    title: "Finance & Accounting",
    items: ["IND AS", "Budgeting & Cost Control", "Financial Reporting", "Working Capital Monitoring", "Variance Analysis", "Bookkeeping", "Ledger Management"],
  },
  {
    title: "Accounting Software",
    items: ["QuickBooks", "Tally ERP", "Xero", "Zoho Books"],
  },
  {
    title: "Reporting & Analytics",
    items: ["Excel (Advanced)", "PowerPoint Presentations", "Power BI", "Dashboard Design", "Management Reporting", "Balance Sheet & P&L"],
  },
  {
    title: "Automation & Tools",
    items: ["ChatGPT", "Claude", "NotebookLM", "Canva", "Gamma"],
  },
];

const Skills = () => (
  <section id="skills" className="py-32 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">Expertise</p>
        <h2 className="text-4xl md:text-[44px]">Skills</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl">
        {columns.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.5 }}
          >
            <h3 className="text-sm font-medium mb-6 tracking-wide text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
              {col.title}
            </h3>
            <ul className="space-y-3.5">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
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
        className="mt-16 flex flex-wrap gap-4 max-w-5xl"
      >
        <span className="text-xs font-medium border border-accent/25 text-accent rounded-md px-5 py-2.5">CMA (Cost and Management Accountant)</span>
        <span className="text-xs font-medium border border-accent/25 text-accent rounded-md px-5 py-2.5">Financial Analyst</span>
      </motion.div>
    </div>
  </section>
);

export default Skills;
