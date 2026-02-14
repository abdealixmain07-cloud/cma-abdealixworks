import { motion } from "framer-motion";
import { BarChart3, Calculator, LayoutDashboard, BookOpen, Presentation } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Cost Accounting & Audit",
    tags: ["Cost Allocation", "BOM Variance", "Cost per Unit", "Cost Audits"],
    desc: "Deep cost analysis including material, labor & overhead allocation, standard vs actual variance, and cost audit compliance for manufacturing and utility sectors.",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "FP&A & Performance Analytics",
    tags: ["Budgeting", "Rolling Forecasts", "Plan vs Actual", "KPI Tracking"],
    desc: "Comprehensive financial planning with budget variance analysis, rolling forecasts, and executive KPI dashboards (EBITDA, Gross Margin, Burn Rate, Runway).",
    highlight: false,
  },
  {
    icon: LayoutDashboard,
    title: "Automated Dashboard & Reporting",
    tags: ["Power BI", "Excel Dashboards", "Power Query", "Multi-Entity"],
    desc: "Building automated dashboards and consolidated reporting systems using Power BI and Advanced Excel that transform raw data into visual, actionable insights.",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Compliance",
    tags: ["Month-End Close", "GST/Tax Filing", "Bank Reconciliation", "AP Management"],
    desc: "Full-cycle bookkeeping including journal entries, accruals, reconciliations, vendor management, and GST compliance for 70+ clients with 100% on-time filing.",
    highlight: false,
  },
  {
    icon: Presentation,
    title: "Financial Presentations & MIS",
    tags: ["PowerPoint", "Data Storytelling", "MIS Reports", "Executive Decks"],
    desc: "Creating professional financial presentations and MIS reports that communicate performance, trends, and strategic recommendations to C-suite stakeholders.",
    highlight: false,
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
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">How I Support Businesses</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Specialized in Cost Accounting, FP&A, and Financial Reporting for growing organizations
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`relative rounded-2xl p-6 transition-all duration-300 group overflow-hidden ${
              s.highlight
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 border-2 border-primary"
                : "bg-card border border-border hover:shadow-xl hover:border-primary/30"
            }`}
          >
            {s.highlight && (
              <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest bg-primary-foreground/20 px-2 py-0.5 rounded-full">
                Core Specialty
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                s.highlight ? "bg-primary-foreground/15" : "bg-primary/10 group-hover:bg-primary/20"
              }`}>
                <s.icon className={`w-6 h-6 ${s.highlight ? "text-primary-foreground" : "golden-text"}`} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-3">{s.title}</h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${
                    s.highlight
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-primary/10 golden-text"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className={`text-sm leading-relaxed ${s.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
