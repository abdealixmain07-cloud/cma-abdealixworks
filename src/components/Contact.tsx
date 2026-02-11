import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdealixmain07@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase golden-text">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Work Together</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Open to opportunities where I can support businesses and finance teams with reporting, analysis, and dashboard automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "abdealixmain07@gmail.com", href: "mailto:abdealixmain07@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 70693 21604", href: "tel:+917069321604" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abdeali-main", href: "https://linkedin.com/in/abdeali-main" },
              { icon: MapPin, label: "Location", value: "Open to Remote & International Opportunities", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 golden-text" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option>Job Opportunity</option>
                    <option>Freelance Project</option>
                    <option>Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
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
