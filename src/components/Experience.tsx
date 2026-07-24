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

// Deterministic pseudo-random candlestick data
const candles = Array.from({ length: 32 }).map((_, i) => {
  const seed = Math.sin(i * 1.3) * 10;
  const mid = 50 + Math.sin(i * 0.45) * 18 + (i * 0.6);
  const range = 6 + Math.abs(seed % 6);
  const open = mid - (seed % 4);
  const close = mid + ((seed * 1.7) % 5);
  const high = Math.max(open, close) + range * 0.4;
  const low = Math.min(open, close) - range * 0.4;
  return { i, open, close, high, low, up: close >= open };
});

const CandlestickChart = () => {
  // viewBox: 0..320 x 0..140
  const stepX = 320 / candles.length;
  const toY = (v: number) => 140 - v * 1.05;

  // Build a smooth line across midpoints
  const linePath = candles
    .map((c, idx) => {
      const x = idx * stepX + stepX / 2;
      const y = toY((c.open + c.close) / 2);
      return `${idx === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 320 140"
      preserveAspectRatio="none"
      className="w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(22 100% 60%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(38 92% 62%)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(22 100% 60%)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="hsl(22 100% 60%)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid */}
      <g stroke="hsl(220 30% 90% / 0.06)" strokeWidth="0.5">
        {[0, 1, 2, 3, 4].map((r) => (
          <line key={r} x1="0" x2="320" y1={r * 30 + 10} y2={r * 30 + 10} />
        ))}
      </g>

      {/* Candles */}
      <g>
        {candles.map((c, idx) => {
          const x = idx * stepX + stepX / 2;
          const bodyTop = toY(Math.max(c.open, c.close));
          const bodyBottom = toY(Math.min(c.open, c.close));
          const color = c.up ? "hsl(142 70% 55%)" : "hsl(0 84% 62%)";
          return (
            <g
              key={idx}
              className="candle"
              style={{ animationDelay: `${idx * 90}ms`, transformOrigin: `${x}px 140px` }}
            >
              <line
                x1={x}
                x2={x}
                y1={toY(c.high)}
                y2={toY(c.low)}
                stroke={color}
                strokeOpacity="0.7"
                strokeWidth="0.8"
              />
              <rect
                x={x - stepX * 0.28}
                y={bodyTop}
                width={stepX * 0.56}
                height={Math.max(1.4, bodyBottom - bodyTop)}
                fill={color}
                fillOpacity="0.85"
              />
            </g>
          );
        })}
      </g>

      {/* Trend line + fill */}
      <path
        d={`${linePath} L320,140 L0,140 Z`}
        fill="url(#chart-fill)"
        opacity="0.9"
      />
      <path
        d={linePath}
        fill="none"
        stroke="url(#chart-line)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-soft)"
        className="chart-line-draw"
      />
    </svg>
  );
};

const Experience = () => (
  <section
    id="experience"
    className="relative py-24 md:py-28 overflow-hidden isolate experience-dark"
  >
    {/* Dark backdrop layers */}
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[hsl(220_35%_7%)]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, hsl(22 100% 50% / 0.18), transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(220 80% 40% / 0.22), transparent 55%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
        }}
      />
      {/* Candlestick chart */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] md:h-[60%] opacity-[0.55] md:opacity-60 pointer-events-none">
        <CandlestickChart />
      </div>
      {/* Gold sweep */}
      <div className="absolute inset-0 exp-gold-sweep pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[hsl(220_35%_7%)]" />
    </div>

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
        <h2 className="text-3xl md:text-4xl text-white">Experience</h2>
        <p className="text-sm text-white/60 mt-3">
          Two roles, one focus — turning messy financial data into decision-ready reporting.
        </p>
      </motion.div>

      <div className="relative max-w-5xl">
        {/* Vertical spine */}
        <div
          aria-hidden
          className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/80 via-white/15 to-transparent md:-translate-x-px shadow-[0_0_12px_hsl(22_100%_50%/0.5)]"
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
                        ? "bg-accent border-accent shadow-[0_0_18px_hsl(22_100%_50%/0.9)]"
                        : "bg-[hsl(220_35%_10%)] border-white/30 shadow-[0_0_10px_hsl(220_80%_50%/0.4)]"
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
                  className="relative rounded-2xl p-6 md:p-7 border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:border-accent/40 hover:shadow-[0_20px_60px_-15px_hsl(22_100%_50%/0.35)] transition-all duration-300 exp-card-glow"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg text-white font-semibold leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs md:text-sm text-white/60 mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{item.company}</span>
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 flex-shrink-0 ${
                        item.status === "current"
                          ? "bg-accent/20 text-accent border border-accent/40 shadow-[0_0_16px_hsl(22_100%_50%/0.35)]"
                          : "bg-white/5 text-white/70 border border-white/15"
                      }`}
                    >
                      <CalendarDays className="w-3 h-3" /> {item.period}
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold mb-4">
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
                        <span className="min-w-[56px] text-center text-xs font-bold text-accent bg-accent/15 border border-accent/30 rounded-md px-2 py-1 flex-shrink-0 shadow-[0_0_12px_hsl(22_100%_50%/0.25)]">
                          {h.stat}
                        </span>
                        <span className="text-sm text-white/75 leading-relaxed pt-0.5 flex-1">
                          {h.label}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-accent/60 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
