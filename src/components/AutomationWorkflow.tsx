import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Zap, FileCheck, Bell, ClipboardList, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

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

const workflowSteps = [
  { step: "01", label: "Data Collection", detail: "Invoice & transaction capture" },
  { step: "02", label: "AI Processing", detail: "Automated categorization & validation" },
  { step: "03", label: "Review & Audit", detail: "Exception handling & quality check" },
  { step: "04", label: "Reporting", detail: "Dashboard generation & distribution" },
];

/* Mini animated counter */
const MiniCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut", delay: 0.5 });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [target, count, rounded]);

  return <span>{display}</span>;
};

/* Animated dashboard mockup */
const AnimatedDashboard = () => {
  const [isAfter, setIsAfter] = useState(false);

  const beforeBars = [35, 42, 28, 50, 38, 45];
  const afterBars = [55, 68, 52, 72, 60, 75];
  const bars = isAfter ? afterBars : beforeBars;

  return (
    <div className="border border-border rounded-md p-6 bg-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground">Live Dashboard</span>
        </div>
        <button
          onClick={() => setIsAfter(!isAfter)}
          className="text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-md border border-border hover:border-accent/30 transition-all duration-200 text-muted-foreground hover:text-foreground"
        >
          {isAfter ? "After Automation" : "Before Automation"}
        </button>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="border border-border rounded-md p-3 bg-secondary">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Efficiency</p>
          <p className="text-sm font-medium mt-1 text-foreground">
            {isAfter ? "92%" : "64%"}
          </p>
        </div>
        <div className="border border-border rounded-md p-3 bg-secondary">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Errors</p>
          <p className="text-sm font-medium mt-1 text-foreground">
            {isAfter ? "2%" : "12%"}
          </p>
        </div>
        <div className="border border-border rounded-md p-3 bg-secondary">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Cycle Time</p>
          <p className="text-sm font-medium mt-1 text-foreground">
            {isAfter ? "1.2d" : "4.5d"}
          </p>
        </div>
      </div>

      {/* Bar chart */}
      <div className="h-28 flex items-end gap-2 mb-4">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: isAfter ? "hsl(var(--accent) / 0.6)" : "hsl(var(--muted-foreground) / 0.25)" }}
            initial={false}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Line chart */}
      <svg className="w-full h-12 opacity-60" viewBox="0 0 200 40" fill="none">
        <motion.polyline
          points={isAfter ? "0,35 30,28 60,22 90,18 120,14 150,10 180,8 200,5" : "0,20 30,25 60,18 90,28 120,22 150,30 180,24 200,26"}
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          key={isAfter ? "after" : "before"}
        />
      </svg>
    </div>
  );
};

/* Glowing pipeline dot */
const PipelineDot = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute left-[18px] w-1.5 h-1.5 rounded-full bg-accent/50"
    initial={{ top: 0, opacity: 0 }}
    animate={{ top: ["0%", "100%"], opacity: [0, 0.7, 0.7, 0] }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: "blur(1px)" }}
  />
);

const AutomationWorkflow = () => (
  <section id="automation" className="py-32 section-divider">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start max-w-5xl">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">Workflow</p>
          <h2 className="text-4xl md:text-[44px] mb-10">Automation & Modern Workflow</h2>

          <p className="text-muted-foreground leading-relaxed mb-10 text-base">
            Leveraging structured workflow tools including ChatGPT, Claude, NotebookLM, Gamma, and Canva to accelerate finance operations.
          </p>

          <div className="space-y-5 mb-12">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <app.icon className="w-4 h-4 text-accent/60 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm">{app.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Impact</p>
          <div className="flex flex-wrap gap-3">
            {impacts.map((item) => (
              <span key={item} className="text-xs border border-border rounded-md px-4 py-2 text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground">
                {item}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-10 italic opacity-70">
            Automation is positioned as operational leverage, not trend adoption.
          </p>
        </motion.div>

        {/* Right: Animated Dashboard + Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 hidden lg:block"
        >
          <AnimatedDashboard />

          {/* Workflow Pipeline */}
          <div className="border border-border rounded-md p-6 bg-card">
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground">Pipeline</span>

            <div className="space-y-0 relative mt-5">
              <PipelineDot delay={0} />
              <PipelineDot delay={2} />
              <PipelineDot delay={4} />

              {workflowSteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="relative pl-12 pb-7 last:pb-0"
                >
                  {i < 3 && (
                    <div className="absolute left-[18px] top-8 w-px h-full bg-border" />
                  )}
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-md border border-border bg-secondary flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-muted-foreground">{item.step}</span>
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
