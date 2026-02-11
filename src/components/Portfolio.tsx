import { motion } from "framer-motion";
import projectDashboard from "@/assets/project-excel-dashboard.jpg";
import projectMIS from "@/assets/project-mis-report.jpg";
import projectAnalysis from "@/assets/project-data-analysis.jpg";
import projectKPI from "@/assets/project-kpi-tracking.jpg";

const projects = [
  {
    img: projectDashboard,
    title: "Automated Financial Excel Dashboard",
    desc: "Developed an Excel-based dashboard to monitor revenue, expenses, and key financial metrics, reducing reporting time and improving management visibility.",
    tags: ["Excel", "Automation", "Financial Metrics"],
  },
  {
    img: projectMIS,
    title: "Monthly MIS Reporting System",
    desc: "Designed a structured MIS reporting framework in Excel to standardize business performance tracking and improve reporting consistency.",
    tags: ["MIS", "Reporting", "Excel"],
  },
  {
    img: projectAnalysis,
    title: "Financial Data Analysis & Business Insights",
    desc: "Analyzed financial datasets to identify trends, cost patterns, and performance gaps to support management planning and decision-making.",
    tags: ["Data Analysis", "Trends", "Insights"],
  },
  {
    img: projectKPI,
    title: "KPI Performance Tracking Dashboard",
    desc: "Built an Excel-based KPI tracking system using automated formulas and visual summaries for business performance monitoring.",
    tags: ["KPI", "Dashboard", "Performance"],
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
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Finance & Reporting Projects</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Excel dashboards and financial reporting projects that deliver real business value
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
