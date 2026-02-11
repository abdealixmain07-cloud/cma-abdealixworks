import { ArrowRight, Download, User } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Profile Image */}
            <div className="relative w-52 h-52 mb-8">
              <div className="w-full h-full rounded-full overflow-hidden border-4 golden-border golden-ring">
                <img
                  src={profilePhoto}
                  alt="Abdeali Gangardiwala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-2">
              Abdeali
              <br />
              <span className="golden-text">Gangardiwala</span>
            </h1>

            <p className="text-lg md:text-xl mt-4 mb-4">
              <span className="font-semibold">FP&A Specialist</span>
              <span className="text-muted-foreground"> | </span>
              <span className="font-semibold golden-text">Qualified CMA</span>
              <span className="text-muted-foreground"> | </span>
              <span className="font-semibold text-muted-foreground">Financial Analyst</span>
            </p>

            <p className="text-muted-foreground mb-2 text-base leading-relaxed italic">
              "I help businesses turn complex financial data into clear, decision-ready insights through structured reporting, automation, and dashboard solutions."
            </p>

            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Delivering financial clarity through MIS reporting, Excel dashboards, and performance analysis for finance teams and growing businesses.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          {/* Right - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DashboardMockup = () => (
  <div className="relative">
    <div className="absolute -top-2 right-4 bg-success text-success-foreground text-xs font-semibold px-3 py-1 rounded-full z-10">
      Live Data
    </div>
    <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-destructive" />
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="w-3 h-3 rounded-full bg-success" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-medium">Financial_Dashboard.xlsx</span>
        <span className="ml-auto text-xs bg-success/20 text-success px-2 py-0.5 rounded font-medium">Excel</span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-sm mb-1">Monthly Financial Summary</h3>
        <p className="text-xs text-muted-foreground mb-4">FY 2025 | Q1 Performance Report</p>

        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Revenue", value: "₹24L", change: "+12%" },
            { label: "Net Profit", value: "₹58K", change: "+8%" },
            { label: "Growth", value: "₹24%", change: "+3%" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="border border-border rounded-lg p-3 text-center"
            >
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
              <p className="text-lg font-bold">{kpi.value}</p>
              <p className="text-xs text-success font-medium">{kpi.change}</p>
            </div>
          ))}
        </div>

        {/* Charts placeholder */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="border border-border rounded-lg p-3">
            <p className="text-xs font-medium mb-2">Revenue Trend</p>
            <div className="flex items-end gap-1 h-16">
              {[40, 55, 45, 65, 75, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m} className="text-[9px] text-muted-foreground">{m}</span>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-lg p-3 flex flex-col items-center justify-center">
            <p className="text-xs font-medium mb-2">Expense Split</p>
            <div className="w-14 h-14 rounded-full border-4 golden-border flex items-center justify-center">
              <span className="text-xs font-bold">100%</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border border-border rounded-lg overflow-hidden text-xs">
          <div className="grid grid-cols-4 bg-muted font-medium px-3 py-2">
            <span>Metric</span><span>Actual</span><span>Budget</span><span>Var%</span>
          </div>
          {[
            { metric: "Revenue", actual: "₹24L", budget: "₹22L", v: "+9%" },
            { metric: "COGS", actual: "₹12L", budget: "₹13L", v: "-8%" },
            { metric: "Gross Profit", actual: "₹12L", budget: "₹9L", v: "+33%" },
          ].map((row) => (
            <div key={row.metric} className="grid grid-cols-4 px-3 py-2 border-t border-border">
              <span>{row.metric}</span>
              <span>{row.actual}</span>
              <span>{row.budget}</span>
              <span className={row.v.startsWith("+") ? "text-success" : "text-destructive"}>
                {row.v}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-3 text-[10px] text-muted-foreground">
          <span>Last Updated: Today, 9:45 AM</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Auto-refresh enabled
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
