/* =============================================================================
   Section 7 — Interactive Tour Demo Section
   ============================================================================= */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Maximize, ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  { name: "Living Room", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=500&fit=crop" },
  { name: "Kitchen", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=500&fit=crop" },
  { name: "Master Bedroom", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=500&fit=crop" },
  { name: "Bathroom", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=500&fit=crop" },
];

const TourDemoSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Live Preview</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
            Interactive Tour Demo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Navigate through a sample property to experience how our virtual tours work.
          </p>
        </div>

        {/* --- Tour viewer --- */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden card-elegant bg-card">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={rooms[current].image}
                alt={rooms[current].name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* --- Overlay controls --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

              {/* --- Room label --- */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
                {rooms[current].name}
              </div>

              {/* --- Navigation arrows --- */}
              <button
                onClick={() => setCurrent((p) => (p - 1 + rooms.length) % rooms.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/60 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setCurrent((p) => (p + 1) % rooms.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/60 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* --- Center play button --- */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors shadow-lg">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* --- Bottom toolbar --- */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="w-9 h-9 rounded-lg bg-card/60 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors">
                  <RotateCcw className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-9 h-9 rounded-lg bg-card/60 backdrop-blur-sm flex items-center justify-center hover:bg-card/80 transition-colors">
                  <Maximize className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            {/* --- Room navigation dots --- */}
            <div className="p-4 flex items-center justify-center gap-2">
              {rooms.map((room, i) => (
                <button
                  key={room.name}
                  onClick={() => setCurrent(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    current === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDemoSection;
