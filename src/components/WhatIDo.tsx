import { motion } from "framer-motion";
import { TrendingUp, BarChart3, TrendingDown } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Financial Planning & Analysis",
    desc: "Budgeting, forecasting, variance analysis",
    detail: "Building financial models that support strategic decision-making across multi-entity operations.",
  },
  {
    icon: BarChart3,
    title: "Dashboarding & Automation",
    desc: "Power BI, Excel automation, real-time insights",
    detail: "Transforming raw financial data into executive-ready dashboards with automated reporting workflows.",
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    desc: "Margin improvement, cost modeling, efficiency",
    detail: "Identifying cost drivers, reducing overhead leakage, and improving operational margins through structured analysis.",
  },
];

const WhatIDo = () => (
  <section id="services" className="py-28 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">Capabilities</p>
        <h2 className="text-4xl md:text-[44px]">What I Do</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative border border-border rounded-xl p-8 bg-card transition-all duration-300 hover:shadow-xl hover:border-accent/30 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors duration-300">
                <p.icon className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg mb-2 text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{p.title}</h3>
              <p className="text-sm text-accent/80 font-medium mb-3">{p.desc}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
