import { motion } from "framer-motion";
import { Target } from "lucide-react";

const roles = [
  "Cost Accountant",
  "Financial Analyst",
  "FP&A Analyst",
  "MIS / Reporting Analyst",
  "Remote Finance & Reporting",
];

const TargetRoles = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Opportunities</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Target Roles</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {roles.map((role, i) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-card border border-border rounded-2xl px-6 py-4 text-center hover:border-primary/40 hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Target className="w-4 h-4 golden-text" />
            <h3 className="font-bold text-sm">{role}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetRoles;
