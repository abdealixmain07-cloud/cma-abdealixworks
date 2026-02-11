import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Qualifications</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Education</h2>
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
              <GraduationCap className="w-6 h-6 golden-text" />
            </div>
            <div>
              <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded font-medium">CMA Qualified | Results Declared</span>
              <h3 className="text-xl font-bold mt-2">Qualified CMA</h3>
              <p className="text-sm text-muted-foreground">The Institute of Cost Accountants of India (ICMAI)</p>
              <p className="text-sm text-muted-foreground mt-3 mb-2">Advanced expertise in financial and managerial accounting, including:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Financial Reporting & Analysis | Strategic Financial Management</li>
                <li>• Corporate Laws & Governance | Direct & Indirect Taxation</li>
                <li>• Auditing & Assurance | Cost Control & Performance Analysis</li>
                <li>• Professional emphasis on compliance and financial decision support</li>
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
              <GraduationCap className="w-6 h-6 golden-text" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Bachelor of Commerce (B.Com)</h3>
              <p className="text-sm text-muted-foreground">Gujarat University | Completed 2024</p>
              <p className="text-sm text-muted-foreground mt-3 mb-2">Built a strong foundation in business and finance including:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Accounting & Financial Management | Business Economics</li>
                <li>• Corporate & Commercial Law | Business Operations & Management</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
