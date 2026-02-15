import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

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
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Education</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-primary/30 rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
            Highlighted
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7 golden-text" />
            </div>
            <div className="flex-1">
              <span className="text-xs bg-primary/15 text-primary px-2.5 py-0.5 rounded-full font-bold">Qualified CMA</span>
              <h3 className="text-xl font-bold mt-2">Cost & Management Accountant (CMA)</h3>
              <p className="text-sm text-muted-foreground">Institute of Cost Accountants of India | 2025</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Professional qualification covering Cost & Management Accounting, Corporate Law, Financial Reporting (IND AS), Direct & Indirect Taxation, Strategic Financial Management, Management Audit, Business Valuation, and much more.
              </p>
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
              <GraduationCap className="w-6 h-6 golden-text" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Bachelor of Commerce (B.Com)</h3>
              <p className="text-sm text-muted-foreground">Gujarat University | 2021</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Strong foundation in Accounting, Financial Management, Business Economics, and Corporate Law.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
