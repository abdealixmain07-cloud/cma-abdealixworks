import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "abdealixwork03@gmail.com",
    href: "mailto:abdealixwork03@gmail.com",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdeali-main",
    href: "https://www.linkedin.com/in/abdeali-main",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70693 21604",
    href: "tel:+917069321604",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dahod, India",
    href: null as string | null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-28 section-divider overflow-hidden isolate">
      {/* Background image + wash */}
      <div className="absolute inset-0 -z-10">
        <img
          src={contactBg}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          width={1920}
          height={1200}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/78 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.6)_100%)]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Main glass card */}
          <div className="relative rounded-3xl bg-background/50 backdrop-blur-2xl border border-border/70 shadow-[0_40px_100px_-30px_rgba(10,31,68,0.35)] p-8 md:p-12 text-center">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl mb-4 leading-tight">Let's Build Something Meaningful.</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Open to Financial Reporting Analyst, FP&A, and Cost Accountant roles.
              Reach out — I typically respond within 24 hours.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href="mailto:abdealixwork03@gmail.com?subject=Opportunity for Abdeali"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/abdeali-main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background/70 backdrop-blur border border-border text-foreground px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:border-accent hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              </a>
            </div>

            {/* Contact tiles grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.primary ? "bg-accent/15 border border-accent/30" : "bg-background/60 border border-border"}`}>
                      <Icon className={`w-4 h-4 ${item.primary ? "text-accent" : "text-foreground"}`} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/tile:text-accent group-hover/tile:-translate-y-0.5 group-hover/tile:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group/tile flex items-center gap-3 bg-background/60 backdrop-blur-md border border-border rounded-2xl p-4 hover:border-accent/40 hover:bg-background/80 hover:shadow-lg transition-all duration-300"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 bg-background/60 backdrop-blur-md border border-border rounded-2xl p-4">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Availability footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <Calendar className="w-3.5 h-3.5" />
              Available for new opportunities
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
