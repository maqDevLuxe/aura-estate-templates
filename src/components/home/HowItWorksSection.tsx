/* =============================================================================
   Section 5 — How It Works (Step-by-step with UI mockups)
   ============================================================================= */

import { Search, Eye, CalendarCheck, KeyRound } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse Properties",
    description: "Search through thousands of luxury listings with advanced filters for location, price, and amenities.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=350&fit=crop",
  },
  {
    icon: Eye,
    step: "02",
    title: "Take a Virtual Tour",
    description: "Experience an immersive 360° walkthrough of every room, garden, and view — right from your browser.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=350&fit=crop",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Schedule a Visit",
    description: "Found your perfect match? Book an in-person showing directly through the platform at your convenience.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=350&fit=crop",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Close the Deal",
    description: "Work with our vetted agents to finalize your purchase with full confidence and transparency.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=350&fit=crop",
  },
];

const HowItWorksSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Simple Process</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
          How It Works
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From discovery to keys in hand — our streamlined process makes luxury property buying effortless.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((s, i) => (
          <div
            key={s.step}
            className="bg-card rounded-xl overflow-hidden card-elegant group animate-fade-in"
            style={{ animationDelay: `${i * 0.12}s`, opacity: 0 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">{s.step}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
