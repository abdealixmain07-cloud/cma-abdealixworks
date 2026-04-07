import { motion } from "framer-motion";

const projects = [
  {
    title: "KPI & Dashboard Reporting",
    impact: "Centralized performance tracking across revenue, cost, and operational metrics for leadership visibility.",
    tools: "Advanced Excel, Power Query",
    outcome: "Enabled faster executive reviews and data-driven decision cycles.",
    image: "https://i.postimg.cc/jSgRq7YN/Screenshot-2026-02-20-142709-1.png",
    metrics: "15+ KPIs tracked",
  },
  {
    title: "Monthly Actual vs Budget Model",
    impact: "Structured cost discipline through systematic budget tracking and early variance detection.",
    tools: "Excel Financial Modelling",
    outcome: "Reduced unnecessary overspend through proactive deviation alerts.",
    image: "https://i.postimg.cc/JH0gJzvL/Screenshot-2026-04-03-163147.png?dl=1",
    metrics: "40% faster close cycle",
  },
  {
    title: "Bookkeeping, Ledger & Financial Statement Reporting",
    impact: "End-to-end bookkeeping and financial statement accuracy for international clients across 3+ currencies.",
    tools: "QuickBooks, Tally, Xero, Zoho Books",
    outcome: "Delivered reconciled ledgers, balance sheets & P&L with 99.5% accuracy.",
    image: "https://i.ibb.co/gBnpdnb/bookkeeping.png?dl=1",
    metrics: "3+ currencies managed",
  },
  {
    title: "Power BI KPI Dashboard",
    impact: "Executive-level performance visualization across revenue, margins, and expense trends.",
    tools: "Power BI, Data Modelling",
    outcome: "Real-time insights enabling faster strategic decisions for multi-entity operations.",
    image: "https://i.postimg.cc/tRWRdJW8/Screenshot-2026-02-20-141757-1.png",
    metrics: "8+ entities consolidated",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-28 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">Work</p>
        <h2 className="text-4xl md:text-[44px]">Selected Projects</h2>
      </motion.div>

      <div className="space-y-20 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`grid md:grid-cols-2 gap-12 items-center`}
          >
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-card group">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{p.title}</h3>
              </div>

              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">{p.metrics}</span>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.impact}</p>

              <div className="space-y-2.5">
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground font-medium w-20 flex-shrink-0">Tools</span>
                  <span className="text-foreground">{p.tools}</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground font-medium w-20 flex-shrink-0">Outcome</span>
                  <span className="text-foreground">{p.outcome}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
