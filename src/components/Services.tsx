import { motion } from "framer-motion";
import { TrendingDown, BarChart3, FileText, Building2, CircleDollarSign, Presentation } from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "UAE Accounting & Compliance",
    desc: "VAT-ready books, chart of accounts setup, and compliance-first reporting for UAE-based businesses.",
  },
  {
    icon: FileText,
    title: "Financial Reporting & Close",
    desc: "End-to-end month-end close with audit-ready statements for multi-entity global clients.",
  },
  {
    icon: BarChart3,
    title: "FP&A & Forecasting",
    desc: "Budgets, forecasts, and variance analysis that translate into decisions leadership can act on.",
  },
  {
    icon: TrendingDown,
    title: "Cost & Margin Optimization",
    desc: "Structured cost reviews to prevent margin leakage and improve unit economics.",
  },
  {
    icon: CircleDollarSign,
    title: "Bookkeeping Cleanup",
    desc: "Reclassification, reconciliation, and restoration of financial clarity across QuickBooks, Xero, Zoho, Tally.",
  },
  {
    icon: Presentation,
    title: "Investor-Ready Presentations",
    desc: "Clean, executive PowerPoint decks with clear financial narratives for stakeholders and investors.",
  },
];

const Services = () => (
  <section id="services" className="py-32 section-alt section-divider">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Capabilities</p>
        <h2 className="text-4xl md:text-[44px]">What I Do</h2>
        <p className="text-muted-foreground text-base max-w-xl mt-3">Finance work built for business impact — reporting, FP&amp;A, and compliance for global and UAE-based clients.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border border-border rounded-2xl p-8 bg-card transition-all duration-300 hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
              <c.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" strokeWidth={1.8} />
            </div>
            <h3 className="text-lg mb-3 text-foreground font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
