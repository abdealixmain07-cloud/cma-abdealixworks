import { motion } from "framer-motion";
import { BarChart3, Calculator, LayoutDashboard, BookOpen, Presentation } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "FP&A & Performance Analysis",
    tags: ["Forecasting", "Budgeting", "Variance Analysis", "KPI Tracking"],
    desc: "Developing comprehensive financial forecasts, budget variance analysis, and performance analytics to support executive decision-making and drive business growth.",
  },
  {
    icon: Calculator,
    title: "Cost Management & Accounting",
    tags: ["Cost Control", "Profitability Analysis", "Cost Allocation"],
    desc: "Delivering cost accounting expertise including cost allocation, profitability analysis, and expense optimization to improve margins and operational efficiency.",
  },
  {
    icon: LayoutDashboard,
    title: "Automated Dashboard Development",
    tags: ["Excel Dashboards", "Power BI", "Real-time Reporting"],
    desc: "Building automated dashboards and real-time reporting systems that transform raw financial data into visual, actionable insights for stakeholder analysis.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Reconciliation",
    tags: ["Bank Reconciliation", "GL Review", "Month-End Close"],
    desc: "Managing full-cycle bookkeeping operations including bank reconciliations, transaction categorization, and monthly financial closing procedures for international clients.",
  },
  {
    icon: Presentation,
    title: "Business Presentation Design",
    tags: ["PowerPoint", "Data Storytelling", "Executive Reporting"],
    desc: "Creating professional PowerPoint presentations that showcase financial insights, business performance, and strategic recommendations with compelling visual narratives.",
  },
];

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Services</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">How I Support Businesses</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Specialized in FP&A, Cost Accounting, and Financial Reporting for growing businesses
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 golden-text" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core Expertise</span>
            </div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {s.tags.map((t) => (
                <span key={t} className="text-[11px] bg-primary/10 golden-text px-2 py-0.5 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
