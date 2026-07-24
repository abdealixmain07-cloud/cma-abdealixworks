import { ArrowRight, Download, Linkedin } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile.png.asset.json";
import bgDubai from "@/assets/dubai-skyline.jpg";

const PROFILE_PHOTO = profilePhoto.url;


const typingRoles = [
  "Financial Reporting Analyst",
  "FP&A Professional",
  "Cost & Management Accountant",
];

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const credibilityBadges = [
  "CMA Qualified (ICMAI)",
  "8+ International Clients",
  "Multi-Entity Reporting",
  "70% Faster Reporting",
];

const kpis = [
  { label: "Reporting Time ↓", target: 70, suffix: "%" },
  { label: "Entities Managed", target: 8, suffix: "+" },
  { label: "Transactions", target: 3000, suffix: "+" },
  { label: "Accuracy", target: 99, suffix: ".5%" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden isolate">
      {/* Skyline backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgDubai}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Lighter, glass-like wash so content sits over a bright, airy skyline */}
        <div className="absolute inset-0 bg-[hsl(0_0%_100%/0.55)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_100%/0.35)] via-[hsl(30_40%_96%/0.30)] to-[hsl(220_30%_96%/0.55)]" />
      </div>


      <div className="container mx-auto px-5 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Portrait */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="flex justify-center mb-7 md:mb-9"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent/40 via-accent/10 to-transparent blur-2xl" aria-hidden />
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-background/70 shadow-[0_20px_60px_-15px_rgba(10,31,68,0.35)]">
                <img
                  src={PROFILE_PHOTO}
                  alt="Abdeali Gangardiwala"
                  width={416}
                  height={416}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/90 backdrop-blur-md border border-border shadow-md rounded-full px-3 py-1 text-[10px] font-semibold text-foreground"
              >
                <span className="text-accent">●</span> CMA · ICMAI Qualified
              </motion.div>
            </div>
          </motion.div>

          {/* Glass content panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="mx-auto max-w-3xl rounded-3xl bg-background/55 backdrop-blur-xl border border-border/70 shadow-[0_30px_80px_-30px_rgba(10,31,68,0.25)] px-6 md:px-10 py-8 md:py-10"
          >
            <motion.p variants={fadeUp} custom={2} className="text-[10px] md:text-xs font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-3">
              Abdeali Gangardiwala
            </motion.p>

            <motion.h1 variants={fadeUp} custom={3} className="text-3xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-tight mb-4">
              Financial Analyst <span className="text-muted-foreground">|</span> CMA
            </motion.h1>

            <motion.p variants={fadeUp} custom={4} className="text-lg md:text-xl font-semibold mb-5 min-h-[1.6em]">
              <TypingAnimation />
            </motion.p>

            <motion.p variants={fadeUp} custom={5} className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              End-to-end financial reporting, dynamic forecasting, and clear, decision-ready insights across multi-entity international businesses.
            </motion.p>

            <motion.div variants={fadeUp} custom={6} className="flex flex-wrap justify-center gap-2 mb-7">
              {credibilityBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] md:text-xs font-medium bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={7} className="flex flex-wrap justify-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-[1px]"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Abdeali_Gangardiwala_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-background/70 backdrop-blur border border-border text-foreground px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-accent hover:-translate-y-[1px]"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/abdeali-main"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 bg-background/70 backdrop-blur border border-border text-foreground px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-accent hover:-translate-y-[1px]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* KPI glass card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="mt-8 md:mt-10 mx-auto max-w-3xl rounded-2xl bg-background/50 backdrop-blur-xl border border-border/60 shadow-md px-4 md:px-8 py-5 md:py-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    <AnimatedCounter target={kpi.target} suffix={kpi.suffix} />
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-1 font-semibold">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
