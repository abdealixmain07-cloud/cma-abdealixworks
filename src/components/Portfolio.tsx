import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "KPI & Dashboard Reporting",
    impact: "Improved leadership visibility across revenue and cost metrics.",
    tools: "Advanced Excel, Power Query",
    outcome: "Centralized performance tracking enabling faster reviews.",
  },
  {
    title: "Monthly Actual vs Budget Model",
    impact: "Strengthened cost discipline and spend visibility.",
    tools: "Excel financial modelling",
    outcome: "Early variance detection reducing unnecessary overspend.",
  },
  {
    title: "Strategic Finance Presentation",
    impact: "Improved financial awareness across teams.",
    tools: "Financial modelling, Gamma, Canva",
    outcome: "Clear articulation of cost behavior and profitability drivers.",
  },
  {
    title: "Power BI KPI Dashboard",
    impact: "Executive-level performance visualization.",
    tools: "Power BI, Data modelling",
    outcome: "Real-time insights into revenue, margin, and expense trends.",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-28 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Work</p>
        <h2 className="text-3xl md:text-4xl">Selected Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-lg p-8 hover:border-foreground/20 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg">{p.title}</h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.impact}</p>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex gap-2 text-xs">
                <span className="text-muted-foreground font-medium w-16 flex-shrink-0">Tools</span>
                <span>{p.tools}</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="text-muted-foreground font-medium w-16 flex-shrink-0">Outcome</span>
                <span>{p.outcome}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
