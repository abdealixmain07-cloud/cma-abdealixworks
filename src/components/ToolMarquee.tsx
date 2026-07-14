import { useState } from "react";

type Tool = { name: string; logo: string; fallback?: string };

const tools: Tool[] = [
  { name: "Excel", logo: "https://cdn.simpleicons.org/microsoftexcel/217346" },
  { name: "PowerPoint", logo: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A" },
  { name: "Word", logo: "https://cdn.simpleicons.org/microsoftword/2B579A" },
  { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi/F2C811" },
  { name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks/2CA01C" },
  { name: "Xero", logo: "https://cdn.simpleicons.org/xero/13B5EA" },
  { name: "Zoho Books", logo: "https://cdn.simpleicons.org/zoho/E42527" },
  { name: "Tally ERP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tally_Solutions_logo.svg/512px-Tally_Solutions_logo.svg.png" },
  { name: "Google Sheets", logo: "https://cdn.simpleicons.org/googlesheets/0F9D58" },
  { name: "Google Drive", logo: "https://cdn.simpleicons.org/googledrive/4285F4" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { name: "Outlook", logo: "https://cdn.simpleicons.org/microsoftoutlook/0078D4" },
  { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC" },
];

const ToolLogo = ({ tool }: { tool: Tool }) => {
  const [errored, setErrored] = useState(false);
  return (
    <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity">
      {!errored ? (
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-8 h-8 object-contain"
          loading="lazy"
          onError={() => {
            // eslint-disable-next-line no-console
            console.warn(`[ToolMarquee] logo failed to load: ${tool.name} (${tool.logo})`);
            setErrored(true);
          }}
        />
      ) : (
        <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
          {tool.name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
};

const Row = () => (
  <div className="flex items-center gap-10 md:gap-14 shrink-0 px-5 md:px-7">
    {tools.map((t) => (
      <ToolLogo key={t.name} tool={t} />
    ))}
  </div>
);

const ToolMarquee = () => (
  <section className="py-12 md:py-14 border-y border-border bg-secondary/40 overflow-hidden">
    <div className="container mx-auto px-6 mb-6">
      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground text-center">
        Tools & Software I Work With
      </p>
    </div>
    <div className="marquee-mask relative w-full overflow-hidden">
      <div className="marquee-track flex w-max will-change-transform">
        <Row />
        <Row />
      </div>
    </div>
  </section>
);

export default ToolMarquee;
