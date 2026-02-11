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
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 golden-text" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">Junior Analyst</h3>
                <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded font-medium">Current Role</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">MBP & Associates, Dahod</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Prepare monthly financial reports, reconciliations, and variance analysis to support business decision-making</li>
                <li>• Analyze financial performance data to identify trends, risks, and improvement opportunities</li>
                <li>• Assist in developing dashboards and structured reports to enhance financial visibility</li>
                <li>• Support process improvement initiatives that streamline financial reporting workflows</li>
                <li>• Create powerful PowerPoint presentations to showcase financial insights and business performance</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 golden-text" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">CMA Article Trainee</h3>
                <span className="text-xs text-muted-foreground font-medium">Jan 2024 – Apr 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">S.S. Puranik & Associates, Vadodara</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Assisted in cost audits for multiple organizations, supporting accurate financial reporting and compliance</li>
                <li>• Prepared and filed GST returns while ensuring adherence to regulatory requirements</li>
                <li>• Supported tax filings, financial documentation, and audit procedures</li>
                <li>• Contributed to improving reporting processes and maintaining organized financial records</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
