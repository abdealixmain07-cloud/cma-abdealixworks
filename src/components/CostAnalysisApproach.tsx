import { motion } from "framer-motion";
import { Search, BarChart3, Settings, TrendingUp, Eye } from "lucide-react";
import approachImage from "@/assets/cost-analysis-approach.jpg";

const steps = [
  { icon: Search, text: "Understanding cost structure and operational cost drivers" },
  { icon: BarChart3, text: "Performing structured variance analysis and cost evaluation" },
  { icon: Settings, text: "Reviewing overhead allocation and expense trends" },
  { icon: TrendingUp, text: "Supporting budgeting and financial performance monitoring" },
  { icon: Eye, text: "Building structured reporting systems for continuous performance visibility" },
];

const CostAnalysisApproach = () => (
  <section className="py-20 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Methodology</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Cost Analysis Approach</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
          My approach to financial and cost analysis includes:
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-xl"
        >
          <img src={approachImage} alt="Cost Analysis Approach" className="w-full h-auto object-cover" />
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 golden-text" />
              </div>
              <p className="text-sm font-medium leading-relaxed pt-2">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CostAnalysisApproach;
