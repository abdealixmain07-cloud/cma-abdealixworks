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
                <span className="text-xs bg-success/20 text-success px-2.5 py-0.5 rounded-full font-bold">Current Role</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">MBP & Associates, Dahod | May 2025 – Present</p>
              <p className="text-xs text-primary font-semibold mb-3">US & Canada Clients · Power BI · Advanced Excel · Month-End Closing</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Manage end-to-end accounting and bookkeeping for international clients, including $50M+ funded SaaS startups, ensuring accurate financial reporting and compliance</li>
                <li>• Perform Plan vs Actual analysis, budgeting, and rolling forecasts to improve reporting accuracy and strategic financial visibility for founders and CFOs</li>
                <li>• Lead full-cycle month-end close including journal entries, accruals, reconciliations, and preparation of financial statements with audit-ready documentation</li>
                <li>• Designed automated Power BI dashboards to monitor revenue, operating expenses, burn rate, and cash flow trends</li>
                <li>• Built advanced Excel-based consolidation models providing KPIs such as EBITDA, Gross Margin, Burn Rate, Runway using Power Query for multi-entity reporting</li>
                <li>• Coordinated with international stakeholders to resolve discrepancies, strengthen internal controls, and improve financial reporting accuracy</li>
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
                <h3 className="text-xl font-bold">Article Assistant (Cost Audit)</h3>
                <span className="text-xs text-muted-foreground font-bold">Jan 2024 – Apr 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">S.S. Puranik & Associates, Vadodara</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Prepared and analyzed cost records for manufacturing and electricity sector companies — material consumption, labor cost, utility usage, and overhead absorption</li>
                <li>• Assisted in Cost Audits for 12+ companies, ensuring compliance with cost accounting standards</li>
                <li>• Computed cost per unit of electricity generation for a State Electricity Board through area-wise cost bifurcation</li>
                <li>• Conducted Actual vs BOM variance analysis for transmission-based companies to identify inefficiencies</li>
                <li>• Developed raw material cost models for ₹100+ Cr turnover chemical manufacturing company with monthly cost variance reports for CEO review</li>
                <li>• Managed GST compliance for 70+ clients — GSTR-1, GSTR-2 reconciliation, GSTR-3B filings with 100% on-time compliance</li>
                <li>• Conducted 30+ statutory and tax audits, ensuring accurate financial reporting and regulatory compliance</li>
                <li>• Performed Concurrent Audit for a major PSU Bank — loan documentation, financial ratios, sanction compliance, fraud risk</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
