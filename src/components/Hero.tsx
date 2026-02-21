import { ArrowRight, Download, Linkedin } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const typingRoles = ["Cost & Management Accountant", "Financial Analyst", "FP&A Specialist"];

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

/* Subtle parallax grid background */
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Radial glow behind portrait area */}
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
    />
    {/* Floating grid dots with parallax feel */}
    <motion.div
      className="absolute inset-0 opacity-[0.03]"
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 0.5px, transparent 0.5px)",
        backgroundSize: "40px 40px",
      }}
    />
    {/* Thin animated line chart */}
    <svg className="absolute top-1/3 left-0 w-full h-24 opacity-[0.04]" viewBox="0 0 400 80" fill="none" preserveAspectRatio="none">
      <motion.polyline
        points="0,60 40,52 80,58 120,35 160,42 200,28 240,35 280,18 320,25 360,12 400,20"
        stroke="hsl(var(--foreground))"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-24 pb-32 relative">
    <HeroBackground />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-5 gap-20 items-center">
        {/* Left 60% */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[64px] leading-[1.08] mb-5 tracking-tight">
            Abdeali Gangardiwala
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl mb-6 h-9">
            <TypingAnimation />
          </motion.p>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-xl mb-4 text-base">
            Driving revenue clarity, cost discipline, and scalable financial growth through structured reporting and performance analytics.
          </motion.p>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground max-w-xl mb-12">
            Focused on cost optimization, budgeting rigor, and sustainable expansion.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-card border border-accent/30 text-foreground px-7 py-3.5 rounded-md text-sm font-medium transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_20px_hsl(var(--accent)/0.1)] hover:-translate-y-[2px]"
            >
              View Selected Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Abdeali_Gangardiwala_Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-md text-sm font-medium transition-all duration-300 hover:border-muted-foreground/40 hover:-translate-y-[2px]"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/abdeali-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-md text-sm font-medium transition-all duration-300 hover:border-muted-foreground/40 hover:-translate-y-[2px]"
            >
              <Linkedin className="w-4 h-4" /> Connect Professionally
            </a>
          </motion.div>
        </motion.div>

        {/* Right 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative">
            {/* Subtle glow behind portrait */}
            <div className="absolute inset-0 -m-8 rounded-md opacity-20"
              style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15), transparent 70%)" }}
            />
            <div className="w-64 h-72 md:w-72 md:h-80 rounded-md overflow-hidden border border-border shadow-2xl shadow-black/20">
              <img
                src={profilePhoto}
                alt="Abdeali Gangardiwala"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Refined rectangular KPI badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-20 top-8 bg-card border border-accent/20 rounded-md px-5 py-3 hidden md:block"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium">Cost Audits</p>
              <p className="text-lg font-medium mt-0.5">
                <AnimatedCounter target={12} suffix="+" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-16 bottom-14 bg-card border border-accent/20 rounded-md px-5 py-3 hidden md:block"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium">Exposure</p>
              <p className="text-lg font-medium mt-0.5">
                <AnimatedCounter target={100} prefix="₹" suffix="Cr+" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-8 left-2 bg-card border border-accent/20 rounded-md px-5 py-3 hidden md:block"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-medium">CMA Qualified</p>
              <p className="text-xs font-medium text-accent mt-0.5">ICMAI 2025</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
