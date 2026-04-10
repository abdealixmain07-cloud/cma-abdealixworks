import { motion } from "framer-motion";

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
    tools: "Excel Financial Modelling, Power Query",
    image: "https://i.postimg.cc/y1wYScgX/Screenshot-2026-02-20-144023-1.png",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">Work</p>
        <h2 className="text-3xl md:text-4xl">Selected Projects</h2>
        <p className="text-sm text-muted-foreground mt-3 max-w-xl">Built for real clients — demo numbers shown for confidentiality.</p>
      </motion.div>

      <div className="space-y-16 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="grid md:grid-cols-2 gap-10 items-start bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-accent/15 transition-all duration-300"
          >
            <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="rounded-xl overflow-hidden border border-border shadow-md bg-secondary/30">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
              <h3 className="text-lg text-foreground font-semibold mb-3 leading-snug">{p.title}</h3>

              <div className="mb-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Business Problem</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.problem}</p>
              </div>

              <div className="mb-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1.5">What I Built</p>
                <ul className="space-y-1">
                  {p.solution.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-0.5">→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.depth}</p>

              <div className="flex gap-3 text-sm mb-3">
                <span className="text-muted-foreground font-semibold w-16 flex-shrink-0">Impact</span>
                <span className="text-foreground">{p.impact}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tools.split(", ").map((tool) => (
                  <span key={tool} className="text-[11px] border border-border rounded-md px-2.5 py-1 text-muted-foreground bg-secondary/50">{tool}</span>
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
