import { motion } from "framer-motion";
import { Zap, BarChart3, FileSpreadsheet, Settings } from "lucide-react";

const systems = [
  {
    icon: FileSpreadsheet,
    text: "Built automated reporting systems using Excel and Power Query",
  },
  {
    icon: BarChart3,
    text: "Developed Power BI dashboards for financial and KPI tracking",
  },
  {
    icon: Settings,
    text: "Applied VBA for process automation",
  },
  {
    icon: Zap,
    text: "Streamlined financial workflows for efficiency and accuracy",
  },
];

const AutomationWorkflow = () => (
  <section id="automation" className="py-24 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">Systems</p>
        <h2 className="text-3xl md:text-4xl">Financial Systems & Automation</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
        {systems.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-accent/20 hover:shadow-md transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-foreground leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AutomationWorkflow;
