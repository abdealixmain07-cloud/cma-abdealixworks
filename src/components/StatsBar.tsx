import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [target, count, rounded]);

  return <span>{display}</span>;
};

const stats = [
  { value: 12, prefix: "", suffix: "+", label: "Cost Audits", sub: "Assisted" },
  { value: 70, prefix: "", suffix: "+", label: "GST Returns", sub: "Filed Monthly" },
  { value: 100, prefix: "₹", suffix: "Cr+", label: "Financial Data", sub: "Analyzed" },
  { value: 0, prefix: "", suffix: "SaaS", label: "Financial Dashboards", sub: "Built for Businesses" },
];

const StatsBar = () => (
  <section className="py-14 section-alt border-y border-border">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold golden-text">
              {s.value > 0 ? (
                <AnimatedNumber target={s.value} prefix={s.prefix} suffix={s.suffix} />
              ) : (
                s.suffix
              )}
            </p>
            <p className="text-sm font-bold mt-1.5">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default StatsBar;
