import { motion } from "framer-motion";

const projects = [
  {
    title: "KPI & Dashboard Reporting (Excel)",
    impact: "Improved leadership visibility across revenue and cost metrics.",
    tools: "Advanced Excel, Power Query",
    outcome: "Centralized performance tracking enabling faster reviews.",
    image: "https://i.postimg.cc/jSgRq7YN/Screenshot-2026-02-20-142709-1.png",
  },
  {
    title: "Monthly Actual vs Budget Model",
    impact: "Strengthened cost discipline and spend visibility.",
    tools: "Excel financial modelling",
    outcome: "Early variance detection reducing unnecessary overspend.",
    image: "https://i.postimg.cc/RhLzk3TN/Screenshot-2026-02-20-144023-1.png",
  },
  {
    title: "Bookkeeping, Ledger & Financial Statement Reporting",
    impact: "End-to-end bookkeeping and financial statement accuracy for international clients.",
    tools: "QuickBooks, Tally, Xero, Zoho Books",
    outcome: "Delivered reconciled ledgers, balance sheets & P&L across 3+ currencies with 99.5% accuracy, reducing monthly close cycle by 40%.",
    image: "https://i.ibb.co/5f7yk7X/Screenshot-2026-04-03-163147.png",
  },
  {
    title: "Power BI KPI Dashboard",
    impact: "Executive-level performance visualization.",
    tools: "Power BI, Data modelling",
    outcome: "Real-time insights into revenue, margin, and expense trends.",
    image: "https://i.postimg.cc/tRWRdJW8/Screenshot-2026-02-20-141757-1.png",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-32 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">Work</p>
        <h2 className="text-4xl md:text-[44px]">Selected Projects</h2>
      </motion.div>

      <div className="space-y-16 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
          >
            {/* Image */}
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="rounded-lg overflow-hidden border border-border shadow-lg bg-card group">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{p.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">{p.impact}</p>
              
              <div className="space-y-3">
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
