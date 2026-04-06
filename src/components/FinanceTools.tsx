import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Flame, Target } from "lucide-react";

const ProfitMarginCalc = () => {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");
  const rev = parseFloat(revenue) || 0;
  const c = parseFloat(cost) || 0;
  const margin = rev > 0 ? ((rev - c) / rev * 100) : 0;
  const profit = rev - c;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Revenue</label>
        <input type="number" value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="100,000"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Cost</label>
        <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="70,000"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      {rev > 0 && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="pt-3 border-t border-border space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Profit</span>
            <span className={`font-medium ${profit >= 0 ? "text-foreground" : "text-destructive"}`}>${profit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Margin</span>
            <span className={`font-semibold text-lg ${margin >= 0 ? "text-accent" : "text-destructive"}`}>{margin.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mt-2">
            <motion.div className="h-2 rounded-full bg-accent" initial={{ width: 0 }} animate={{ width: `${Math.min(Math.max(margin, 0), 100)}%` }} transition={{ duration: 0.5 }} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const BurnRateCalc = () => {
  const [cash, setCash] = useState("");
  const [monthly, setMonthly] = useState("");
  const c = parseFloat(cash) || 0;
  const m = parseFloat(monthly) || 0;
  const runway = m > 0 ? c / m : 0;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Cash Balance</label>
        <input type="number" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="500,000"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Monthly Burn</label>
        <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} placeholder="50,000"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      {m > 0 && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="pt-3 border-t border-border space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Runway</span>
            <span className={`font-semibold text-lg ${runway > 12 ? "text-accent" : runway > 6 ? "text-foreground" : "text-destructive"}`}>
              {runway.toFixed(1)} months
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {runway > 12 ? "Healthy runway" : runway > 6 ? "Monitor closely" : "Critical — action needed"}
          </p>
        </motion.div>
      )}
    </div>
  );
};

const BreakevenCalc = () => {
  const [fixed, setFixed] = useState("");
  const [price, setPrice] = useState("");
  const [variable, setVariable] = useState("");
  const f = parseFloat(fixed) || 0;
  const p = parseFloat(price) || 0;
  const v = parseFloat(variable) || 0;
  const contribution = p - v;
  const breakeven = contribution > 0 ? Math.ceil(f / contribution) : 0;
  const beRevenue = breakeven * p;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Fixed Costs</label>
        <input type="number" value={fixed} onChange={(e) => setFixed(e.target.value)} placeholder="200,000"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Price per Unit</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="500"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      <div>
        <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Variable Cost / Unit</label>
        <input type="number" value={variable} onChange={(e) => setVariable(e.target.value)} placeholder="300"
          className="w-full px-4 py-2.5 rounded-lg border border-input bg-secondary text-sm text-foreground focus:outline-none" />
      </div>
      {contribution > 0 && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="pt-3 border-t border-border space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Break-even Units</span>
            <span className="font-semibold text-lg text-accent">{breakeven.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Break-even Revenue</span>
            <span className="font-medium text-foreground">${beRevenue.toLocaleString()}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const tools = [
  { id: "margin", label: "Profit Margin", icon: Calculator, component: ProfitMarginCalc },
  { id: "burn", label: "Burn Rate", icon: Flame, component: BurnRateCalc },
  { id: "breakeven", label: "Break-even", icon: Target, component: BreakevenCalc },
];

const FinanceTools = () => {
  const [active, setActive] = useState("margin");
  const ActiveComponent = tools.find((t) => t.id === active)!.component;

  return (
    <section id="tools" className="py-28 section-alt section-divider">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">Interactive</p>
          <h2 className="text-4xl md:text-[44px] mb-3">Try My Financial Tools</h2>
          <p className="text-muted-foreground text-base max-w-lg">Quick financial calculators built with the same analytical rigor I bring to every engagement.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-md"
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="flex border-b border-border">
              {tools.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                    active === t.id ? "text-foreground bg-secondary border-b-2 border-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <t.icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              ))}
            </div>
            <div className="p-6">
              <ActiveComponent />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinanceTools;
