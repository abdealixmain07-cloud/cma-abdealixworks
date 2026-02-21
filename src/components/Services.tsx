import { motion } from "framer-motion";
import { TrendingDown, BarChart3, FileText, TrendingUp, CircleDollarSign, Settings } from "lucide-react";

const capabilities = [
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    desc: "Structured cost reviews and variance analysis to prevent margin leakage.",
  },
  {
    icon: BarChart3,
    title: "Budget Monitoring & Control",
    desc: "Monthly actual vs budget tracking with early deviation detection.",
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    desc: "Management-focused reporting aligned with compliance and clarity.",
  },
  {
    icon: TrendingUp,
    title: "Revenue & Performance Analysis",
    desc: "Margin trends, unit economics, and revenue mix insights.",
  },
  {
    icon: CircleDollarSign,
    title: "Working Capital Efficiency",
    desc: "Cash cycle discipline and spend optimization.",
  },
  {
    icon: Settings,
    title: "Process Efficiency",
    desc: "Improving reporting workflows and reducing operational friction.",
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
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">Capabilities</p>
        <h2 className="text-4xl md:text-[44px]">Strategic Finance Capabilities</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border border-border rounded-md p-8 bg-card transition-all duration-200 ease-in-out hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.15)] hover:border-accent/30 hover:-translate-y-1 group"
          >
            <c.icon className="w-5 h-5 text-accent/60 mb-6 group-hover:text-accent transition-colors duration-200" strokeWidth={1.5} />
            <h3 className="text-lg mb-3 tracking-normal" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
