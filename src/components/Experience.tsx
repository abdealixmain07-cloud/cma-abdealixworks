import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-20 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Experience</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Professional Experience</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 golden-text" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">Financial Reporting Analyst</h3>
                <span className="text-xs bg-success/20 text-success px-2.5 py-0.5 rounded-full font-bold">Current</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">MBP & Associates | May 2025 – Present</p>
              <p className="text-xs text-primary font-semibold mb-3">US & Canada Clients · Power BI · Month-End Close</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• End-to-end accounting for $50M+ funded SaaS startups across US & Canada</li>
                <li>• Plan vs Actual analysis, budgeting & rolling forecasts for CFO-level reporting</li>
                <li>• Automated Power BI dashboards tracking revenue, burn rate & cash flow</li>
                <li>• Multi-entity consolidation models using Power Query — EBITDA, Gross Margin, Runway KPIs</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 golden-text" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">Article Assistant — Cost Audit</h3>
                <span className="text-xs text-muted-foreground font-bold">Jan 2024 – Apr 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">S.S. Puranik & Associates, Vadodara</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Cost Audits for 12+ companies — material, labor & overhead allocation</li>
                <li>• Actual vs BOM variance analysis for ₹100Cr+ manufacturing firms</li>
                <li>• GST compliance for 70+ clients with 100% on-time filing record</li>
                <li>• 30+ statutory & tax audits including PSU Bank concurrent audit</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
