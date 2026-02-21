import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "KPI & Dashboard Reporting",
    impact: "Improved leadership visibility across revenue and cost metrics.",
    tools: "Advanced Excel, Power Query",
    outcome: "Centralized performance tracking enabling faster reviews.",
  },
  {
    title: "Monthly Actual vs Budget Model",
    impact: "Strengthened cost discipline and spend visibility.",
    tools: "Excel financial modelling",
    outcome: "Early variance detection reducing unnecessary overspend.",
  },
  {
    title: "Strategic Finance Presentation",
    impact: "Improved financial awareness across teams.",
    tools: "Financial modelling, Gamma, Canva",
    outcome: "Clear articulation of cost behavior and profitability drivers.",
  },
  {
    title: "Power BI KPI Dashboard",
    impact: "Executive-level performance visualization.",
    tools: "Power BI, Data modelling",
    outcome: "Real-time insights into revenue, margin, and expense trends.",
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 section-alt section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">Work</p>
          <h2 className="text-4xl md:text-[44px]">Selected Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActiveProject(i)}
              className="bg-card border border-border rounded-md p-8 group cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.12)] hover:border-accent/30 relative overflow-hidden"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-medium tracking-wider uppercase text-accent">View Details</span>
              </div>

              <div className="flex items-start justify-between mb-5">
                <h3 className="text-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{p.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.impact}</p>

              <div className="border-t border-border pt-5 space-y-2.5">
                <div className="flex gap-3 text-xs">
                  <span className="text-muted-foreground font-medium w-16 flex-shrink-0">Tools</span>
                  <span>{p.tools}</span>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="text-muted-foreground font-medium w-16 flex-shrink-0">Outcome</span>
                  <span>{p.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-in project detail panel */}
      <AnimatePresence>
        {activeProject !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setActiveProject(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto"
            >
              <div className="p-10">
                <button
                  onClick={() => setActiveProject(null)}
                  className="mb-8 w-9 h-9 rounded-md border border-border flex items-center justify-center hover:border-accent/30 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>

                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Project Detail</p>
                <h3 className="text-2xl mb-6">{projects[activeProject].title}</h3>

                <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">Impact</p>
                    <p>{projects[activeProject].impact}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">Tools</p>
                    <p>{projects[activeProject].tools}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2">Outcome</p>
                    <p>{projects[activeProject].outcome}</p>
                  </div>
                </div>

                {/* Placeholder for project image — user will upload */}
                <div className="mt-10 border border-border rounded-md p-8 bg-secondary flex items-center justify-center min-h-[200px]">
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">Dashboard Image — Upload to Replace</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
