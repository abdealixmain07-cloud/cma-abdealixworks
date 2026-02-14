import { motion } from "framer-motion";
import projectDashboard from "@/assets/project-excel-dashboard.jpg";
import projectMIS from "@/assets/project-mis-report.jpg";
import projectAnalysis from "@/assets/project-data-analysis.jpg";
import projectKPI from "@/assets/project-kpi-tracking.jpg";

const projects = [
  {
    img: projectDashboard,
    title: "Automated Cost & Revenue Dashboard",
    desc: "Built Excel-based consolidated dashboard tracking revenue, COGS, gross margin, and operating expenses for multi-entity SaaS startups using Power Query automation.",
    tags: ["Excel", "Power Query", "Cost Analysis", "SaaS"],
  },
  {
    img: projectMIS,
    title: "Monthly MIS & Variance Reporting",
    desc: "Designed structured MIS framework with Plan vs Actual variance analysis, budget tracking, and rolling forecast templates for CFO-level reporting.",
    tags: ["MIS", "Variance Analysis", "Budgeting"],
  },
  {
    img: projectAnalysis,
    title: "Cost Audit & Raw Material Analysis",
    desc: "Developed raw material cost models for ₹100+ Cr chemical manufacturing company — analyzing imported material usage across departments with monthly cost variance reports.",
    tags: ["Cost Audit", "Manufacturing", "Material Cost"],
  },
  {
    img: projectKPI,
    title: "KPI & Financial Performance Tracker",
    desc: "Built KPI tracking system monitoring EBITDA, Burn Rate, Runway, Gross Margin with automated formulas and visual summaries for executive decision-making.",
    tags: ["KPI", "EBITDA", "Financial Metrics"],
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
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Cost & Financial Projects</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Cost analysis, financial dashboards, and reporting projects delivering real business impact
        </p>
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
