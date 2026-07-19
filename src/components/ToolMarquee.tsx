import { useState } from "react";

type Tool = { name: string; icon: string; fallbacks?: string[] };

// Iconify "logos" collection = full-color brand SVGs, highly reliable CDN.
// Fallbacks use jsdelivr's simple-icons mirror, then a letter-tile in <ToolLogo/>.
const iconify = (slug: string) => `https://api.iconify.design/logos/${slug}.svg`;
const simple = (slug: string, color: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${slug}.svg`;

const tools: Tool[] = [
  { name: "Excel",         icon: iconify("microsoft-excel"),      fallbacks: [simple("microsoftexcel", "217346")] },
  { name: "PowerPoint",    icon: iconify("microsoft-powerpoint"), fallbacks: [simple("microsoftpowerpoint", "B7472A")] },
  { name: "Word",          icon: iconify("microsoft-word"),       fallbacks: [simple("microsoftword", "2B579A")] },
  { name: "Power BI",      icon: iconify("microsoft-power-bi"),   fallbacks: [simple("powerbi", "F2C811")] },
  { name: "Outlook",       icon: iconify("microsoft-outlook"),    fallbacks: [simple("microsoftoutlook", "0078D4")] },
  { name: "QuickBooks",    icon: iconify("quickbooks"),           fallbacks: [simple("quickbooks", "2CA01C")] },
  { name: "Xero",          icon: iconify("xero"),                 fallbacks: [simple("xero", "13B5EA")] },
  { name: "Zoho",          icon: iconify("zoho"),                 fallbacks: [simple("zoho", "E42527")] },
  { name: "Tally ERP",     icon: iconify("tally"),                fallbacks: [] },
  { name: "SAP Concur",    icon: iconify("sap"),                  fallbacks: [] },
  { name: "Google Sheets", icon: iconify("google-sheets"),        fallbacks: [simple("googlesheets", "0F9D58")] },
  { name: "Google Drive",  icon: iconify("google-drive"),         fallbacks: [simple("googledrive", "4285F4")] },
  { name: "Notion",        icon: iconify("notion-icon"),          fallbacks: [simple("notion", "000000")] },
  { name: "Slack",         icon: iconify("slack-icon"),           fallbacks: [simple("slack", "4A154B")] },
  { name: "Canva",         icon: iconify("canva"),                fallbacks: [simple("canva", "00C4CC")] },
  { name: "Zapier",        icon: iconify("zapier-icon"),          fallbacks: [simple("zapier", "FF4A00")] },
];

const ToolLogo = ({ tool }: { tool: Tool }) => {
  const [srcIdx, setSrcIdx] = useState(0);
  const [failed, setFailed] = useState(false);
  const sources = [tool.icon, ...(tool.fallbacks ?? [])];
  const src = sources[srcIdx];

  return (
    <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
      {!failed ? (
        <img
          src={src}
          alt={tool.name}
          className="w-8 h-8 object-contain"
          loading="lazy"
          decoding="async"
          onError={() => {
            // eslint-disable-next-line no-console
            console.warn(`[ToolMarquee] logo failed (${tool.name}): ${src}`);
            if (srcIdx < sources.length - 1) setSrcIdx(srcIdx + 1);
            else setFailed(true);
          }}
        />
      ) : (
        <div
          className="w-8 h-8 rounded-md bg-accent/15 border border-accent/25 flex items-center justify-center text-[10px] font-bold text-accent"
          aria-label={tool.name}
        >
          {tool.name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
};

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <div
    className="flex items-center gap-8 md:gap-14 shrink-0 px-4 md:px-7"
    aria-hidden={ariaHidden || undefined}
  >
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
        <Row ariaHidden />
      </div>
    </div>
  </section>
);

export default ToolMarquee;
