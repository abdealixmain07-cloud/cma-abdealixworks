import { motion } from "framer-motion";
import { FileText, TrendingUp, Cpu } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "Financial Reporting & Close",
    desc: "End-to-end month-end close for multi-entity global clients",
    details: [
      "Consolidations, accruals, reconciliations, and audit-ready reporting",
      "Structured reporting cycles replacing ad hoc processes",
    ],
  },
  {
    icon: TrendingUp,
    title: "FP&A & Forecasting",
    desc: "Budgeting, forecasting, and variance analysis",
    details: [
      "KPI tracking: EBITDA, gross margin, burn rate, cash runway",
      "Scenario modeling (Base, Upside, Downside)",
    ],
  },
  {
    icon: Cpu,
    title: "Financial Systems & Automation",
    desc: "Power BI dashboards + Excel (Power Query + VBA)",
    details: [
      "Automated reporting pipelines reducing manual effort by 70%",
      "Real-time financial visibility for leadership decisions",
    ],
  },
];

const WhatIDo = () => (
  <section id="services" className="py-24 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">Capabilities</p>
        <h2 className="text-3xl md:text-4xl mb-3">I Solve Financial Visibility & Decision-Making Problems</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group border border-border rounded-2xl p-7 bg-card transition-all duration-300 hover:shadow-lg hover:border-accent/20 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/12 transition-colors duration-300">
              <p.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg mb-2 text-foreground font-semibold">{p.title}</h3>
            <p className="text-sm text-accent font-medium mb-4">{p.desc}</p>
            <ul className="space-y-2">
              {p.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent/50 mt-0.5 text-xs">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
