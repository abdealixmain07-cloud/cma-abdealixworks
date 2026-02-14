import { motion } from "framer-motion";
import projectDashboard from "@/assets/project-excel-dashboard.jpg";
import projectMIS from "@/assets/project-mis-report.jpg";
import projectAnalysis from "@/assets/project-data-analysis.jpg";
import projectKPI from "@/assets/project-kpi-tracking.jpg";

const projects = [
  {
    img: projectDashboard,
    title: "Cost & Revenue Dashboard",
    desc: "Excel-based consolidated dashboard tracking revenue, COGS, and gross margin for multi-entity SaaS startups using Power Query.",
    tags: ["Excel", "Power Query", "SaaS"],
  },
  {
    img: projectMIS,
    title: "MIS & Variance Reporting",
    desc: "Plan vs Actual variance analysis with budget tracking and rolling forecast templates for CFO-level reporting.",
    tags: ["MIS", "Variance", "Budgeting"],
  },
  {
    img: projectAnalysis,
    title: "Raw Material Cost Analysis",
    desc: "Cost models for ₹100Cr+ chemical manufacturing — department-wise material usage with monthly variance reports.",
    tags: ["Cost Audit", "Manufacturing"],
  },
  {
    img: projectKPI,
    title: "KPI Performance Tracker",
    desc: "EBITDA, Burn Rate, Runway & Gross Margin tracking with automated formulas and executive summaries.",
    tags: ["KPI", "EBITDA", "Metrics"],
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Projects</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Key Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="overflow-hidden h-48">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] bg-primary/10 golden-text px-2.5 py-0.5 rounded-full font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
