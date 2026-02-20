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

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        {/* Left 60% */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-4 tracking-tight">
            Abdeali Gangardiwala
          </h1>

          <p className="text-xl md:text-2xl mb-6 h-9">
            <TypingAnimation />
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-xl mb-4">
            Driving revenue clarity, cost discipline, and scalable financial growth through structured reporting and performance analytics.
          </p>

          <p className="text-sm text-muted-foreground max-w-xl mb-10">
            Focused on cost optimization, budgeting rigor, and sustainable expansion.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Selected Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Abdeali_Gangardiwala_Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/abdeali-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" /> Connect Professionally
            </a>
          </div>
        </motion.div>

        {/* Right 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-72 md:w-72 md:h-80 rounded-lg overflow-hidden border border-border shadow-sm">
              <img
                src={profilePhoto}
                alt="Abdeali Gangardiwala"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating KPI cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-16 top-8 bg-card border border-border rounded-lg px-4 py-3 shadow-sm hidden md:block"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Cost Audits</p>
              <p className="text-lg font-semibold">
                <AnimatedCounter target={12} suffix="+" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-14 bottom-12 bg-card border border-border rounded-lg px-4 py-3 shadow-sm hidden md:block"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Exposure</p>
              <p className="text-lg font-semibold">
                <AnimatedCounter target={100} prefix="₹" suffix="Cr+" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 left-4 bg-card border border-border rounded-lg px-4 py-3 shadow-sm hidden md:block"
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">CMA Qualified</p>
              <p className="text-xs font-medium text-accent">ICMAI 2025</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
