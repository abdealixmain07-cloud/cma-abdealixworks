import { motion } from "framer-motion";
import { CheckCircle2, BookOpen } from "lucide-react";

const proficient = [
  "Financial Reporting",
  "Month-End Close",
  "Cost Accounting",
  "Advanced Excel",
  "QuickBooks",
  "Tally ERP",
];

const knowledgeLevel = [
  "Power BI",
  "Zoho Books",
  "Financial Modeling",
  "Cost Reduction & Profitability Optimization",
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

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Proficient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
        >
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-sm uppercase tracking-wider">Proficient</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {proficient.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-3 border border-primary/10"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Knowledge Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
        >
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-sm uppercase tracking-wider">Knowledge Level</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {knowledgeLevel.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-3 border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
