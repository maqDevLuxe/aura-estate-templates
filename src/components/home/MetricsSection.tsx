/* =============================================================================
   Section 6 — Property Viewing Metrics
   ============================================================================= */

import { TrendingUp, Clock, Eye, ThumbsUp } from "lucide-react";

const metrics = [
  { icon: Eye, value: "4.2x", label: "More property views", description: "Listings with VR tours receive significantly more engagement" },
  { icon: Clock, value: "73%", label: "Faster decisions", description: "Buyers make decisions faster with virtual walkthroughs" },
  { icon: TrendingUp, value: "45%", label: "Higher offers", description: "VR-enabled listings receive higher average offers" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction rate", description: "Clients rate our virtual tour experience as excellent" },
];

const MetricsSection = () => (
  <section className="py-24 bg-primary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-xs font-medium tracking-widest text-primary-foreground/60 uppercase">Proven Results</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-primary-foreground">
          The VR Advantage
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
            <m.icon className="w-6 h-6 text-primary-foreground/80 mx-auto mb-3" />
            <div className="font-display text-3xl font-bold text-primary-foreground mb-1">{m.value}</div>
            <div className="text-sm font-semibold text-primary-foreground/90 mb-2">{m.label}</div>
            <p className="text-xs text-primary-foreground/60">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
