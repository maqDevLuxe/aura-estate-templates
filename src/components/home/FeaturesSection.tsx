/* =============================================================================
   Section 4 — Immersive VR Features (3-column cards)
   ============================================================================= */

import { Eye, Compass, Layers, Smartphone, Globe2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "360° Immersive Views",
    description: "Full spherical panoramic views captured in ultra-high resolution, letting you experience every angle of the property.",
  },
  {
    icon: Compass,
    title: "Interactive Navigation",
    description: "Move freely between rooms and floors with intuitive point-and-click navigation and guided tour paths.",
  },
  {
    icon: Layers,
    title: "3D Floor Plans",
    description: "Interactive three-dimensional floor plans that give you a bird's-eye understanding of the property layout.",
  },
  {
    icon: Smartphone,
    title: "Any Device, Anywhere",
    description: "Seamless experience across desktop, tablet, mobile, and VR headsets — no app download required.",
  },
  {
    icon: Globe2,
    title: "Global Property Access",
    description: "Tour luxury properties across 50+ cities worldwide without leaving the comfort of your home.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description: "Every property is professionally verified with up-to-date imagery and accurate specifications.",
  },
];

const FeaturesSection = () => (
  <section className="py-24 gradient-soft">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Platform Features</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
          Immersive Property Experiences
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our platform combines cutting-edge virtual reality with luxury real estate to deliver an unmatched viewing experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="bg-card rounded-xl p-8 card-elegant group animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
