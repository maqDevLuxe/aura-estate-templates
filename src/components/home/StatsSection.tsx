/* =============================================================================
   Section 10 — Platform Statistics (Tours taken, Properties listed)
   ============================================================================= */

import { Building2, Globe2, Users, Eye } from "lucide-react";

const stats = [
  { icon: Eye, value: "1M+", label: "Virtual Tours Completed" },
  { icon: Building2, value: "2,500+", label: "Properties Listed" },
  { icon: Globe2, value: "50+", label: "Cities Worldwide" },
  { icon: Users, value: "15K+", label: "Satisfied Clients" },
];

const StatsSection = () => (
  <section className="py-20 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
