/* =============================================================================
   Section 9 — High-res Promo Video Area
   ============================================================================= */

import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">See It In Action</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
          Experience the Platform
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Watch how Vistara transforms the property viewing experience with immersive virtual technology.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden card-elegant group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=675&fit=crop"
            alt="Platform promo video thumbnail"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="text-primary-foreground text-sm font-medium drop-shadow-md">Vistara Platform Overview</span>
            <span className="text-primary-foreground/80 text-xs drop-shadow-md">2:45</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
