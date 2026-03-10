/* =============================================================================
   Section 12 — User Engagement / Platform Interface Preview
   ============================================================================= */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Headphones, ArrowRight } from "lucide-react";

const devices = [
  { icon: Monitor, label: "Desktop", description: "Full-screen immersive experience with all controls" },
  { icon: Smartphone, label: "Mobile", description: "Tour properties on-the-go with touch navigation" },
  { icon: Headphones, label: "VR Headset", description: "Complete 360° immersion with compatible headsets" },
];

const PlatformPreviewSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* --- Left: Text + device list --- */}
        <div>
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Multi-Platform</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
            Tour on Any Device
          </h2>
          <p className="text-muted-foreground mb-8">
            Our platform delivers a seamless virtual tour experience across every screen size, from 4K monitors to VR headsets.
          </p>
          <div className="space-y-4 mb-8">
            {devices.map((d) => (
              <div key={d.label} className="flex items-start gap-4 p-4 rounded-xl bg-card card-elegant">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-0.5">{d.label}</h4>
                  <p className="text-xs text-muted-foreground">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/vr-tours">
            <Button variant="premium" size="lg" className="gap-2">
              Try a Demo Tour <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* --- Right: Interface preview mockup --- */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden card-elegant bg-card border border-border">
            <div className="bg-muted px-4 py-2.5 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warm-gold/60" />
                <div className="w-3 h-3 rounded-full bg-soft-teal/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-card rounded-md px-3 py-1 text-xs text-muted-foreground">vistara.io/tour/meridian-penthouse</div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop"
              alt="Platform interface preview"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          {/* --- Floating stat card --- */}
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-elegant border border-border animate-float">
            <div className="text-xs text-muted-foreground mb-1">Active viewers</div>
            <div className="font-display text-xl font-bold text-foreground">2,847</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformPreviewSection;
