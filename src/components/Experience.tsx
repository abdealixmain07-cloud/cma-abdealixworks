import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    role: "Financial Reporting Analyst – FP&A",
    company: "Ascendancy Consultants & Advisors Pvt. Ltd.",
    period: "Current",
    location: "Multi-entity · International",
    status: "current" as const,
    highlights: [
      { stat: "8+", label: "International clients — end-to-end month-end close" },
      { stat: "70%", label: "Reporting time reduced via Power BI dashboards (EBITDA, burn, runway)" },
      { stat: "3", label: "Scenario forecasting models (Base / Upside / Downside)" },
      { stat: "3K+", label: "Transaction misclassifications corrected" },
      { stat: "100%", label: "Reconciliation accuracy on ERP migration" },
    ],
  },
  {
    role: "Article Assistant – Cost Audit",
    company: "S.S. Puranik & Associates",
    period: "2024 – 2025",
    location: "Manufacturing · Power · Trading",
    status: "past" as const,
    highlights: [
      { stat: "₹100Cr+", label: "Cost models built for manufacturing clients" },
      { stat: "Power", label: "Tariff determination support for power sector entities" },
      { stat: "70+", label: "Clients managed for GST & TDS compliance" },
      { stat: "Audits", label: "Conducted across manufacturing and trading entities" },
    ],
  },
];

const Experience = () => (
  <section id="experience" className="relative py-24 section-alt section-divider overflow-hidden">
    <div className="container mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3 flex items-center gap-2">
          <Briefcase className="w-3 h-3" /> Career
        </p>
        <h2 className="text-3xl md:text-4xl">Experience</h2>
        <p className="text-sm text-muted-foreground mt-3">
          Two roles, one focus — turning messy financial data into decision-ready reporting.
        </p>
      </motion.div>

      <div className="relative max-w-5xl">
        {/* Vertical spine */}
        <div
          aria-hidden
          className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:-translate-x-px"
        />

        <div className="space-y-10 md:space-y-16">
          {timeline.map((item, i) => {
            const side = i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)] md:text-left";
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative pl-12 md:pl-0 ${side}`}
              >
                {/* Node */}
                <div
                  aria-hidden
                  className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 flex items-center justify-center"
                >
                  <span
                    className={`relative w-4 h-4 rounded-full border-2 ${
                      item.status === "current"
                        ? "bg-accent border-accent"
                        : "bg-background border-muted-foreground/40"
                    }`}
                  >
                    {item.status === "current" && (
                      <span className="absolute inset-0 rounded-full bg-accent/50 animate-ping" />
                    )}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/90 backdrop-blur border border-border rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:border-accent/25 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg text-foreground font-semibold leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{item.company}</span>
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 flex-shrink-0 ${
                        item.status === "current"
                          ? "bg-accent/15 text-accent border border-accent/30"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      <CalendarDays className="w-3 h-3" /> {item.period}
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80 font-semibold mb-4">
                    {item.location}
                  </p>

                  <ul className="space-y-2.5">
                    {item.highlights.map((h, hi) => (
                      <motion.li
                        key={h.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + hi * 0.06, duration: 0.4 }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="min-w-[56px] text-center text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-md px-2 py-1 flex-shrink-0">
                          {h.stat}
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed pt-0.5 flex-1">
                          {h.label}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-accent/40 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
