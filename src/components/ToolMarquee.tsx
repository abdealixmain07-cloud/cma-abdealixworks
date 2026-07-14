import { motion } from "framer-motion";

const tools = [
  { name: "Excel", logo: "https://cdn.simpleicons.org/microsoftexcel/217346" },
  { name: "PowerPoint", logo: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A" },
  { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi/F2C811" },
  { name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks/2CA01C" },
  { name: "Xero", logo: "https://cdn.simpleicons.org/xero/13B5EA" },
  { name: "Zoho", logo: "https://cdn.simpleicons.org/zoho/E42527" },
  { name: "Tally", logo: "https://cdn.simpleicons.org/tally" },
  { name: "Google Sheets", logo: "https://cdn.simpleicons.org/googlesheets/0F9D58" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
];

const Row = () => (
  <div className="flex items-center gap-14 shrink-0 px-7">
    {tools.map((t) => (
      <div key={t.name} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
        <img src={t.logo} alt={t.name} className="w-8 h-8 object-contain" loading="lazy" />
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{t.name}</span>
      </div>
    ))}
  </div>
);

const ToolMarquee = () => (
  <section className="py-14 border-y border-border bg-secondary/40 overflow-hidden">
    <div className="container mx-auto px-6 mb-6">
      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground text-center">
        Tools & Software I Work With
      </p>
    </div>
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        <Row />
        <Row />
      </motion.div>
    </div>
  </section>
);

export default ToolMarquee;
