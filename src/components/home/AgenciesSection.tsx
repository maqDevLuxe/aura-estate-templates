/* =============================================================================
   Section 3 — Featured Real Estate Agencies (Logo cloud)
   ============================================================================= */

import { Building2 } from "lucide-react";

const agencies = [
  "Sotheby's International",
  "Christie's Real Estate",
  "Compass",
  "Douglas Elliman",
  "Coldwell Banker",
  "Keller Williams",
];

const AgenciesSection = () => (
  <section className="py-16 border-b border-border">
    <div className="container mx-auto px-4">
      <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase mb-10">
        Trusted by Leading Real Estate Agencies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {agencies.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            <Building2 className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AgenciesSection;
