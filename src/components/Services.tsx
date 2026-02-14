import { motion } from "framer-motion";
import { Calculator, BarChart3, LayoutDashboard, BookOpen } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Cost Accounting & Audit",
    desc: "Cost allocation, BOM variance analysis, and cost audit compliance for manufacturing sectors.",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "FP&A & Budgeting",
    desc: "Budget variance, rolling forecasts, and KPI dashboards — EBITDA, Gross Margin, Burn Rate.",
  },
  {
    icon: LayoutDashboard,
    title: "Power BI & Excel Reporting",
    desc: "Automated dashboards and multi-entity consolidation using Power BI and Power Query.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Compliance",
    desc: "Month-end close, GST/tax filing, bank reconciliation, and AP management.",
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
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">What I Do</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`relative rounded-2xl p-6 transition-all duration-300 group text-center ${
              s.highlight
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 border-2 border-primary"
                : "bg-card border border-border hover:shadow-xl hover:border-primary/30"
            }`}
          >
            {s.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-primary-foreground text-primary px-3 py-0.5 rounded-full shadow">
                Core
              </div>
            )}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors ${
              s.highlight ? "bg-primary-foreground/15" : "bg-primary/10 group-hover:bg-primary/20"
            }`}>
              <s.icon className={`w-7 h-7 ${s.highlight ? "text-primary-foreground" : "golden-text"}`} />
            </div>
            <h3 className="font-bold mb-2">{s.title}</h3>
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
