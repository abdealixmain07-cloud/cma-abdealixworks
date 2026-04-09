import { motion } from "framer-motion";

const InvestmentAnalysis = () => (
  <section id="analysis" className="py-24 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">High Impact</p>
        <h2 className="text-3xl md:text-4xl">Financial Analysis & Valuation Work</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {/* DCF Model */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:border-accent/15 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">DCF Valuation Model (Sample Project)</h3>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Built a full 3-statement model and DCF valuation to assess intrinsic value.
          </p>

          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2">What I Did</p>
          <ul className="space-y-1.5 mb-5">
            {[
              "Forecasted revenue, costs, and cash flows",
              "Calculated WACC and terminal value",
              "Built sensitivity analysis across key assumptions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-accent mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-accent/5 border border-accent/10 rounded-xl p-4">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">Key Insight</p>
            <p className="text-sm text-muted-foreground">
              Identified valuation gaps driven by margin expansion and revenue growth assumptions.
            </p>
          </div>
        </motion.div>

        {/* Scenario Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:border-accent/15 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">Scenario-Based Financial Analysis</h3>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Developed a financial model to simulate business performance under different conditions.
          </p>

          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2">Approach</p>
          <ul className="space-y-1.5 mb-5">
            {[
              "Built Base, Upside, and Downside scenarios",
              "Analyzed impact on profitability and cash flow",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-accent mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-accent/5 border border-accent/10 rounded-xl p-4">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">Outcome</p>
            <p className="text-sm text-muted-foreground">
              Enabled structured decision-making under uncertainty.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InvestmentAnalysis;
