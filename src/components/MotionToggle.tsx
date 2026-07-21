import { useEffect, useState } from "react";
import { Zap, ZapOff } from "lucide-react";

const STORAGE_KEY = "reduced-motion";

export const applyReducedMotion = (reduced: boolean) => {
  const root = document.documentElement;
  if (reduced) root.classList.add("reduce-motion");
  else root.classList.remove("reduce-motion");
};

const MotionToggle = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefers = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initial = stored ? stored === "true" : prefers;
    setReduced(initial);
    applyReducedMotion(initial);
  }, []);

  const toggle = () => {
    const next = !reduced;
    setReduced(next);
    applyReducedMotion(next);
    localStorage.setItem(STORAGE_KEY, String(next));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={reduced}
      aria-label={reduced ? "Enable animations" : "Reduce animations"}
      title={reduced ? "Animations reduced — click to enable" : "Reduce animations"}
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-md px-3 py-2 text-[11px] font-semibold text-foreground hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-colors"
    >
      {reduced ? <ZapOff className="w-3.5 h-3.5 text-accent" /> : <Zap className="w-3.5 h-3.5 text-accent" />}
      <span className="hidden sm:inline">{reduced ? "Motion Off" : "Motion On"}</span>
    </button>
  );
};

export default MotionToggle;
