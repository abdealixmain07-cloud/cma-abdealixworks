import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdealixmain07@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    
    // Try multiple approaches for mailto
    const link = document.createElement("a");
    link.href = mailtoLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 section-alt section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-[44px] mb-5">Let's Build Financially Efficient Growth</h2>
          <p className="text-muted-foreground text-base">
            Available for remote, Indian, and global opportunities in strategic finance, FP&A, and performance-driven roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: "abdealixmain07@gmail.com", href: "mailto:abdealixmain07@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 70693 21604", href: "tel:+917069321604" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abdeali-main", href: "https://www.linkedin.com/in/abdeali-main" },
              { icon: MapPin, label: "Location", value: "Dahod, India", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-5 border border-border rounded-md p-5 bg-card hover:border-accent/25 transition-all duration-200">
                <item.icon className="w-4 h-4 text-accent/60 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-accent transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="border border-border rounded-md p-8 bg-card">
              <h3 className="text-lg mb-8" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground mb-2 block uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-md border border-input bg-secondary text-sm focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground mb-2 block uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-md border border-input bg-secondary text-sm focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground mb-2 block uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-md border border-input bg-secondary text-sm focus:outline-none resize-none transition-all duration-200"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                {submitted && (
                  <div className="text-sm text-accent text-center py-3 border border-accent/20 rounded-md bg-accent/5">
                    ✓ If your email client didn't open, please email <a href="mailto:abdealixmain07@gmail.com" className="underline">abdealixmain07@gmail.com</a> directly.
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-card border border-accent/40 text-foreground py-4 rounded-md text-sm font-medium transition-all duration-200 hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Connect or Schedule Discussion
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
