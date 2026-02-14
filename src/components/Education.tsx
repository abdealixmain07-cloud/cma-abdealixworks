import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const cmaStages = [
  { stage: "CMA Final", date: "Dec 2025", marks: "453/800", note: "Exemption in 3 papers" },
  { stage: "CMA Inter (Group II)", date: "Jun 2023", marks: "213/400", note: "Exemption in 2 papers" },
  { stage: "CMA Inter (Group I)", date: "Dec 2022", marks: "228/400", note: "Exemption in 1 paper" },
  { stage: "CMA Foundation", date: "Jun 2022", marks: "308/400", note: "Exemption in all papers" },
];

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
          className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 golden-text" />
            </div>
            <div className="flex-1">
              <span className="text-xs bg-primary/15 text-primary px-2.5 py-0.5 rounded-full font-bold">Qualified CMA</span>
              <h3 className="text-xl font-bold mt-2">Cost & Management Accountant (CMA)</h3>
              <p className="text-sm text-muted-foreground">The Institute of Cost Accountants of India (ICMAI)</p>

              <div className="mt-4 space-y-2">
                {cmaStages.map((s, i) => (
                  <motion.div
                    key={s.stage}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm py-2 border-b border-border last:border-0"
                  >
                    <span className="font-semibold min-w-[160px]">{s.stage}</span>
                    <span className="text-muted-foreground text-xs">{s.date}</span>
                    <span className="font-bold golden-text">{s.marks}</span>
                    <span className="text-xs bg-success/15 text-success px-2 py-0.5 rounded-full font-semibold">{s.note}</span>
                  </motion.div>
                ))}
              </div>
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
              <p className="text-sm text-muted-foreground">Gujarat University | Mar 2021</p>
              <p className="text-sm font-bold golden-text mt-1">560/600</p>
              <p className="text-sm text-muted-foreground mt-2">Strong foundation in Accounting, Financial Management, Business Economics, and Corporate Law.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
