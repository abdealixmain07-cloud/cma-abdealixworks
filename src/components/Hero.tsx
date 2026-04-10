import { ArrowRight, Download, Linkedin } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const PROFILE_PHOTO = "https://i.postimg.cc/3kFDnFqX/Chat-GPT-Image-Mar-27-2026-12-12-20-PM.png";

const typingRoles = ["Financial Reporting Analyst", "Financial Analyst", "FP&A Specialist"];

const TypingAnimation = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingRoles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typingRoles.length);
      return;
    }
    const timer = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-accent">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1.1em] bg-accent ml-0.5 align-text-bottom"
      />
    </span>
  );
};

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v).toLocaleString()}${suffix}`);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [target, count, rounded]);

  return <span>{display}</span>;
};

const HeroDashboard = () => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const revenueData = [42, 55, 48, 65, 58, 72];
  const costData = [38, 42, 35, 45, 40, 48];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-accent/5"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">Financial Overview</p>
          <p className="text-sm font-semibold text-foreground mt-1">Multi-Entity Performance</p>
        </div>
        <div className="flex gap-4 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Revenue</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-muted-foreground/30" /> Cost</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Entities", value: "8+", color: "text-foreground" },
          { label: "Reporting ↓", value: "70%", color: "text-accent" },
          { label: "Accuracy", value: "99.5%", color: "text-foreground" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-secondary/60 border border-border rounded-xl p-3 text-center">
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{kpi.label}</p>
            <motion.p
              className={`text-lg font-bold mt-1 ${kpi.color}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {kpi.value}
            </motion.p>
          </div>
        ))}
      </div>

      <div className="h-32 flex items-end gap-2">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1"
            onMouseEnter={() => setHoveredBar(i)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="w-full flex gap-0.5 items-end h-24">
              <motion.div
                className="flex-1 rounded-sm bg-accent/50"
                initial={{ height: 0 }}
                animate={{ height: `${revenueData[i]}%`, opacity: hoveredBar === i ? 1 : 0.7 }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.08 }}
              />
              <motion.div
                className="flex-1 rounded-sm bg-muted-foreground/15"
                initial={{ height: 0 }}
                animate={{ height: `${costData[i]}%`, opacity: hoveredBar === i ? 0.5 : 0.3 }}
                transition={{ duration: 0.8, delay: 0.7 + i * 0.08 }}
              />
            </div>
            <span className="text-[9px] text-muted-foreground">{m}</span>
          </div>
        ))}
      </div>

      <svg className="w-full h-10 mt-3" viewBox="0 0 200 30" fill="none">
        <motion.polyline
          points="0,25 30,20 60,22 90,15 120,12 150,8 180,10 200,5"
          stroke="hsl(217 91% 60%)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.polyline
          points="0,28 30,26 60,24 90,22 120,20 150,18 180,16 200,14"
          stroke="hsl(220 10% 46% / 0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </motion.div>
  );
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const credibilityBadges = [
  "CMA Qualified (ICMAI)",
  "8+ International Clients",
  "70% Faster Reporting",
  "3,000+ Transactions Reclassified",
];

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
    {/* Subtle background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
      />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={staggerChildren} initial="hidden" animate="visible">
          {/* Profile */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20 shadow-lg">
              <img src={PROFILE_PHOTO} alt="Abdeali Gangardiwala" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Abdeali Gangardiwala</p>
              <p className="text-xs text-muted-foreground">CMA Qualified · ICMAI</p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl mb-3 h-9 font-semibold">
            <TypingAnimation />
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-[40px] leading-[1.15] mb-4 tracking-tight">
            Financial Analyst | CMA
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base text-muted-foreground mb-6 max-w-lg leading-relaxed">
            I manage end-to-end financial reporting, build dynamic forecasting models, and transform complex financial data into clear, decision-ready insights across multi-entity international businesses.
          </motion.p>

          {/* Credibility badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
            {credibilityBadges.map((badge) => (
              <span key={badge} className="text-xs font-medium bg-accent/8 text-accent border border-accent/15 px-3 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-[1px]"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Abdeali_Gangardiwala_Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-accent hover:-translate-y-[1px]"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/abdeali-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-accent hover:-translate-y-[1px]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block">
          <HeroDashboard />
        </div>
      </div>

      {/* KPI Counter Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
      >
        {[
          { label: "Reporting Time ↓", target: 70, suffix: "%" },
          { label: "Entities Managed", target: 8, suffix: "+" },
          { label: "Transactions Processed", target: 3000, suffix: "+" },
          { label: "Reporting Accuracy", target: 99, suffix: ".5%" },
        ].map((kpi) => (
          <div key={kpi.label} className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              <AnimatedCounter target={kpi.target} suffix={kpi.suffix} />
            </p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-1 font-semibold">{kpi.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
