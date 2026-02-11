import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import workspaceImg from "@/assets/finance-workspace.jpg";

const About = () => (
  <section id="about" className="py-20 section-alt">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase golden-text">Introduction</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={workspaceImg}
            alt="Financial Analysis Workspace"
            className="rounded-xl shadow-lg w-full object-cover max-h-96"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a finance professional focused on helping businesses improve how they manage and understand their financial data. My work centers on building structured reporting systems, automating manual processes, and delivering meaningful insights that support better decision-making.
          </p>

          <h4 className="font-semibold mb-3">Key Strengths</h4>
          <ul className="space-y-2 text-sm text-muted-foreground mb-8">
            {[
              "Strong experience in financial reporting and MIS preparation",
              "Advanced Excel dashboard and data analysis skills",
              "Qualified CMA with solid accounting and finance knowledge",
              "Experience supporting international business clients",
              "Focused on turning numbers into business clarity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              <MessageCircle className="w-4 h-4" /> Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
