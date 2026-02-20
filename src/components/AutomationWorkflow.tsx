import { motion } from "framer-motion";
import { Zap, FileCheck, Bell, ClipboardList, BarChart3 } from "lucide-react";

const applications = [
  { icon: FileCheck, text: "AI-assisted invoice processing" },
  { icon: Bell, text: "Vendor payable reminders" },
  { icon: ClipboardList, text: "Audit documentation automation" },
  { icon: BarChart3, text: "Reporting acceleration" },
];

const impacts = [
  "Reduced manual effort",
  "Lower operational cost",
  "Fewer reporting errors",
  "Faster decision cycles",
];

const AutomationWorkflow = () => (
  <section id="automation" className="py-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Workflow</p>
          <h2 className="text-3xl md:text-4xl mb-8">Automation & Modern Workflow</h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Leveraging structured workflow tools including ChatGPT, Claude, NotebookLM, Gamma, and Canva to accelerate finance operations.
          </p>

          <div className="space-y-4 mb-10">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <app.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm">{app.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-3">Impact</p>
          <div className="flex flex-wrap gap-2">
            {impacts.map((item) => (
              <span key={item} className="text-xs border border-border rounded-md px-3 py-1.5 text-muted-foreground">
                {item}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 italic">
            Automation is positioned as operational leverage, not trend adoption.
          </p>
        </motion.div>

        {/* Right: Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="border border-border rounded-lg p-8 bg-card">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Workflow Pipeline</span>
            </div>

            <div className="space-y-0">
              {[
                { step: "01", label: "Data Collection", detail: "Invoice & transaction capture" },
                { step: "02", label: "AI Processing", detail: "Automated categorization & validation" },
                { step: "03", label: "Review & Audit", detail: "Exception handling & quality check" },
                { step: "04", label: "Reporting", detail: "Dashboard generation & distribution" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {i < 3 && (
                    <div className="absolute left-[18px] top-8 w-px h-full bg-border" />
                  )}
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-md border border-border bg-secondary flex items-center justify-center">
                    <span className="text-xs font-semibold text-muted-foreground">{item.step}</span>
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AutomationWorkflow;
