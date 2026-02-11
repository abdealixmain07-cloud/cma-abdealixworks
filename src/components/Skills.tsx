import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Financial Reporting & Analysis",
    skills: [
      { name: "Financial Statements Preparation", level: "Advanced", pct: 95 },
      { name: "MIS Reporting", level: "Advanced", pct: 90 },
      { name: "Budget vs Actual Analysis", level: "Advanced", pct: 90 },
      { name: "KPI & Ratio Analysis", level: "Strong", pct: 80 },
    ],
  },
  {
    title: "Automation & Tools",
    skills: [
      { name: "Advanced Microsoft Excel", level: "Advanced", pct: 95 },
      { name: "Power BI Dashboard Development", level: "Strong", pct: 80 },
      { name: "Power Query & Data Modeling", level: "Strong", pct: 80 },
      { name: "Microsoft PowerPoint", level: "Advanced", pct: 90 },
    ],
  },
  {
    title: "Accounting Software",
    skills: [
      { name: "QuickBooks Online", level: "Advanced", pct: 90 },
      { name: "Xero Accounting Software", level: "Strong", pct: 80 },
      { name: "Tally ERP", level: "Strong", pct: 80 },
      { name: "Bank Reconciliations", level: "Advanced", pct: 90 },
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
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical & Financial Expertise</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h3 className="font-bold mb-4">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-xs text-primary font-medium">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
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
