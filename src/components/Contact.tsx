import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdealixwork03@gmail.com?body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 section-alt section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-sm">
            I build financial systems that improve reporting accuracy, reduce manual effort, and enable better business decisions.
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
              { icon: Mail, label: "Email", value: "abdealixwork03@gmail.com", href: "mailto:abdealixwork03@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 70693 21604", href: "tel:+917069321604" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abdeali-main", href: "https://www.linkedin.com/in/abdeali-main" },
              { icon: MapPin, label: "Location", value: "Dahod, India", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-5 border border-border rounded-xl p-5 bg-card hover:border-accent/20 hover:shadow-md transition-all duration-200">
                <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider font-semibold">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
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
            <div className="border border-border rounded-2xl p-8 bg-card shadow-sm">
              <h3 className="text-lg mb-8 text-foreground font-semibold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary/50 text-sm text-foreground focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary/50 text-sm text-foreground focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary/50 text-sm text-foreground focus:outline-none resize-none transition-all duration-200"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                {submitted && (
                  <div className="text-sm text-accent text-center py-3 border border-accent/20 rounded-xl bg-accent/5">
                    ✓ If your email client didn't open, please email <a href="mailto:abdealixwork03@gmail.com" className="underline">abdealixwork03@gmail.com</a> directly.
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Contact Me
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
