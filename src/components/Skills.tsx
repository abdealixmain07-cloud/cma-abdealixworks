import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cost & Finance",
    skills: [
      { name: "Cost Audits", metric: "12+ Completed", pct: 90 },
      { name: "Variance Analysis", metric: "₹100Cr+ Analyzed", pct: 92 },
      { name: "GST Compliance", metric: "70+ Clients", pct: 95 },
    ],
  },
  {
    title: "Data & Reporting",
    skills: [
      { name: "Advanced Excel", metric: "5,000+ Hours", pct: 96 },
      { name: "Power BI", metric: "8 Dashboards", pct: 78 },
      { name: "Financial Modeling", metric: "20+ Models", pct: 82 },
    ],
  },
  {
    title: "ERP & Tools",
    skills: [
      { name: "QuickBooks", metric: "12 Clients", pct: 88 },
      { name: "Tally ERP-9", metric: "3+ Years", pct: 85 },
      { name: "MySQL", metric: "50+ Queries", pct: 65 },
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
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Skills</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Core Competencies</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs text-primary font-bold">{skill.metric}</span>
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
