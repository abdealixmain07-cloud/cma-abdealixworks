import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, KeyboardEvent } from "react";
import { TrendingUp, Sparkles, Plus, Minus } from "lucide-react";


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

const Portfolio = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const returnFocusToRef = useRef<number | null>(null);

  useEffect(() => {
    if (openIdx !== null || returnFocusToRef.current === null) return;
    const indexToFocus = returnFocusToRef.current;
    returnFocusToRef.current = null;
    requestAnimationFrame(() => {
      triggerRefs.current[indexToFocus]?.focus({ preventScroll: true });
    });
  }, [openIdx]);

  const focusTrigger = (i: number) => {
    const n = projects.length;
    const idx = ((i % n) + n) % n;
    triggerRefs.current[idx]?.focus();
  };

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusTrigger(i + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusTrigger(i - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTrigger(0);
        break;
      case "End":
        e.preventDefault();
        focusTrigger(projects.length - 1);
        break;
      case "Escape":
        if (openIdx !== null) {
          e.preventDefault();
          collapseProject(openIdx);
        }
        break;
    }
  };

  const collapseProject = (i: number) => {
    returnFocusToRef.current = i;
    setOpenIdx((current) => (current === i ? null : current));
  };

  const toggleProject = (i: number) => {
    if (openIdx === i) {
      collapseProject(i);
      return;
    }

    returnFocusToRef.current = null;
    setOpenIdx(i);
  };

  const onPanelKeyDown = (e: KeyboardEvent<HTMLDivElement>, i: number) => {
    if (e.key !== "Escape") return;
    e.preventDefault();
    collapseProject(i);
  };


  return (
    <section id="portfolio" className="relative py-24 section-divider overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> Work
          </p>
          <h2 className="text-3xl md:text-4xl">Selected Projects</h2>
          <p className="text-sm text-muted-foreground mt-3">
            Built for real clients — demo numbers shown for confidentiality. Click any project to expand.
          </p>
        </motion.div>

        <div className="max-w-4xl space-y-3">
          {projects.map((p, i) => {
            const isOpen = openIdx === i;
            const panelId = `project-panel-${i}`;
            const buttonId = `project-trigger-${i}`;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`group border border-border rounded-2xl bg-card/80 backdrop-blur overflow-hidden transition-all duration-300 ${isOpen ? "shadow-xl border-accent/30" : "hover:border-accent/25 hover:shadow-md"}`}
              >
                <button
                  id={buttonId}
                  ref={(el) => {
                    triggerRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => toggleProject(i)}
                  onKeyDown={(e) => onTriggerKeyDown(e, i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} project ${i + 1}: ${p.title}`}
                  className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
                >
                  <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base text-foreground font-semibold leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-muted-foreground mt-1 truncate">{p.tools}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 bg-accent/10 border border-accent/25 rounded-lg px-2.5 py-1.5 flex-shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 text-accent" />
                    <span className="text-sm font-bold text-foreground leading-none">{p.metric}</span>
                  </div>
                  <span
                    aria-hidden
                    className={`w-9 h-9 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-accent text-accent-foreground border-accent rotate-180" : "text-foreground group-hover:border-accent/50"}`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      onKeyDown={(e) => onPanelKeyDown(e, i)}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 pt-2 md:pt-4 border-t border-border/60">
                        <div className="relative rounded-xl overflow-hidden border border-border shadow-sm bg-secondary/30">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                          <div className="absolute top-3 right-3 bg-background/95 backdrop-blur-md border border-accent/30 rounded-xl px-3 py-2 shadow-lg">
                            <div className="flex items-center gap-1.5">
                              <TrendingUp className="w-3.5 h-3.5 text-accent" />
                              <span className="text-lg font-bold text-foreground leading-none">{p.metric}</span>
                            </div>
                            <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                              {p.metricLabel}
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="mb-4 flex justify-end">
                            <button
                              type="button"
                              onClick={() => collapseProject(i)}
                              aria-label={`Collapse open project: ${p.title}`}
                              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                            >
                              <Minus className="h-3.5 w-3.5" aria-hidden />
                              Collapse
                            </button>
                          </div>
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


