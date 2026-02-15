import { ArrowRight, Download, User, TrendingUp, TrendingDown } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const typingRoles = ["Cost Accountant", "Financial Analyst", "FP&A Specialist"];

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
    <span className="golden-text">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1.1em] bg-primary ml-0.5 align-text-bottom"
      />
    </span>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="relative w-44 h-44 mb-8">
            <div className="w-full h-full rounded-2xl overflow-hidden border-4 golden-border golden-ring rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={profilePhoto} alt="Abdeali Gangardiwala" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg"
            >
              <User className="w-5 h-5 text-primary-foreground" />
            </motion.div>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Qualified CMA · Finance Professional
          </motion.p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-2 tracking-tight">
            Abdeali<br /><span className="golden-text">Gangardiwala</span>
          </h1>

          <p className="text-lg md:text-xl mt-4 mb-4 h-8"><TypingAnimation /></p>

          <p className="text-muted-foreground mb-4 text-sm leading-relaxed border-l-2 border-primary pl-4 max-w-lg">
            I help organizations improve profitability by analyzing cost structures, identifying financial inefficiencies, and building structured reporting systems that support better strategic and operational decisions.
          </p>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed border-l-2 border-primary/40 pl-4 max-w-lg">
            With experience supporting ₹100Cr+ manufacturing businesses and international companies, I specialize in cost analysis, variance reporting, budgeting, and financial performance monitoring.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/Abdeali_Gangardiwala_Resume.pdf" download className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors">
              <Download className="w-4 h-4" /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden lg:block">
          <AnimatedDashboard />
        </motion.div>
      </div>
    </div>
  </section>
);

const AnimatedCounter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [target, count, rounded]);

  return <span>{display}</span>;
};

const AnimatedBar = ({ height, delay, color }: { height: number; delay: number; color: string }) => (
  <motion.div
    className={`flex-1 rounded-t ${color}`}
    initial={{ height: 0 }}
    animate={{ height: `${height}%` }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
  />
);

const PulsingDot = () => (
  <motion.span
    className="w-2 h-2 rounded-full bg-success inline-block"
    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
  />
);

const AnimatedDashboard = () => (
  <div className="relative">
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <div className="absolute -top-3 right-4 z-10">
        <motion.div className="bg-success text-success-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <PulsingDot /> Live
        </motion.div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="w-3 h-3 rounded-full bg-success" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-semibold">Cost_Dashboard.xlsx</span>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Cost Saved", value: 18, prefix: "₹", suffix: "L", change: "-12%", up: false },
              { label: "Gross Margin", value: 42, suffix: "%", change: "+5%", up: true },
              { label: "EBITDA", value: 28, suffix: "%", change: "+3%", up: true },
            ].map((kpi) => (
              <motion.div key={kpi.label} className="border border-border rounded-xl p-3 text-center hover:border-primary/40 transition-colors" whileHover={{ scale: 1.03 }}>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{kpi.label}</p>
                <p className="text-lg font-extrabold mt-0.5">
                  <AnimatedCounter target={kpi.value} prefix={kpi.prefix || ""} suffix={kpi.suffix} />
                </p>
                <p className="text-xs font-bold flex items-center justify-center gap-0.5 mt-0.5">
                  {kpi.up ? <TrendingUp className="w-3 h-3 text-success" /> : <TrendingDown className="w-3 h-3 text-destructive" />}
                  <span className={kpi.up ? "text-success" : "text-destructive"}>{kpi.change}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border border-border rounded-xl p-3 mb-4">
            <p className="text-xs font-bold mb-2">Cost Trend (₹L)</p>
            <div className="flex items-end gap-1.5 h-20">
              {[40, 55, 45, 65, 75, 85].map((h, i) => (
                <AnimatedBar key={i} height={h} delay={0.3 + i * 0.15} color={`bg-primary/${30 + i * 10}`} />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m} className="text-[9px] text-muted-foreground font-medium">{m}</span>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden text-xs">
            <div className="grid grid-cols-4 bg-muted font-bold px-3 py-2 text-[11px] uppercase tracking-wider">
              <span>Metric</span><span>Actual</span><span>Standard</span><span>Var%</span>
            </div>
            {[
              { metric: "Material", actual: "₹8.2L", budget: "₹9L", v: "-9%" },
              { metric: "Labour", actual: "₹3.1L", budget: "₹3.5L", v: "-11%" },
              { metric: "Overhead", actual: "₹2.4L", budget: "₹2L", v: "+20%" },
            ].map((row, i) => (
              <motion.div key={row.metric} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.2 }} className="grid grid-cols-4 px-3 py-2 border-t border-border">
                <span className="font-medium">{row.metric}</span>
                <span>{row.actual}</span>
                <span>{row.budget}</span>
                <span className={`font-bold ${row.v.startsWith("-") ? "text-success" : "text-destructive"}`}>{row.v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Hero;
