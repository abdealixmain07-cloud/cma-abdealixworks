import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Financial Reporting & Analysis",
    skills: [
      { name: "Financial Statements Preparation", metric: "50+ Reports Prepared", pct: 95 },
      { name: "MIS Reporting", metric: "30+ MIS Delivered", pct: 90 },
      { name: "Budget vs Actual Analysis", metric: "₹100Cr+ Analyzed", pct: 90 },
      { name: "KPI & Ratio Analysis", metric: "15+ KPIs Tracked", pct: 80 },
    ],
  },
  {
    title: "Automation & Tools",
    skills: [
      { name: "Advanced Microsoft Excel", metric: "5,000+ Hours", pct: 95 },
      { name: "Power BI Dashboard Development", metric: "8 Dashboards Built", pct: 78 },
      { name: "Power Query & Data Modeling", metric: "20+ Data Models", pct: 75 },
      { name: "Microsoft PowerPoint", metric: "100+ Decks Designed", pct: 92 },
    ],
  },
  {
    title: "Accounting Software",
    skills: [
      { name: "QuickBooks Online", metric: "12 Clients Managed", pct: 88 },
      { name: "Xero Accounting Software", metric: "6 Clients Handled", pct: 72 },
      { name: "Tally ERP", metric: "3+ Years Usage", pct: 82 },
      { name: "Bank Reconciliations", metric: "500+ Reconciled", pct: 90 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Technical Skills</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Technical & Financial Expertise</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <h3 className="font-bold mb-5 text-sm uppercase tracking-wider">{cat.title}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-primary font-bold">{skill.metric}</span>
                    <span className="text-[11px] text-muted-foreground font-semibold">{skill.pct}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
