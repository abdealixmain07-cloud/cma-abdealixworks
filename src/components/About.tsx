import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import workspaceImg from "@/assets/finance-workspace.jpg";

const About = () => (
  <section id="about" className="py-20 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Introduction</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">About Me</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={workspaceImg}
            alt="Financial Analysis Workspace"
            className="rounded-2xl shadow-xl w-full object-cover max-h-96"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            Qualified Cost Accountant (CMA) with hands-on experience in Financial Planning & Analysis, corporate reporting, and cost analytics across US, UK, and Canada-based organizations, including $50M+ funded SaaS companies. I specialize in budgeting, rolling forecasts, variance analysis, financial consolidation, and performance reporting — transforming financial data into actionable insights that drive profitability and executive decision-making.
          </p>

          <h4 className="font-bold mb-3">Key Strengths</h4>
          <ul className="space-y-2 text-sm text-muted-foreground mb-8">
            {[
              "Cost Accounting expertise — Cost Audits, BOM Variance, Cost Allocation",
              "FP&A — Budgeting, Rolling Forecasts, Plan vs Actual Analysis",
              "Advanced Excel (Power Query, SUMIFS, VLOOKUP) & Power BI Dashboards",
              "Multi-entity financial consolidation and intercompany reporting",
              "International client experience — US, UK, Canada organizations",
              "Languages: English, Hindi, Gujarati, Arabic",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-muted transition-colors">
              <MessageCircle className="w-4 h-4" /> Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
