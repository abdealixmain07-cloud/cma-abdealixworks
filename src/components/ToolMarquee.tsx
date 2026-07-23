import { useState } from "react";

type Tool = { name: string; icon: string; fallbacks?: string[] };

const iconify = (slug: string) => `https://api.iconify.design/logos/${slug}.svg`;
const iconifyRaw = (path: string) => `https://api.iconify.design/${path}.svg`;
const simple = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${slug}.svg`;
const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const tools: Tool[] = [
  { name: "Excel",         icon: iconifyRaw("vscode-icons/file-type-excel"),      fallbacks: [simple("microsoftexcel")] },
  { name: "PowerPoint",    icon: iconifyRaw("vscode-icons/file-type-powerpoint"), fallbacks: [simple("microsoftpowerpoint")] },
  { name: "Word",          icon: iconifyRaw("vscode-icons/file-type-word"),       fallbacks: [simple("microsoftword")] },
  { name: "Power BI",      icon: iconify("microsoft-power-bi"),   fallbacks: [simple("powerbi")] },
  { name: "Outlook",       icon: iconifyRaw("vscode-icons/file-type-outlook"),    fallbacks: [simple("microsoftoutlook")] },
  { name: "SQL",           icon: iconifyRaw("vscode-icons/file-type-sql"), fallbacks: [iconify("mysql"), simple("mysql")] },
  { name: "QuickBooks",    icon: simple("quickbooks"),            fallbacks: [favicon("quickbooks.intuit.com")] },
  { name: "Xero",          icon: iconify("xero"),                 fallbacks: [simple("xero")] },
  { name: "Zoho",          icon: iconify("zoho"),                 fallbacks: [simple("zoho")] },
  { name: "Tally ERP",     icon: favicon("tallysolutions.com"),   fallbacks: [] },
  { name: "Google Sheets", icon: simple("googlesheets"),          fallbacks: [iconifyRaw("vscode-icons/file-type-excel")] },
  { name: "Google Drive",  icon: iconify("google-drive"),         fallbacks: [simple("googledrive")] },
  { name: "Notion",        icon: iconify("notion-icon"),          fallbacks: [simple("notion")] },
  { name: "Slack",         icon: iconify("slack-icon"),           fallbacks: [simple("slack")] },
  { name: "Canva",         icon: simple("canva"),                 fallbacks: [favicon("canva.com")] },
];

const ToolLogo = ({ tool }: { tool: Tool }) => {
  const [srcIdx, setSrcIdx] = useState(0);
  const [failed, setFailed] = useState(false);
  const sources = [tool.icon, ...(tool.fallbacks ?? [])];
  const src = sources[srcIdx];

  return (
    <li className="tool-logo flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
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
    </li>
  );
};

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    className="marquee-row flex items-center gap-6 md:gap-14 shrink-0 px-4 md:px-7"
    aria-hidden={ariaHidden || undefined}
    aria-label={ariaHidden ? undefined : "Software logos"}
  >
    {tools.map((t) => (
      <ToolLogo key={t.name} tool={t} />
    ))}
  </ul>
);

const ToolMarquee = () => (
  <section aria-labelledby="tools-marquee-title" className="py-12 md:py-14 border-y border-border bg-secondary/40 overflow-hidden">
    <div className="container mx-auto px-6 mb-6">
      <h2 id="tools-marquee-title" className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground text-center">
        Tools & Software I Work With
      </h2>
    </div>
    <div className="marquee-mask relative w-full overflow-hidden" aria-label="Continuously scrolling software tools">
      <div className="marquee-track flex w-max will-change-transform">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  </section>
);

export default ToolMarquee;
