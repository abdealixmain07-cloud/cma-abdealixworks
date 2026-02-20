import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdealixmain07@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-28 section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Let's Build Financially Efficient Growth</h2>
          <p className="text-muted-foreground">
            Available for remote, Indian, and global opportunities in strategic finance, FP&A, and performance-driven roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "abdealixmain07@gmail.com", href: "mailto:abdealixmain07@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 70693 21604", href: "tel:+917069321604" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abdeali-main", href: "https://www.linkedin.com/in/abdeali-main" },
              { icon: MapPin, label: "Location", value: "Dahod, India · Open to Remote", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 border border-border rounded-lg p-4 bg-card hover:border-foreground/20 transition-colors">
                <item.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
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
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-lg mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-1 focus:ring-ring focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-1 focus:ring-ring focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-1 focus:ring-ring focus:outline-none resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
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
