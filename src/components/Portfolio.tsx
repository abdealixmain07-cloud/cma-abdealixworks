import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, Sparkles, Plus, Minus } from "lucide-react";


const projects = [
  {
    title: "Real-Time FP&A Dashboard for Multi-Entity Decision Making",
    problem: "Leadership lacked real-time visibility into financial performance across multiple entities, leading to delayed and reactive decision-making.",
    solution: [
      "Integrated Power BI dashboard connected with Excel and Power Query",
      "Automated KPI tracking system for real-time updates",
    ],
    depth: "EBITDA, gross margin, burn rate, and cash runway tracking. Budget vs Actual variance analysis. Scenario modeling (Base, Upside, Downside).",
    impact: "Reduced reporting time by 70%. Enabled faster funding and cost optimization decisions.",
    metric: "70%",
    metricLabel: "Reporting Time ↓",
    tools: "Power BI, Excel, Power Query",
    image: "https://i.postimg.cc/tRWRdJW8/Screenshot-2026-02-20-141757-1.png",
  },
  {
    title: "Bookkeeping Ledger Cleanup & Financial Accuracy Restoration",
    problem: "Financial records contained thousands of misclassified transactions, making reporting unreliable.",
    solution: [
      "Reviewed and reclassified 3,000+ transactions",
      "Redesigned chart of accounts and reporting structure",
    ],
    depth: "Improved financial statement accuracy. Enabled audit-ready reporting.",
    impact: "Restored financial clarity for stakeholders. Improved decision-making reliability.",
    metric: "3K+",
    metricLabel: "Transactions Cleaned",
    tools: "QuickBooks, Tally, Xero, Zoho Books",
    image: "https://i.ibb.co/5f7yk7X/Screenshot-2026-04-03-163147.png",
  },
  {
    title: "KPI Dashboard & Performance Tracking System",
    problem: "Lack of structured KPI tracking limited visibility into operational performance.",
    solution: [
      "Built KPI dashboard using Power BI",
      "Integrated multiple data sources into a unified model",
    ],
    depth: "15+ KPIs tracked across revenue, cost, and operational metrics.",
    impact: "Improved visibility into performance metrics. Enabled data-driven management decisions.",
    metric: "15+",
    metricLabel: "KPIs Tracked",
    tools: "Advanced Excel, Power Query",
    image: "https://i.postimg.cc/dhyb4D1t/Screenshot-2026-02-20-142709-1.png",
  },
  {
    title: "Financial Reporting & Automation System",
    problem: "Manual reporting processes were time-consuming and error-prone.",
    solution: [
      "Built automated Excel + Power Query workflows",
      "Standardized reporting templates",
    ],
    depth: "Budget vs Actual variance analysis with early deviation alerts.",
    impact: "Reduced reporting effort significantly. Improved consistency and accuracy.",
    metric: "Auto",
    metricLabel: "Monthly Close",
    tools: "Excel Financial Modelling, Power Query",
    image: "https://i.postimg.cc/y1wYScgX/Screenshot-2026-02-20-144023-1.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Portfolio = () => (
  <section id="portfolio" className="relative py-24 section-divider overflow-hidden">
    {/* Subtle animated bg orbs */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <motion.div
        className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(220 20% 12%), transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="container mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3 flex items-center gap-2">
          <Sparkles className="w-3 h-3" /> Work
        </p>
        <h2 className="text-3xl md:text-4xl">Selected Projects</h2>
        <p className="text-sm text-muted-foreground mt-3">
          Built for real clients — demo numbers shown for confidentiality.
        </p>
      </motion.div>

      <div className="space-y-16 max-w-5xl">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -4 }}
            className="group relative grid md:grid-cols-2 gap-10 items-start bg-card/80 backdrop-blur border border-border rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-accent/25 hover:shadow-accent/5 transition-all duration-500"
          >
            {/* Number badge */}
            <div className="absolute -top-4 -left-4 md:-left-6 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold shadow-lg">
              0{i + 1}
            </div>

            {/* Image side */}
            <div className={`${i % 2 === 1 ? "md:order-2" : ""} relative`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-xl overflow-hidden border border-border shadow-md bg-secondary/30"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Metric chip overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                  className="absolute top-3 right-3 bg-background/95 backdrop-blur-md border border-accent/30 rounded-xl px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-accent" />
                    <span className="text-lg font-bold text-foreground leading-none">{p.metric}</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                    {p.metricLabel}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Content side */}
            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <h3 className="text-lg text-foreground font-semibold mb-3 leading-snug flex items-start gap-2">
                <span>{p.title}</span>
                <ArrowUpRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>

              <div className="mb-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Business Problem</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.problem}</p>
              </div>

              <div className="mb-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1.5">What I Built</p>
                <ul className="space-y-1">
                  {p.solution.map((s, si) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + si * 0.1, duration: 0.4 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-accent mt-0.5">→</span>
                      <span>{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.depth}</p>

              <div className="flex gap-3 text-sm mb-3 border-l-2 border-accent pl-3">
                <span className="text-muted-foreground font-semibold w-16 flex-shrink-0">Impact</span>
                <span className="text-foreground">{p.impact}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tools.split(", ").map((tool) => (
                  <span key={tool} className="text-[11px] border border-border rounded-md px-2.5 py-1 text-muted-foreground bg-secondary/50">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
